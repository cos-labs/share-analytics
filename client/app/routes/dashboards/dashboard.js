import Ember from 'ember';
/* global Freewall */
//import 'bower_components/freewall/freewall';
//
export default Ember.Route.extend({

    query: 'UC',
    gte: "1996-01-01",
    lte: (new Date()).toISOString().split('T')[0], // Set the ending date of our query to today's date, by default
    tsInterval: Ember.computed('gte','lte', function() { // Initialize the "bucket size" for our timeseries aggregations
        let d1 = new Date(this.get('gte'));
        let d2 = new Date(this.get('lte'));
        if((d2 - d1) >= 31622400000) { // If our dates are more than a year apart
           return 'month'; // We want to increment our TS data by months
        }
        if((7948800000 <= (d2 - d1)) && ((d2 - d1) < 31622400000)) { // If our dates are less than a year apart but more than three months apart
            return 'week'; // We want to increment our TS data by weeks
        }
        if((d2 - d1) < 7948800000) { // If our data are less than three months apart
            return 'day'; // We want to increment our TS data by days
        }
    }),

    model: function(params) {
        let query = this.get('query');
        let gte = this.get('gte');
        let lte = this.get('lte');
        let interval = this.get('tsInterval');
        return {
            user: {
                dasboardName: 'Scholar Dashboard',
                query: "eScholarship @ University of California",
                widgets: [
                    {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 2,
                        post_body: {
                            query: {
                                bool: {
                                  must: {
                                    query_string: {query: query}
                                  }
                                }
                            }
                        }
                    },
                    {
                        chartType: 'totalPublications',
                        widgetType: 'number-widget',
                        name: 'Total Publications',
                        width: 2,
                        post_body: {
                            query: {
                                bool: {
                                    must: {
                                        query_string: {query: query}
                                    },
                                    filter: [{
                                        term: {
                                            'type.raw': "publication"
                                        }
                                    }]
                                }
                            }
                        }
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'top-contributors',
                        name: 'Top Contributors',
                        width: 2,
                        post_body: {
                            query: {
                                bool: {
                                    must: {
                                        query_string: {query: query}
                                    }
                                }
                            },
                            from: 0,
                            aggregations: {
                                contributors : {
                                    terms : {
                                        field: 'contributors.raw',
                                        size: 10
                                    }
                                }
                            }
                        }
                    },
                    {
                        chartType: 'timeseries',
                        widgetType: 'c3-chart',
                        width: 2,
                        name:'timeser',
                        post_body: {
                            query: {
                                bool: { must: [{
                                    query_string: { query: query }
                                }, {
                                    range: { date: {
                                        gte: gte,
                                        lte: lte,
                                        format: "yyyy-MM-dd||yyyy"
                                    }}
                                }]}
                            },
                            from: 0,
                            aggregations: {
                                articles_over_time: {
                                    date_histogram: {
                                        field: 'date',
                                        interval: interval,
                                        format:'yyyy-MM-dd'
                                    },
                                    aggregations: {
                                        arttype: { terms: { field: 'type' } }
                                    }
                                }
                            }
                        }
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'don1',
                        width: 2,
                        post_body: {
                            query: {
                                bool: { must: [{
                                        query_string: {query: query}
                                    },{
                                        range: { date: {
                                                   gte: gte,
                                                   lte: lte,
                                                   format: "yyyy-MM-dd||yyyy"
                                                   }
                                        }
                                    }
                                ]}
                            },
                            from: 0,
                            aggregations: {
                                sources: {
                                    terms: {
                                         field: 'sources.raw',
                                         size: 200
                                    }
                                },
                                contributors : {
                                    terms : {
                                        field: 'contributors.raw',
                                        size: 200
                                    }
                                },
                                tags : {
                                    terms : {
                                        field: 'tags.raw',
                                        size: 200
                                    }
                                },
                                articles_over_time: {
                                    date_histogram: {
                                        field: 'date',
                                        interval: interval,
                                        format:'yyyy-MM-dd'
                                    },
                                    aggregations: {
                                        arttype: {terms: {field: 'type'}}
                                    }
                                }
                            }
                        }
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'don2',
                        width: 2,
                        post_body: {
                            query: {
                                bool: { must: [{
                                        query_string: {query: query}
                                    },{
                                        range: { date: {
                                                   gte: gte,
                                                   lte: lte,
                                                   format: "yyyy-MM-dd||yyyy"
                                                   }
                                        }
                                    }
                                ]}
                            },
                            from: 0,
                            aggregations: {
                                sources: {
                                    terms: {
                                         field: 'sources.raw',
                                         size: 200
                                    }
                                },
                                contributors : {
                                    terms : {
                                        field: 'contributors.raw',
                                        size: 200
                                    }
                                },
                                tags : {
                                    terms : {
                                        field: 'tags.raw',
                                        size: 200
                                    }
                                },
                                articles_over_time: {
                                    date_histogram: {
                                        field: 'date',
                                        interval: interval,
                                        format:'yyyy-MM-dd'
                                    },
                                    aggregations: {
                                        arttype: {terms: {field: 'type'}}
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            institution: {
                dasboardName: 'Institution Overview Dashboard',
                query: 'UC San Diego',
                widgets: [
                    {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 4,
                        post_body: {
                            query: {
                                bool: {
                                  must: {
                                    query_string: {query: query}
                                  }
                                }
                            }
                        },
                        widgetSettings : {
                            fontSize: 2,
                            fontColor: '#F44336'
                        }
                    },
                    {
                        chartType: 'numberValue',
                        widgetType: 'number-widget',
                        name: 'Funding from NIH',
                        width: 4,
                        post_body: null,
                        widgetSettings : {
                            value : '400',
                            fontSize: 2,
                            fontColor: '#F44336',
                            pre : '$',
                            post: 'M'
                        }
                    },
                    {
                        chartType: 'relatedResearchers',
                        widgetType: 'number-widget',
                        name: 'Related Researchers',
                        width: 4,
                        post_body : {
                            query: {
                                bool: {
                                    must: {
                                        query_string: {query: query}
                                    },
                                    filter: [{
                                        term: {
                                            "sources.raw": "eScholarship @ University of California"
                                        }
                                    }]
                                }
                            },
                            aggregations: {
                                "relatedContributors" : {
                                    cardinality : {
                                        field: "lists.contributors.id"
                                    }
                                }
                            }
                        },
                        widgetSettings : {
                            fontSize: 2,
                            fontColor: '#F44336'
                        }
                    },
                    {
                        chartType: 'timeseries',
                        widgetType: 'c3-chart',
                        name:'Date Histogram',
                        width: 12,
                        post_body: {
                            "query": {
                                "range" : {
                                    "date" : {
                                        "gte" : "now-10y/d",
                                        "lt" :  "now/d"
                                    }
                                }
                            },
                            "size": 10,
                            "aggregations": {
                                "sorted_by_type": {
                                    "terms": {
                                        "field": "type"
                                    },
                                    "aggregations": {
                                        "type_over_time": {
                                            "date_histogram": {
                                                "field": "date_updated",
                                                "interval": "1M",
                                                "format": "yyyy-MM-dd"
                                            }
                                        }
                                    }
                                },
                                "all_over_time": {
                                    "date_histogram": {
                                        "field": "date_updated",
                                        "interval": "1M",
                                        "format": "yyyy-MM-dd"
                                    }
                                }
                            }
                        }
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Contributors',
                        width: 4,
                        post_body : {
                            query: {
                                bool: {
                                    must: {
                                        query_string: {query: query}
                                    }
                                }
                            },
                            from: 0,
                            aggregations: {
                                listWidgetData : {
                                    terms : {
                                        field: 'contributors.raw',
                                        size: 10
                                    }
                                }
                            }
                        }
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Source',
                        width: 4,
                        post_body: {
                            query: {
                                bool: { must: [{
                                        query_string: {query: query}
                                    },{
                                        range: { date: {
                                                   gte: gte,
                                                   lte: lte,
                                                   format: "yyyy-MM-dd||yyyy"
                                                   }
                                        }
                                    }
                                ]}
                            },
                            from: 0,
                            aggregations: {
                                sources: {
                                    terms: {
                                         field: 'sources.raw',
                                         size: 200
                                    }
                                },
                                contributors : {
                                    terms : {
                                        field: 'contributors.raw',
                                        size: 200
                                    }
                                },
                                tags : {
                                    terms : {
                                        field: 'tags.raw',
                                        size: 200
                                    }
                                }
                            }
                        }
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        width: 4,
                        post_body : {
                            query: {
                                bool: {
                                    must: {
                                        query_string: {query: query}
                                    }
                                }
                            },
                            from: 0,
                            aggregations: {
                                listWidgetData : {
                                    terms : {
                                        field: 'tags',
                                        size: 10
                                    }
                                }
                            }
                        }
                    },
                                   ]
            },
            topic: {
                dasboardName: 'Institution Subject Area Dashboard',
                query: 'plasma',
                widgets: [
                    {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 4,
                        post_body: {
                            query: {
                                bool: {
                                  must: {
                                    query_string: {query: query}
                                  }
                                }
                            }
                        }
                    },
                    {
                        chartType: 'totalPublications',
                        widgetType: 'number-widget',
                        name: 'Total Publications',
                        width: 4,
                        post_body: {
                            query: {
                                bool: {
                                    must: {
                                        query_string: {query: query}
                                    },
                                    filter: [{
                                        term: {
                                            'type.raw': "publication"
                                        }
                                    }]
                                }
                            }
                        }
                    },
                    {
                        chartType: 'totalPublications',
                        widgetType: 'number-widget',
                        name: 'Total Publications',
                        width: 4,
                        post_body: {
                            query: {
                                bool: {
                                    must: {
                                        query_string: {query: query}
                                    },
                                    filter: [{
                                        term: {
                                            'type.raw': "publication"
                                        }
                                    }]
                                }
                            }
                        }
                    },
                    {
                        chartType: 'timeseries',
                        widgetType: 'c3-chart',
                        name:'Date Histogram',
                        width: 12,
                        post_body: {
                            "query": {
                                "range" : {
                                    "date" : {
                                        "gte" : "now-10y/d",
                                        "lt" :  "now/d"
                                    }
                                }
                            },
                            "size": 10,
                            "aggregations": {
                                "sorted_by_type": {
                                    "terms": {
                                        "field": "type"
                                    },
                                    "aggregations": {
                                        "type_over_time": {
                                            "date_histogram": {
                                                "field": "date_updated",
                                                "interval": "1M",
                                                "format": "yyyy-MM-dd"
                                            }
                                        }
                                    }
                                },
                                "all_over_time": {
                                    "date_histogram": {
                                        "field": "date_updated",
                                        "interval": "1M",
                                        "format": "yyyy-MM-dd"
                                    }
                                }
                            }
                        }
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'don1',
                        width: 3,
                        post_body: {
                            query: {
                                bool: { must: [{
                                        query_string: {query: query}
                                    },{
                                        range: { date: {
                                                   gte: gte,
                                                   lte: lte,
                                                   format: "yyyy-MM-dd||yyyy"
                                                   }
                                        }
                                    }
                                ]}
                            },
                            from: 0,
                            aggregations: {
                                sources: {
                                    terms: {
                                         field: 'sources.raw',
                                         size: 200
                                    }
                                },
                                contributors : {
                                    terms : {
                                        field: 'contributors.raw',
                                        size: 200
                                    }
                                },
                                tags : {
                                    terms : {
                                        field: 'tags.raw',
                                        size: 200
                                    }
                                },
                                articles_over_time: {
                                    date_histogram: {
                                        field: 'date',
                                        interval: interval,
                                        format:'yyyy-MM-dd'
                                    },
                                    aggregations: {
                                        arttype: {terms: {field: 'type'}}
                                    }
                                }
                            }
                        }
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'don2',
                        width: 3,
                        post_body: {
                            query: {
                                bool: { must: [{
                                        query_string: {query: query}
                                    },{
                                        range: { date: {
                                                   gte: gte,
                                                   lte: lte,
                                                   format: "yyyy-MM-dd||yyyy"
                                                   }
                                        }
                                    }
                                ]}
                            },
                            from: 0,
                            aggregations: {
                                sources: {
                                    terms: {
                                         field: 'sources.raw',
                                         size: 200
                                    }
                                },
                                contributors : {
                                    terms : {
                                        field: 'contributors.raw',
                                        size: 200
                                    }
                                },
                                tags : {
                                    terms : {
                                        field: 'tags.raw',
                                        size: 200
                                    }
                                },
                                articles_over_time: {
                                    date_histogram: {
                                        field: 'date',
                                        interval: interval,
                                        format:'yyyy-MM-dd'
                                    },
                                    aggregations: {
                                        arttype: {terms: {field: 'type'}}
                                    }
                                }
                            }
                        }
                    },
                    {
                        chartType: 'relevanceHistogram',
                        widgetType: 'c3-chart',
                        name:'Relevance Histogram',
                        width: 12,
                        post_body: {
                            query: {
                                bool: {
                                    must: [{
                                        query_string: {
                                            query: "hiv"
                                        }
                                    }]
                                }
                            },
                            size: 0,
                            aggregations: {
                                all_score: {
                                    histogram: {
                                            interval: 1,
                                            script: {
                                            lang: "expression",
                                                inline: "_score * 10"
                                        }
                                    }
                                },
                                filtered_score: {
                                    filters: {
                                        filters: {
                                            "UC": {
                                                term: {
                                                   'sources.raw': "eScholarship @ University of California"
                                                }
                                            },
                                            "DOE": {
                                                term: {
                                                    'sources.raw': "DoE's SciTech Connect Database"
                                                }
                                            }
                                        }
                                    },
                                    aggregations: {
                                        score: {
                                            histogram: {
                                                interval: 1,
                                                script: {
                                                    lang: "expression",
                                                    inline: "_score * 10"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        }[params.dashboard];
        //return Ember.RSVP.hash({
        //    widgets: this.get('store').peekAll('widget').map((item) => {
        //        return {
        //            name: item.get('name'),
        //            author: item.get('author'),
        //            width: item.get('width'),
        //            height: item.get('height'),
        //            query: item.get('query'),
        //            settings: item.get('settings')
        //        }
        //    }),
        //    settings: {}
        //});
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('widgets', model.widgets)
        controller.set('query', model.query)
        Ember.run.schedule('afterRender', this, () => {
           // var wall =  new Freewall('#freewall');
           // wall.reset({
           //     draggable: true,
           //     selector: '.widget',
           //     animate: true,
           //     cellW: 150,
           //     cellH: 150,
           //     fixSize: 0,
           //     cacheSize: true,
           //     onResize: function() {
           //         wall.refresh();
           //     },
           //     onBlockMove: function() {
           //         console.log(this);
           //     }
           // });
           // wall.fitWidth();
           // Ember.$(window).trigger('resize');
           // controller.set('wall', wall);
        });
        this.addObserver('controller.q', function() {
            this.refresh();
        });
        this.addObserver('controller.gte', function() {
            this.refresh();
        });
        this.addObserver('controller.lte', function() {
            this.refresh();
        });
    },

});
