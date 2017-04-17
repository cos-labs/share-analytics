import Ember from 'ember';

export default Ember.Component.extend({
    dropList: Ember.A(),
    firstRow: 'Select type', // Text for visible first row on dropdown,
    mode: 'dropdown', // Can be dropdown or search
    filteredList: [],
    filterText: '',
    showList: false,
    init(){
        this._super(...arguments);
        // check settings to see what the mode is
        let settings = this.get('widgetSettings');
        if (settings && settings.mode){
            this.set('mode', settings.mode);
        }
        this.processData(this.get('aggregations.dropdownList.buckets'));

    },
    processData (data) {
        if(this.get('mode') === 'dropdown'){
            this.get('dropList').addObject(this.get('firstRow'));
        }
        data.forEach(item => {
            this.get('dropList').addObject(item.key);
            this.get('filteredList').addObject(item.key);
        });
    },
    filter () {

    },
    actions: {
        transitionToFacet(value) { //Two different items here; one refers to the widget; one refers to the datum.
            let queryParams = {};
            var facet = this.get("item.facetDashParameter");
            if (facet) {
                queryParams[facet] = value;
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }
        },
        applyType (value) {
            if(value !== this.get('firstRow')){
                this.send('transitionToFacet', value);
            }
        },
        filterVisible(){
            console.log()
            let filtered = this.get('dropList').filter((val)=>{
                return val.includes(this.get('filterText').toLowerCase());
            });
            this.set('filteredList', filtered);
        },
        showList(){
            this.set('showList', true);
        },
        hideList(){
            this.set('showList', false);
        }
    }

});
