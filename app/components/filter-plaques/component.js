import Ember from 'ember';


var ID_FILTERS = ['contributors', 'funders', 'publishers', 'provider'];

//Any plaque name on this list will not show up in the plaques list 
var PLAQUE_BLACKLIST = ['recently_added_sort'];

export default Ember.Component.extend({
  filters: null,
  init () {


    this._super(...arguments);
    let parameters = this.get('parameters');
    var filters = Object.keys(parameters).filter((key) => {
      return key !== "page";
    }).map((key) => {
      return {
        "key": key,
        "value": parameters[key]
      }
    });


      // Find and format all query params that use ids for the value
      var ids = filters.filter((item) => {
        return ID_FILTERS.indexOf(item.key) !== -1;
      }).map((param) => {
        return {key: param.value}
      });
      // Fetch display names
      let promise
      if (ids.length > 0) {
        promise = this.fetchAgentDetails(ids)
      } else {
        promise = new Ember.RSVP.Promise((res, rej)=>{
          res("win");
          rej("error");
        });
      }

      promise.then((data) => {
        var displayFilters = filters.map((filter) => {
          var value = filter.value;
          for (let agentData of data) {
            if (value === agentData.id) {
              if(!agentData.name == ""){
                value = agentData.name;
              }
              break;
            }
          }
          let filterKey = filter.key;
          if(filter.key === 'publishers'){
           filterKey = 'provider';
         }
         if(value === 'project'){
          value += " & awards"
        }
        return {key: filterKey, value: value};
      });

        //Remove any blackListedNames 
        $.each(displayFilters, function( index, value ) {
          $.each(PLAQUE_BLACKLIST, function( i , blacklistedName ) {
            console.log(blacklistedName)
            if(value.key === blacklistedName){
              displayFilters.pop(index)
            }
          });
        });

        this.set('filters', displayFilters);
      });

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

    actions: {

      removeFilter(filter) {
        let filterKey = filter.key;
        if(filter.key === "provider"){
          filterKey = "publishers";
        }
        let queryParams = {};

        queryParams[filterKey] = undefined;
        queryParams['page'] = undefined;
        this.attrs.transitionToFacet("search", queryParams);
      },

      transitionToFacet(parameter, parameterValue) {
        let queryParams = {};
        queryParams[parameter] = parameterValue;
        this.attrs.transitionToFacet("search", queryParams);
      }

    }

  });
