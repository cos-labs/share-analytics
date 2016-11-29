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
    sortableObjectList: [{isPlaceholder: true}],


    // Initialize the list of additional charts that the user can add
    addableList: [],

    wall: false,

    storedDashboards: [],

    actions: {

        restoreDash: function(sd) {
            this.set('q',sd.get('q'));
            this.send('changeGte', sd.get('gte'));
            this.send('changeLte',sd.get('lte'));
//            this.set('tsInterval',sd.get('tsInterval'));
            this.set('sortableObjectList',sd.get('sortableObjectList'));
            this.set('addableList',sd.get('addableList'));
        },

        persistDashboard: function(n) {
            var record = this.store.createRecord('dashboard', {
                name: n,
                q: this.get('q'),
                gte: this.get('gte'),
                lte: this.get('lte'),
                tsInterval: this.get('tsInterval'),
                sortableObjectList: this.get('sortableObjectList'),
                addableList: this.get('addableList')
            });
            this.set('storedDashboards', this.store.peekAll('dashboard'));
            // In the future, we'll want to do:
            // record.save()
            // this.set('storedDashboards', this.store.findAll('dashboard'));
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

        addWidget: function(information) {
            this.get('currentUser').load().then((c) => {
                information.author = c.get('fullName');
                let widget = this.store.createRecord('widget',information);
                widget.save();
            });
        }

    },

});
