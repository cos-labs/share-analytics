import Ember from 'ember';
import ENV from 'analytics-dashboard/config/environment';


export default Ember.Component.extend({
    data: [],
    init(){
        this._super(...arguments);
        if (this.get('chartType') === 'recentlyAdded') {
            var data = this.get('data.hits.hits').map(function(hits, index) {
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
            this.processData(this.get('aggregations.contributors.buckets'));
        }
    },
    processData: function(data) {
        data.forEach(async (item, index) => {
            let datum = await Ember.$.ajax({
                url: ENV.apiUrl + '/search/agents/' + item.key,
                crossDomain: true,
                type: 'GET',
                contentType: 'application/json',
            });
            let data = this.get('data');
            data[index] = datum._source;
            data[index].number = item.doc_count;
            this.set("data", Array.prototype.slice.call(data));
        });
    },
    actions: {
        transitionToFacet(item) {
            let queryParams = {};
            var facet = this.get("item.facetDashParameter");
            if (facet) {
                queryParams[facet] = item.name;
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            } else if (item.url) {
              window.location.href = item.url;
            }
        },
        transitionToViewAll(item) {
            this.attrs.transitionToFacet(item.dataType, item);
        }
    }
});
