define('tc3/components/place-holder', ['exports', 'ember', 'tc3/config/environment'], function (exports, _ember, _tc3ConfigEnvironment) {
    exports['default'] = _ember['default'].Component.extend({

        // Initialize our query parameters
        q: 'UC Santa Barbara',
        gte: "1996-01-01",
        lte: new Date().toISOString().split('T')[0], // Set the ending date of our query to today's date, by default

        tsInterval: _ember['default'].computed('gte', 'lte', function () {
            // Initialize the "bucket size" for our timeseries aggregations
            var d1 = new Date(this.get('gte'));
            var d2 = new Date(this.get('lte'));
            if (d2 - d1 >= 31622400000) {
                // If our dates are more than a year apart
                return 'month'; // We want to increment our TS data by months
            }
            if (7948800000 <= d2 - d1 && d2 - d1 < 31622400000) {
                // If our dates are less than a year apart but more than three months apart
                return 'week'; // We want to increment our TS data by weeks
            }
            if (d2 - d1 < 7948800000) {
                // If our data are less than three months apart
                return 'day'; // We want to increment our TS data by days
            }
        }),
        classNameBindings: ['configuring'],

        configuring: false,

        widgetConfig: _ember['default'].computed('q', 'gte', 'lte', 'tsInterval', function () {
            var query = this.get('q');
            var gte = this.get('gte');
            var lte = this.get('lte');
            var interval = this.get('tsInterval');
            var data = _ember['default'].$.ajax({
                url: _tc3ConfigEnvironment['default'].apiUrl + '/search/abstractcreativework/_search',
                crossDomain: true,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    query: {
                        bool: {
                            must: [{
                                query_string: {
                                    query: query
                                }
                            }, {
                                range: {
                                    date: {
                                        gte: gte,
                                        lte: lte,
                                        format: "yyyy-MM-dd||yyyy"
                                    }
                                }
                            }]
                        }
                    },
                    from: 0,
                    aggregations: {
                        sources: {
                            terms: {
                                field: 'sources.raw',
                                size: 200
                            }
                        },
                        contributors: {
                            terms: {
                                field: 'contributors.raw',
                                size: 200
                            }
                        },
                        tags: {
                            terms: {
                                field: 'tags.raw',
                                size: 200
                            }
                        },
                        articles_over_time: {
                            date_histogram: {
                                field: 'date',
                                interval: interval,
                                format: 'yyyy-MM-dd'
                            },
                            aggregations: {
                                arttype: {
                                    terms: {
                                        field: 'type'
                                    }
                                }
                            }
                        }
                    }
                })
            });
            var aggs = data.then(function (json) {
                return json.aggregations;
            });
            var docs = data.then(function (json) {
                return json.hits.hits.map(function (hit) {
                    var source = _ember['default'].Object.create(hit._source);
                    var r = source.getProperties('type', 'title', 'description', 'language', 'date', 'date_created', 'date_modified', 'date_updated', 'date_published', 'tags', 'sources');
                    r.id = hit._id;
                    r.contributors = source.lists.contributors;
                    r.funders = source.lists.funders;
                    r.publishers = source.lists.publishers;
                    r.institutions = source.lists.institutions;
                    r.organizations = source.lists.organizations;
                    return r;
                });
            });
            return _ember['default'].RSVP.hash({
                aggregations: aggs,
                docs: docs,
                type: 'donut-chart'
            });
        }),

        chart: (function () {
            return this.get('type');
        }).property('widgetConfig.type'),

        actions: {
            addChart: function addChart(option) {
                this.sendAction('addChart', option);
            },
            showConfig: function showConfig() {
                this.set('configuring', !this.get('configuring'));
            }
        }

    });
});