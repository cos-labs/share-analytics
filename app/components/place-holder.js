import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({

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

    configuring: false,

    init() {
        this._super(...arguments);
        this.fetchWidgetData();
    },

    didRender() {
        this.sendAction('refreshWall');
        this.set('computedHeight',  this.$().height());
        this.set('computedWidth', this.$().width());
    },

    fetchWidgetData: async function() {
        let query = this.get('q');
        let gte = this.get('gte');
        let lte = this.get('lte');
        let interval = this.get('tsInterval');
        let data = await Ember.$.ajax({
            url: ENV.apiUrl +  '/search/abstractcreativework/_search',
            crossDomain: true,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: { bool: { must: [{
                    query_string: {query: query}
                },{
                    range: { date: {
                        gte: gte,
                        lte: lte,
                        format: "yyyy-MM-dd||yyyy"
                    }}
                }]}},
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
            })
        });
        this.set('aggregations', data.aggregations);
        this.set('docs', data.hits.hits.map((hit) => {
            let source = Ember.Object.create(hit._source);
            let r = source.getProperties('type', 'title', 'description', 'language', 'date', 'date_created', 'date_modified', 'date_updated', 'date_published', 'tags', 'sources');
            r.id = hit._id;
            r.contributors = source.lists.contributors;
            r.funders = source.lists.funders;
            r.publishers = source.lists.publishers;
            r.institutions = source.lists.institutions;
            r.organizations = source.lists.organizations;
            return r;
        }));
        this.set('widgetType', 'donut-chart');
    },

    actions: {

        addChart: function(option) {
            this.sendAction('addChart', option);
        },
        showConfig: function() {
            this.set('configuring', !this.get('configuring'));
        },
        makeDonut: function() {
            // this.set('widgetType', 'donut-chart');
            console.log('asdf');
        },
        makeTimeSeries: function() {
            // this.set('widgetType', 'timeseries-chart');
            console.log('asdf');
        },
        makeBar: function() {
            // this.set('widgetType', 'bar-chart');
            console.log('asdf');
        },

        changeEngine: function(jsEngine){
            console.log(jsEngine);
        },

        changeChart: function(chart){
            console.log(this.widgetType);
            this.set('widgetType', chart);
            console.log(this.widgetType);
        },

        removeWidget: function() {
            this.sendAction('removeChart', this.get('item'))
        },
        configChanged: function() {
            console.log('changing config');
            let width = this.get('widthSetting');
            let height = this.get('heightSetting');
            let wall = this.get('wall')
            wall.fixSize({
                block: this.$(),
                width: width*150,
                height: height*150,
            });
            //wall.fitWidth();
            this.sendAction('refreshWall');
            this.set('resizedSignal', true);
            this.set('configuring', !this.get('configuring'));
        },

    },

});
