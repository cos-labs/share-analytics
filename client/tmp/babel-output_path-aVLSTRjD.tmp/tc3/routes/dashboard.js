define('tc3/routes/dashboard', ['exports', 'ember', 'tc3/config/environment'], function (exports, _ember, _tc3ConfigEnvironment) {
    //
    exports['default'] = _ember['default'].Route.extend({

        setupController: function setupController(controller, model) {
            this._super(controller, model);
            var self = this;
            _ember['default'].run.schedule('afterRender', this, function () {
                var wall = new Freewall('#freewall');
                wall.reset({
                    draggable: true,
                    selector: '.widget',
                    animate: true,
                    cellW: 150,
                    cellH: 150,
                    fixSize: 0,
                    cacheSize: true,
                    onResize: function onResize() {
                        wall.refresh();
                    },
                    onBlockMove: function onBlockMove() {
                        console.log(this);
                    }
                });
                wall.fitWidth();
                _ember['default'].$(window).trigger('resize');
                controller.set('wall', wall);
            });
            this.addObserver('controller.q', function () {
                this.refresh();
            });
            this.addObserver('controller.gte', function () {
                this.refresh();
            });
            this.addObserver('controller.lte', function () {
                this.refresh();
            });
        },

        // Note that the above query is NOT perfect. But we'll go with it for now.
        model: function model() {
            //    let query = this.controllerFor('dashboard').get('q');
            //    let gte = this.controllerFor('dashboard').get('gte');
            //    let lte = this.controllerFor('dashboard').get('lte');
            //    let interval = this.controllerFor('dashboard').get('tsInterval');
            //    return Ember.$.ajax({
            //        url: ENV.apiUrl +  '/search/abstractcreativework/_search',
            //        crossDomain: true,
            //        type: 'POST',
            //        contentType: 'application/json',
            //        data: JSON.stringify({
            //            query: {
            //                bool: {
            //                    must: [
            //                        {
            //                            query_string: {
            //                                query: query
            //                            }
            //                        },
            //                        {
            //                            range: {
            //                                date: {
            //                                    gte: gte,
            //                                    lte: lte,
            //                                    format: "yyyy-MM-dd||yyyy"
            //                                }
            //                            }
            //                        }
            //                    ]
            //                }
            //            },
            //            from: 0,
            //                aggregations: {
            //                    sources: {
            //                        terms: {
            //                            field: 'sources.raw',
            //                            size: 200
            //                        }
            //                    },
            //                    contributors : {
            //                        terms : {
            //                            field: 'contributors.raw',
            //                            size: 200
            //                        }
            //                    },
            //                    tags : {
            //                        terms : {
            //                            field: 'tags.raw',
            //                            size: 200
            //                        }
            //                    },
            //                    articles_over_time: {
            //                        date_histogram: {
            //                            field: 'date',
            //                            interval: interval,
            //                            format:'yyyy-MM-dd'
            //                        },
            //                        aggregations: {
            //                            arttype: {
            //                                terms: {
            //                                    field: 'type'
            //                                }
            //                            }
            //                        }
            //                    }
            //                },
            //            })
            //    }).then((json) => {
            //        let aggregations = json.aggregations;
            //        let docs = json.hits.hits.map((hit) => {
            //            let source = Ember.Object.create(hit._source);
            //            let r = source.getProperties('type', 'title', 'description', 'language', 'date', 'date_created', 'date_modified', 'date_updated', 'date_published', 'tags', 'sources');
            //            r.id = hit._id;
            //            r.contributors = source.lists.contributors;
            //            r.funders = source.lists.funders;
            //            r.publishers = source.lists.publishers;
            //            r.institutions = source.lists.institutions;
            //            r.organizations = source.lists.organizations;
            //            return r;
            //        });
            //        return {aggregations: aggregations, docs: docs}; //allows us to access returned docs as model.docs, aggregations as model.aggregations

            //    });
        }
    });
});

/* global Freewall */
//import 'bower_components/freewall/freewall';