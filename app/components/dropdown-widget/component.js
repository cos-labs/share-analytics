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
    updatedData: Ember.observer('data', function(){
        if(this.get('widgetSettings.aggregationTitle')){
          this.processData(this.get('data'));
      }
  }),
    typingTimer: null,
    init(){
        this._super(...arguments);
        // check settings to see what the mode is
        let settings = this.get('widgetSettings');
        if (settings && settings.mode){
            this.set('mode', settings.mode);
        }
        this.set('dropList', Ember.A());
        this.set('filteredList', Ember.A());
        let aggregationsData = this.get('aggregations.dropdownList.buckets') || this.get('aggregations.publishers.buckets');
        this.processData(aggregationsData);
        // Show the selected parameter
        let queryParams = this.get('parameters');
        var facet = this.get("item.facetDashParameter");

        if(queryParams[facet]){
            if(facet === 'type'){
                this.set('selectedType', queryParams[facet]);
                if(queryParams[facet] === "project"){
                    this.set('selectedType', queryParams[facet] + " & awards");

                }

            } else if (facet === 'funders' || facet === 'publishers' || facet === 'contributors') {
                let id = { key : queryParams[facet] }
                console.log('id' , id);

                this.fetchAgentDetails([id]).then((data) => {
                    if(data[0]){
                        this.set('enteredItem', data[0].name);
                    }
                });
            } else {
                this.set('enteredItem', queryParams[facet]);
            }

        }
    },
    fetchAgentDetails: async function(agentList) {

        let agent_details = await Ember.$.ajax({
            url: 'https://dev-labs.cos.io/bulk_get_agents',
            crossDomain: true,
            data: JSON.stringify(agentList),
            type: 'POST',
            contentType: 'application/json'
        });
        return JSON.parse(agent_details);
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
        this.get('dropList').clear();
        this.get('filteredList').clear();
        data.forEach(item => {
            let obj = {};
            if(item.doc_count){
                if(item.doc_count > 0){
                    obj.key = item.key
                    if(item.name){
                        obj.name = item.name.buckets[0].key;
                    }
                } else {
                    return;
                }
            } else if (item.number){
                if(item.number > 0){
                    obj.key = item.id;
                    obj.name = item.name;
                } else {
                    return;
                }
            }
            if(obj.key === 'project'){
                obj.key += ' & awards'
            }
            this.get('dropList').addObject(obj);
            this.get('filteredList').addObject(obj);
        });
    },
    actions: {
        transitionToFacet(value) { //Two different items here; one refers to the widget; one refers to the datum.
            let queryParams = {};
            var facet = this.get("item.facetDashParameter");
            if (facet) {
                queryParams[facet] = value;
                queryParams["page"] = undefined;
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
        debouncedfilterVisible: function() {
            clearTimeout(this.get('typingTimer'));
            let typingTimer = setTimeout(function() {this.send('filterVisible')}.bind(this), 500);
            this.set('typingTimer' , typingTimer);
        }, 
        resetDebounce: function() {
            clearTimeout(this.get('typingTimer'));
        },   
        filterVisible: async function() {

            let widget_category = this.get('item.facetDashParameter');
            let term_name = "lists." + this.get('item.facetDashParameter') + ".name.exact";
            if(widget_category ==='tags'){
                term_name =  this.get('item.facetDashParameter') + ".exact";
            }
            let search_term_query = this.get('filterText');
            let search_term = "^"+this.get('filterText');



            let first_char_search_term = search_term_query.charAt(0).toLowerCase();
            if (search_term_query.length > 1) {
                search_term_query = search_term_query.slice(1, search_term_query.length);
                search_term_query = "[" + first_char_search_term + first_char_search_term.toUpperCase() + "]" + search_term_query + "(.*)";
            } else {
                search_term_query = search_term_query + "(.*)";
            }

            let filter_query = {
                "query": {
                    "bool": {
                        "must": {
                            "regexp": {
                                [term_name]: {
                                    "value": search_term_query
                                }
                            }
                        }
                    }
                }
            }

            let filter_data = await Ember.$.ajax({
                url: 'https://dev-labs.cos.io/records/_search?request_cache=true',
                crossDomain: true,
                data: JSON.stringify(filter_query),
                type: 'POST',
                contentType: 'application/json'
            });

            this.send('filterInput' ,widget_category, filter_data , search_term)



    
    },
    filterInput(type, filter_data, search_term){
        let afilteredList = filter_data.hits.hits.map(function(x) {
                let contributorsList;
                
                if(type === 'tags'){
                    contributorsList = x._source.tags.map(function(y) {
                        return {
                            key: y,
                            name: y
                        };
                    });
                }else{
                    contributorsList = x._source.lists[type].map(function(y) {
                        return {
                            key: y.id,
                            name: y.name
                        };
                    });
                }


                var filteredContribList = contributorsList.filter(function(word) {
                    return word.name.toLowerCase().match(search_term.toLowerCase());
                });


               return filteredContribList;
           });



        let flattenedFilteredContribList = afilteredList.reduce(function(a, b) {
          return a.concat(b);
      }, []);



        for(let i = 0; i < flattenedFilteredContribList.length; i++){
            for(let k = i+1; k < flattenedFilteredContribList.length; k++){
                if(flattenedFilteredContribList[i].name == flattenedFilteredContribList[k].name){
                    flattenedFilteredContribList.splice( k, 1 );
                }
            }
        }
        this.set('filteredList', Array.from(new Set(flattenedFilteredContribList)));
    },
    showList(){
        this.set('showList', true);
    }
}

});
