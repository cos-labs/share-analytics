import Ember from 'ember';
import ENV from 'analytics-dashboard/config/environment';


export default Ember.Component.extend({

    data: [],

    init(){

        this._super(...arguments);
        var data = [];
        if (this.get('chartType') === 'recentlyAdded') {
            data = this.get('data.hits.hits').map(function(hits, index) {
                return {
                    number: index + 1,
                    name: hits._source.title,
                    url: 'https://share.osf.io/article/' + hits._source.id
                }
            });
            this.set('data', data);
        } else if (this.get('chartType') == 'highlightedCollections') {
            data = [
              {
                number: 1,
                name: 'CAVEcam Virtual Reality Photography Collection',
                url: 'https://share.osf.io/creativework/46002-874-0B4'
              },
              {
                number: 2,
                name: 'Data from: Carbonic Anhydrases, EPF2 and a Novel Protease Mediate CO2 Control of Stomatal Development',
                url: 'https://share.osf.io/dataset/4619D-B54-28E'
              },
              {
                number: 3,
                name: 'Heavy Metals in the Ocean Insect, Halobates',
                url: 'https://share.osf.io/creativework/4612B-AF0-7FB'
              },
              {
                number: 4,
                name: 'Keith Rayner Eye Movements in Reading Data Collection',
                url: 'https://share.osf.io/creativework/4601B-68A-696'
              },
              {
                number: 5,
                name: 'Stack Gas and Plume Aerosol Measurements from Renewable Diesel and Ultra Low Sulfur Diesel in At-Sea Operation of Research Vessel Robert Gordon Sproul',
                url: 'https://share.osf.io/dataset/4607A-27C-FB9'
              }
            ];
            this.set('data', data);
        }
        else {
            if(this.get('aggregations.contributors')){
                this.processData(this.get('aggregations.contributors.buckets'));
            }
            if(this.get('aggregations.publishers')){
                this.processData(this.get('aggregations.publishers.buckets'));
            }
        }

    },

    processData: async function(data) {
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

        transitionToFacet(id) { //Two different items here; one refers to the widget; one refers to the datum.
            let queryParams = {};
            var facet = this.get("item.facetDashParameter");
            let facetDash = this.get("item.facetDash");
            if (facetDash === "url" && item.url) {
                window.location.href = item.url;
                return;
            }
            if (facet) {
                if (facetDash === "objectDetail" || facetDash === "agentDetail") {
                    queryParams[facet] = id;
                }
                if (facetDash === "resultsList") {
                    queryParams[facet] = id;
                }
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }
        },
        transitionToViewAll(item) {
            this.attrs.transitionToFacet(item.dataType, item);
        }

    }
});
