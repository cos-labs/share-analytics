import Ember from 'ember';

var ID_FILTERS = ['contributors', 'funders', 'publishers', 'tags' , 'type', 'query', 'start', 'end'];

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
      if (ids.length > 0) {
        this.fetchAgentDetails(ids).then((data) => {
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

           console.log(value)
           return {key: filterKey, value: value};
         });
          this.set('filters', displayFilters);
        });
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

    actions: {

      removeFilter(filter) {
        console.log(filter.key)
        if(filter.key === "provider"){
          console.log('ffffff')
          filter.key = "publishers";
        }
        let queryParams = {};
        console.log('filter', filter , queryParams)
        queryParams[filter.key] = undefined;
        queryParams['page'] = undefined;
        console.log('queryParams')
        console.log(queryParams)
        this.attrs.transitionToFacet("search", queryParams);
      },

      transitionToFacet(parameter, parameterValue) {
                console.log('parameter', parameter , 'parameterValue',parameterValue)

        let queryParams = {};
        queryParams[parameter] = parameterValue;
        this.attrs.transitionToFacet("search", queryParams);
      }

    }

  });
