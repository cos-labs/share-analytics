import Ember from 'ember';

const ucsd_lucene_query = 'contributors:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20publishers:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20funders:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20title:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20hosts:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20%20tags:ucsd%20OR%20tags:"scripps%20institution%20of%20oceanography"';

export default Ember.Component.extend({
    data : [],
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
                url: 'https://share.osf.io/creativework/46002-874-0B4',
                id: '46002-874-0B4'
              },
              {
                number: 2,
                name: 'Data from: Carbonic Anhydrases, EPF2 and a Novel Protease Mediate CO2 Control of Stomatal Development',
                url: 'https://share.osf.io/dataset/4619D-B54-28E',
                id: '4619D-B54-28E'
              },
              {
                number: 3,
                name: 'Heavy Metals in the Ocean Insect, Halobates',
                url: 'https://share.osf.io/creativework/4612B-AF0-7FB',
                id: '4612B-AF0-7FB'
              },
              {
                number: 4,
                name: 'Keith Rayner Eye Movements in Reading Data Collection',
                url: 'https://share.osf.io/creativework/4601B-68A-696',
                id: '4601B-68A-696'
              },
              {
                number: 5,
                name: 'Stack Gas and Plume Aerosol Measurements from Renewable Diesel and Ultra Low Sulfur Diesel in At-Sea Operation of Research Vessel Robert Gordon Sproul',
                url: 'https://share.osf.io/dataset/4607A-27C-FB9',
                id: '4607A-27C-FB9'
              }
            ];
            this.set('data', data);
        }
        else {
            this.processData(this.get('aggregations.listWidgetData.buckets'));
        }
    },
    processData (data) {
        this.set('data', data.map((raw_datum) => {
            let processed_datum = {
                number: raw_datum.doc_count,
                name: raw_datum.key,
            };
            if (this.get("chartType") === "tagsList") {
                processed_datum["url"] = "https://share.osf.io/discover?q=" + ucsd_lucene_query + "&tags=" + raw_datum["key"];
            }
            return processed_datum;
        }));
    },
    actions: {
        transitionToFacet(item) { //Two different items here; one refers to the widget; one refers to the datum.
            let queryParams = {};
            var facet = this.get("item.facetDashParameter");
            let facetDash = this.get("item.facetDash");
            if (facetDash === "url" && item.url) {
                return;
            }
            if (facet) {
                queryParams[facet] = item.name;
                if (facetDash === "objectDetail") {
                    queryParams[facet] = item.id;
                }
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }
        },

        transitionToSHARE(item) {
            if (item.url) {
                window.location.href = item.url;
                return;
            }
            if (item.id) {
                window.location.href = "http://share.osf.io/agent/" + id;
            }
        },

        transitionToViewAll(item) {
            this.attrs.transitionToFacet(item.dataType, item);
        }
    }
});
