import Ember from 'ember';


const tag_blacklist = [
    "base",
    "dissertation",
    "ucsd dissertations",
    "text",
    "cdl",
    "cdl.ucsd",
    "dataset",
    "text/tab-separated-values",
    "natl_1981_an_37n",
    "58 geosciences",
    "natl_1981_an_26n",
    "date/time",
    "54 environmental sciences",
    "36 materials science",
    "59 basic biological sciences",
    "unknown",
    "preprint",
    "2011)",
    "extracted from the 2-minute gridded global relief data (etopo2)",
    "extracted from the world ocean atlas 2005",
    "fugacity of carbon dioxide (water) at sea surface temperature (wet air)",
    "recomputed after socat (pfeil et al",
    "xco2 (water) at sea surface temperature (dry air)",
    "100036",
    "extracted from the ncep/ncar 40-year reanalysis project",
    "extracted from globalview-co2",
    "document",
    "indianocean_1976_an_18s",
    "75 condensed matter physics",
    "37 inorganic",
    "book",
    "29442",
    "71 classical and quantum mechanics",
    "information",
    "project",
    "data",
    "application/pdf",
    "description",
    "materials",
    "size",
    "99 general and miscellaneous//mathematics",
    "and information science",
    "& refractories-- physical properties",
    "1 ancillary/documentation file",
    "1 data file",
    "62 radiology and nuclear medicine",
    "article",
    "208 data points",
    "58125",
    "70 plasma physics and fusion technology",
    "ands",
    "centre72",
    "ascii: ascii text (text/plain)",
    "72 physics of elementary particles and fields",
    "getinfo",
    "multipart/mixed",
    "s",
    "u",
    "comment",
    "42 engineering",
    "ca",
    "ct",
    "fl",
    "ga",
    "md",
    "nc",
    "nj",
    "va",
    "& thermal phenomena-- (-1987)",
    "(unk)",
    "al",
    "hi",
    "ma",
    "ns",
    "ny",
    "or",
    "ri",
    "sc",
    "073",
    "63 radiation",
    "656102 -- solid state physics-- superconductivity-- acoustic",
    "and other environ. pollutant effects on living orgs. and biol. mat.",
    "de",
    "nitrat",
    "nitrit",
    "surface waters 580500* -- oceanography-- (1980-1989)",
    "036",
    "46211",
    "58302",
    "lternet",
    "& refractories-- structure & phase studies",
    "006",
    "076",
    "093",
    "46215",
    "46231",
    "580000 -- geosciences",
    "cfc-11",
    "cfc-12",
    "datavers",
    "ms",
    "transition element compounds 360204* -- ceramics",
    "uniform resource locator/link to image",
    "vertebrates 550201* -- biochemistry-- tracer techniques"
]

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
        }
        else {
            this.processData(this.get('aggregations.listWidgetData.buckets'));
        }
    },
    processData (data) {
        this.set('data', data.map((raw_datum) => {
            return {
                number: raw_datum.doc_count,
                name: raw_datum.key
            };
        }).filter((datum) => {
            if (this.get("chartType") === "tagsList") {
                if (tag_blacklist.indexOf(datum.name) >= 0) {
                    //return false;
                }
            }
            return true;
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
        transitionToViewAll(item) {
            this.attrs.transitionToFacet(item.dataType, {});
        }
    }
});
