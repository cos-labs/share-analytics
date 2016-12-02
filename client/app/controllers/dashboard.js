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
        let items = this.store.peekAll('widget');
        let widgets = [];
        items.forEach(function(item, index, enumerable){
            widgets.push({
                name: item.get('name'),
                author: item.get('author'),
                width: item.get('width'),
                height: item.get('height'),
                query: item.get('query'),
                settings: item.get('settings')});
        });
        this.set('widgets', widgets);
    },

    actions: {

        restoreWidgets: function(){
            let items = this.store.peekAll('widget');
            let widgets = [];
            items.forEach(function(item, index, enumerable){
                widgets.push({
                    name: item.get('name'),
                    author: item.get('author'),
                    width: item.get('width'),
                    height: item.get('height'),
                    query: item.get('query'),
                    settings: item.get('settings')});
            });

            this.set('widgets', widgets);
              if(this.get('widgets').length > 0){
                this.set('sortableObjectList', this.get('widgets').slice());
              }
        },

        changeQ: function(query) {
            this.set('q',query);
        },

        changeGte: function(g) {
            g = new Date(g);
            this.set('gte', g.toISOString().split('T')[0]); // ES won't accept the full ISOString; had to abbreviate it (no T portion)
        },

        changeLte: function(l) {
            l = new Date(l);
            this.set('lte',l.toISOString().split('T')[0]);
        },

        sortEndAction: function() {

        },

        removeChart: function(chart) {
            this.set('sortableObjectList', this.get('sortableObjectList').filter(function(item) {
                return item !== chart;
            }).slice());
        },

        addChart: function(option) {
            this.set('sortableObjectList', this.get('sortableObjectList').addObject({isPlaceholder: true}).slice());
        },

        refreshWall: function() {
            console.log('refreshing wall');
            let wall = this.get('wall');
            wall && wall.refresh();
        },

        dashboardSaveWidget: function(information) {
            this.get('currentUser').load().then((c) => {

                    information.author = c.get('fullName');
                    this.set('widgets', this.get('widgets').addObject(information).slice());
                    let widget = this.store.createRecord('widget',information);
                    widget.save();
                    alert("Chart has been successfully saved!");
            }, function(r){
                alert("Log in at first to save widget!");
            });
        }

    },

});
