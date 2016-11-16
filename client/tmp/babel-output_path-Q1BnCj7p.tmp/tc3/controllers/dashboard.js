define('tc3/controllers/dashboard', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({

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

        // Initialize the three interchangeable charts to be rendered as sortableObjects
        sortableObjectList: [{ isDonut: true }, { isBar: true }, { isWildcard: true }],

        // Initialize the list of additional charts that the user can add
        addableList: [],

        storedDashboards: [],

        actions: {

            restoreDash: function restoreDash(sd) {
                this.set('q', sd.get('q'));
                this.send('changeGte', sd.get('gte'));
                this.send('changeLte', sd.get('lte'));
                //            this.set('tsInterval',sd.get('tsInterval'));
                this.set('sortableObjectList', sd.get('sortableObjectList'));
                this.set('addableList', sd.get('addableList'));
            },

            persistDashboard: function persistDashboard(n) {
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

            changeQ: function changeQ(query) {
                this.set('q', query);
            },

            changeGte: function changeGte(g) {
                g = new Date(g);
                this.set('gte', g.toISOString().split('T')[0]); // ES won't accept the full ISOString; had to abbreviate it (no T portion)
            },

            changeLte: function changeLte(l) {
                l = new Date(l);
                this.set('lte', l.toISOString().split('T')[0]);
            },

            sortEndAction: function sortEndAction() {},

            removeChart: function removeChart(chart) {
                if (chart === 'donut') {
                    // If we're removing the donut chart
                    this.set('sortableObjectList', this.get('sortableObjectList').filter(function (item, index, enumerable) {
                        return !item.isDonut; // Filter for all array elements that aren't the donut chart
                    }));
                    this.get('addableList').addObject({ isDonut: true });
                } else if (chart === 'bar') {
                    // If we're removing the bar chart
                    this.set('sortableObjectList', this.get('sortableObjectList').filter(function (item, index, enumerable) {
                        return !item.isBar; // Filter for all array elements that aren't the bar chart
                    }));
                    this.get('addableList').addObject({ isBar: true });
                } else if (chart === 'wildcard') {
                    // If we're removing the wildcard chart
                    this.set('sortableObjectList', this.get('sortableObjectList').filter(function (item, index, enumerable) {
                        return !item.isWildcard; // Filter for all array elements that aren't the wildcard chart
                    }));
                    this.get('addableList').addObject({ isWildcard: true });
                }
                this.get('sortableObjectList').addObject({ isPlaceholder: true }); // Always add a placeholder "chart" in the place of the removed chart
            },

            addChart: function addChart(option) {
                /*if(option.isDonut) {
                    this.get('sortableObjectList').addObject({isDonut: true});
                    this.set('addableList', this.get('addableList').filter(function(item, index, enumerable) { 
                        return !(item.isDonut); // Remove donut from the list of addable charts
                    }));
                }
                else if(option.isBar) {
                    this.get('sortableObjectList').addObject({isBar: true});
                    this.set('addableList', this.get('addableList').filter(function(item, index, enumerable) { 
                        return !(item.isBar); // Remove bar from the list of addable charts
                    }));
                }
                else if(option.isWildcard) {*/
                this.get('sortableObjectList').addObject({ isWildcard: true });
                //this.set('addableList', this.get('addableList').filter(function(item, index, enumerable) {
                //    return !(item.isWildcard); // Remove wildcard from the list of addable charts
                //}));
                //}
                // Note that the remainder of this function is a really f*ckn weird way to:
                // 1. Remove the SINGLE placeholder we just replaced with a chart
                // 2. Add back any placeholders that are still necessary to fill the row with 3 elements
                // This is necessary because the filtering method below will remove ALL of the placeholders, not just one
                // Unfortunately, Ember array methods that would enable the removal of just one placeholder (e.g. lastIndexOf, removeObject, etc.) aren't working
                //this.set('sortableObjectList', this.get('sortableObjectList').filter(function(item, index, enumerable) {
                //    return !(item.isPlaceholder); // Remove all placeholders from the array of charts to be displayed (we don't want this as our end result)
                //}));
                //let l = this.get('sortableObjectList').length;
                //if(l < 3) { // If we're now displaying fewer than 3 charts
                //    let n = 3 - l;
                //    let i = 0;
                //    while(i < n) { // Add placeholder charts back until we're displaying 3 charts
                //        this.get('sortableObjectList').addObject({isPlaceholder: true});
                //        i++;
                //    }
                //}
            }

        },

        sortableObjectListChanged: _ember['default'].observer('sortableObjectList', function () {})

    });
});