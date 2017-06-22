import Ember from 'ember';

export default Ember.Component.extend({
    dropList: null,
    firstRow: 'Select type', // Text for visible first row on dropdown,
    mode: 'dropdown', // Can be dropdown or search
    filteredList: null,
    filterText: '',
    showList: false,
    selectedType: null, // If mode of widget is dropdown, this will be set to item listed in query parameters
    enteredItem: null, // If mode of widget is search, this will be set to the term in query parameters
    init(){
        this._super(...arguments);
        // check settings to see what the mode is
        let settings = this.get('widgetSettings');
        if (settings && settings.mode){
            this.set('mode', settings.mode);
        }
        this.set('dropList', Ember.A());
        this.set('filteredList', Ember.A());
        this.processData(this.get('aggregations.dropdownList.buckets'));
        // Show the selected parameter
        let queryParams = this.get('parameters');
        var facet = this.get("item.facetDashParameter");
        if(queryParams[facet]){
            if(facet === 'type'){
                this.set('selectedType', queryParams[facet]);
            } else {
                this.set('enteredItem', queryParams[facet]);
            }

        }
    },
    outsideClick(event){
        if(!this.get('showList')){ return;}
        let $element = this.$();
        let $target = $(event.target);

        if ($element && $target && !$target.closest($element).length) {
            this.set('showList', false);
        }
    },
    didInsertElement() {
        if(this.get('mode') === 'dropdown' ){
            return;
        }
        let clickHandler = this.get('outsideClick').bind(this);
        Ember.$(document).on('click', clickHandler);
    },
    willDestroyElement(){
        if(this.get('mode') === 'dropdown' ){
            return;
        }
        let clickHandler = this.get('outsideClick').bind(this);
        Ember.$(document).off('click', clickHandler);
    },
    processData (data) {
        data.forEach(item => {
            if(item.doc_count > 0){
                let obj = {
                  key: item.key
                };
                if(item.name){
                  obj.name = item.name.buckets[0].key;
                }
                this.get('dropList').addObject(obj);
                this.get('filteredList').addObject(obj);
            }
        });
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
        removeFilter(key) {
            let queryParams = {};
            queryParams[key] = undefined;
            this.attrs.transitionToFacet("search", queryParams);
        },
        applySelection (value) {
            this.send('transitionToFacet', value);
        },
        filterVisible(){
            let filtered = this.get('dropList').filter((val)=>{
                val = val['name'] ? val['name'] : val['key'];
                return val.toLowerCase().includes(this.get('filterText').toLowerCase());
            });
            this.set('filteredList', filtered);
        },
        showList(){
            this.set('showList', true);
        }
    }

});
