define('tc3/components/place-holder', ['exports', 'ember', 'tc3/config/environment'], function (exports, _ember, _tc3ConfigEnvironment) {
    exports['default'] = _ember['default'].Component.extend({

        widgetType: 'wild-card',
        aggregations: false,
        docs: false,

        classNames: ['widget'],
        classNameBindings: ['configuring', 'width', 'height'],

        widthSetting: 2,
        heightSetting: 2,

        width: 'width-2',
        height: 'height-2',

        computedHeight: 200,
        computedWidth: 200,

        resizedSignal: false,

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

        configuring: false,

        init: function init() {
            this._super.apply(this, arguments);
            this.fetchWidgetData();
        },

        didRender: function didRender() {
            this.sendAction('refreshWall');
            this.set('computedHeight', this.$().height());
            this.set('computedWidth', this.$().width());
        },

        fetchWidgetData: function fetchWidgetData() {
            var query, gte, lte, interval, data;
            return regeneratorRuntime.async(function fetchWidgetData$(context$1$0) {
                while (1) switch (context$1$0.prev = context$1$0.next) {
                    case 0:
                        query = this.get('q');
                        gte = this.get('gte');
                        lte = this.get('lte');
                        interval = this.get('tsInterval');
                        context$1$0.next = 6;
                        return regeneratorRuntime.awrap(_ember['default'].$.ajax({
                            url: _tc3ConfigEnvironment['default'].apiUrl + '/search/abstractcreativework/_search',
                            crossDomain: true,
                            type: 'POST',
                            contentType: 'application/json',
                            data: JSON.stringify({
                                query: { bool: { must: [{
                                            query_string: { query: query }
                                        }, {
                                            range: { date: {
                                                    gte: gte,
                                                    lte: lte,
                                                    format: "yyyy-MM-dd||yyyy"
                                                } }
                                        }] } },
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
                                            arttype: { terms: { field: 'type' } }
                                        }
                                    }
                                }
                            })
                        }));

                    case 6:
                        data = context$1$0.sent;

                        this.set('aggregations', data.aggregations);
                        this.set('docs', data.hits.hits.map(function (hit) {
                            var source = _ember['default'].Object.create(hit._source);
                            var r = source.getProperties('type', 'title', 'description', 'language', 'date', 'date_created', 'date_modified', 'date_updated', 'date_published', 'tags', 'sources');
                            r.id = hit._id;
                            r.contributors = source.lists.contributors;
                            r.funders = source.lists.funders;
                            r.publishers = source.lists.publishers;
                            r.institutions = source.lists.institutions;
                            r.organizations = source.lists.organizations;
                            return r;
                        }));
                        this.set('widgetType', 'donut-chart');

                    case 10:
                    case 'end':
                        return context$1$0.stop();
                }
            }, null, this);
        },

        actions: {

            addChart: function addChart(option) {
                this.sendAction('addChart', option);
            },
            showConfig: function showConfig() {
                this.set('configuring', !this.get('configuring'));
            },
            makeDonut: function makeDonut() {
                this.set('widgetType', 'donut-chart');
            },
            makeTimeSeries: function makeTimeSeries() {
                this.set('widgetType', 'timeseries-chart');
            },
            makeBar: function makeBar() {
                this.set('widgetType', 'bar-chart');
            },
            removeWidget: function removeWidget() {
                this.sendAction('removeChart', this.get('item'));
            },
            configChanged: function configChanged() {
                console.log('changing config');
                var width = this.get('widthSetting');
                var height = this.get('heightSetting');
                var wall = this.get('wall');
                wall.fixSize({
                    block: this.$(),
                    width: width * 150,
                    height: height * 150
                });
                //wall.fitWidth();
                this.sendAction('refreshWall');
                this.set('resizedSignal', true);
                this.set('configuring', !this.get('configuring'));
            }

        }

    });
});