import Ember from 'ember';

export default Ember.Component.extend({
    data : [],
    init(){
        this._super(...arguments);
        if (this.get('chartType') === 'recentlyAdded') {
            var data = this.get('data.hits.hits').map(function(hits, index) {
                return {
                    number: index + 1,
                    name: hits._source.title,
                    id: hits._source.id
                }
            });
            this.set('data', data);
        } else if (this.get('chartType') == 'highlightedCollections') {
            data = [
              {
                number: 1,
                name: 'CAVEcam Virtual Reality Photography Collection',
                id: '46002-874-0B4'
              },
              {
                number: 2,
                name: 'Data from: Carbonic Anhydrases, EPF2 and a Novel Protease Mediate CO2 Control of Stomatal Development',
                id: '4619D-B54-28E'
              },
              {
                number: 3,
                name: 'Heavy Metals in the Ocean Insect, Halobates',
                id: '4612B-AF0-7FB'
              },
              {
                number: 4,
                name: 'Keith Rayner Eye Movements in Reading Data Collection',
                id: '4601B-68A-696'
              },
              {
                number: 5,
                name: 'Stack Gas and Plume Aerosol Measurements from Renewable Diesel and Ultra Low Sulfur Diesel in At-Sea Operation of Research Vessel Robert Gordon Sproul',
                id: '4607A-27C-FB9'
              }
            ];
            this.set('data', data);
        } else if (this.get('chartType') === 'topContributors') {
            this.fetchAgentDetails(this.get('aggregations.listWidgetData.buckets'));
        } else {
            this.processData(this.get('aggregations.listWidgetData.buckets'));
        }
    },
    processData (data) {
        this.set('data', data.map((raw_datum) => {
            return {
                number: raw_datum.doc_count,
                name: raw_datum.key
            };
        }));
    },

    fetchAgentDetails: async function(data) {
        let agent_details = await Ember.$.ajax({
            url: 'https://dev-labs.cos.io/bulk_get_agents',
            crossDomain: true,
            data: JSON.stringify(data),
            type: 'POST',
            contentType: 'application/json'
        });
        this.set("data", JSON.parse(agent_details));
    },

    actions: {
        transitionToFacet(item) { //Two different items here; one refers to the widget; one refers to the datum.
            let queryParams = {};
            var facet = this.get("item.facetDashParameter");
            let facetDash = this.get("item.facetDash");
            if (facet) {
                queryParams[facet] = item.name;
                if (facet === 'contributors' || facet === 'publishers') {
                  queryParams["page"] = undefined;
                }
                if (facetDash === "objectDetail" || facetDash === "agentDetail" || facet === 'contributors' || facet === 'publishers') {
                    queryParams[facet] = item.id;
                }
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }
        },
        transitionToViewAll(item) {
            this.attrs.transitionToFacet(item.dataType, {});
        }
    }
});
