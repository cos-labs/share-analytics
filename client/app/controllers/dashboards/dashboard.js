import Ember from 'ember';

export default Ember.Controller.extend({

    // Initialize our query parameters
    currentUser: Ember.inject.service(),
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

    // Initialize the three interchangeable charts to be rendered as sortableObjects
    sortableObjectList: [{chartType: 'donut'}, {chartType: 'donut'}],
    widgets: [],

    // Initialize the list of additional charts that the user can add
    addableList: [],

    wall: false,

    storedDashboards: [],

    init(){
    },

    actions: {
        restoreWidgets: function(){
           // let items = this.store.peekAll('widget');
           // let widgets = [];
           // items.forEach(function(item, index, enumerable){
           //     widgets.push({
           //         name: item.get('name'),
           //         author: item.get('author'),
           //         width: item.get('width'),
           //         height: item.get('height'),
           //         query: item.get('query'),
           //         settings: item.get('settings')});
           // });

           // this.set('widgets', this.get('store').peekAll('widget').map((item) => {
           //     return {
           //         name: item.get('name'),
           //         author: item.get('author'),
           //         width: item.get('width'),
           //         height: item.get('height'),
           //         query: item.get('query'),
           //         settings: item.get('settings')
           //     });
           // });
        },

        changeQ: function(query) {
            this.set('q',query);
        },

        changeGte: function(g) {
            g = new Date(g);
            this.set('gte', g.toISOString().split('T')[0]); // Elasticsearch doesn't accept timezone information.
        },

        changeLte: function(l) {
            l = new Date(l);
            this.set('lte',l.toISOString().split('T')[0]);
        },

        sortEndAction: function() {

        },

        removeChart: function(chart) { // TODO This function should allow passing multiple charts to remove.
            this.set('widgets', this.get('widgets').filter(function(item) {
                return item !== chart;
            }).slice());
        },

        addChart: function(option) { // TODO this function should allow passing multiple charts to add.
            this.set('widgets', this.get('widgets').concat({isPlaceholder: true}));
        },

        refreshWall: function() {
            console.log('refreshing wall');
            let wall = this.get('wall');
            wall && wall.refresh();
        },

        dashboardSaveWidget: function(information) { // TODO This function should allow passing multiple charts to save.
            this.get('currentUser').load().then((c) => {
                information.author = c.get('fullName');
                this.set('widgets', this.get('widgets').addObject(information).slice());
                let widget = this.store.createRecord('widget',information);
                widget.save();
                // TODO: This should not be an alert, but a growl-style notification.
                //alert("Chart has been successfully saved!");
            }, function(r){
                // TODO: This should not be an alert, but a growl-style notification.
                alert("Widgets cannot be saved anonymously. Log in to save a widget.");
            });
        }

    },

});
