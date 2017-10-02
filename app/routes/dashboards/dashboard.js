import Ember from 'ember';
import dateInterval from '../../utils/date-interval';

/* Gets all (as close to all) share records that are published by UCSD. Used with query.bool.should*/
const ucsd_query = [
    "UCSD",
    "UC San Diego",
    "UC San Diego Library Digital Collections",
    "Scripps Institution of Oceanography",
    "Scripps Institute of Oceanography",
    "University of California San Diego",
    "Univ of california san diego",
    "University of CA San Diego",
    "university of california at san diego",
    "university california san diego",
    "univ of california at san diego",
    "univ california san diego",
    "univ calif san diego",
    "california univ san diego",
    "san diego supercomputer center",
    "qualcomm institute",
].map((term) => {
    return {
        "multi_match": {
            "fields": [
                "contributors",
                "publishers",
                "affiliations",
                "funders",
                "title",
                "hosts"
            ],
            "type": "phrase",
            "query": term
        }
    };
}).concat([
    {
        "match_phrase": {
            "tags": "cdl.ucsd"
        }
    },
    {
        "match_phrase": {
            "tags": "Scripps institution of oceanography"
        }
    },
    {
        "term": {
            "source": "UC San Diego Library"
    }
  }
]);

/* Tags to be ommited from the search results. Goes into tags aggregation query under 'exclude' */
const tag_blacklist = [
  "address",
  "process",
  "improved",
  "base",
  "goals",
  "testing",
  "development",
  "research",
  "event",
  "role",
  "novel",
  "work",
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
];

/* ucsd ID's to be  ommited from the contributor results. Goes into ucsd aggregation query under 'exclude' */
const ucsd_blacklist = [
  "64201-BDE-4D4", //"University of California, San Diego"
  "641C6-0E9-04C",//"University of California [San Diego] (UC San Diego)",
  "640E7-1AA-07C",//"University of California San Diego",
  "6412C-4A8-62C", //"University of California: San Diego",
  //"California Univ., San Diego",
  //"University of California at San Diego",
  "640B7-236-74F",//"Univ. of California",
  "64020-818-87A"//"University of California"
];

export default Ember.Route.extend({

    queryParams: {    //Ember queryParams, if any of the listed parameters change the page will refresh.
      query: {refreshModel: true},
      tags: {refreshModel: true},
      sources: {refreshModel: true},
      id: {refreshModel: true},
      scholar: {refreshModel: true},
      all: {refreshModel: true},
      contributors: {refreshModel: true},
      publishers: {refreshModel: true},
      type: {refreshModel: true},
      funders: {refreshModel: true},
      start: {refreshModel:true},
      end: {refreshModel:true},
      page: {refreshModel: true}
    },
    gte: "1996-01-01",        // Set default begin date
    lte: (new Date()).toISOString().split('T')[0], // Set default end date
    tsInterval: Ember.computed('gte','lte', function(){
      let d1 = new Date(this.get('gte'));
      let d2 = new Date(this.get('lte'));
      return dateInterval(d1, d2);
    }),

    /* Resets query parameters to undefined when leaving dashboard route*/
    resetController: function(controller, isExiting, transition) {
        this._super.apply(this, arguments);

        if (isExiting) {
            controller.set("all", undefined);
            controller.set("sources", undefined);
            controller.set("id", undefined);
            controller.set("contributors", undefined);
            controller.set("publishers", undefined);
            controller.set("tags", undefined);
            controller.set("query", undefined);
            controller.set("type", undefined);
            controller.set("funders", undefined);
            controller.set("start", undefined);
            controller.set("end", undefined);
            controller.set("page", undefined);
        }
    },

    model: function(params, transition, queryParams) {
        let gte = this.get('gte');
        let lte = this.get('lte');
        let dashboards = {
          /* Each top level object is a dashboard view (i.e. a page with widgets) See first object for comments on properties */
            objectDetail: {
                dashboardName: 'Object Detail Dashboard',
                /* Each widget goes through widget-adapter that uses the settings and parameters */
                widgets: [
                    {
                        widgetType: "object-detail-widget",       // Corresponds to the Ember component name
                        background_color: "000000",
                        name: "",       // Showing a name displays widget title, empty name omits title
                        width: 12,       // Widgets are floated left and width is defined in grid columns 0-12
                        post_body: {},       // Raw elastic query to be sent with the request for SHARE
                        postBodyParams: [       // List of parameters to add to post_body. Params overrides post_body if there are same parameter paths
                            {
                                parameterName: "id",       // the name of the url parameter, the value of this parameter will be used as value of the parameterpath below
                                /*  parameterPath: Path of the parameter object. Converts to:
                                *   "query": {
                                *       "bool" : {
                                *           "must" : [
                                *               {   // 0 in this example is for the index of the preceding item
                                *                   "term": {
                                *                       "_id": // value given for the "id" parameter
                                *                   }
                                *               }
                                *           ]
                                *       }
                                *    }
                                *
                                * */
                                parameterPath: ["query", "bool", "must", 0, "term", "_id"],
                            }
                        ]
                    },
                ]
            },
            agentDetail: {
                dashboardName: 'Agent Detail Dashboard',
                widgets: [
                    {
                        widgetType: "agent-detail-widget",
                        background_color: "000000",
                        name: "",
                        width: 12,
                        endpoint: "agents",
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterName: "id",
                                parameterPath: ["query", "bool", "must", 0, "term", "_id"],
                            }
                        ]
                    },
                ]
            },
            search: {
                dasboardName: 'Institution Overview Dashboard',
                widgets: [
                    {
                        widgetType: "query-widget",
                        background_color: "rgba(0,0,0,0.3)",
                        name: "",
                        width: 12,
                        facetDash: "search",
                    },
                    {
                        widgetType: "filter-plaques",
                        name: "",
                        width: 12,
                        facetDash: "search",
                    },
                    {
                        widgetType: "results-list",
                        name: "",
                        width: 9,
                        post_body: {},
                        facetDash: "search",
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.exact"],
                                parameterName: "sources"
                            },
                            {
                                parameterName: "tags",
                                parameterPath: ["query", "bool", "filter", 2, "term", "tags.exact"]
                            },
                            {
                                parameterName: "publishers",
                                parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                            },
                            {
                                parameterName: "contributors",
                                parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                            },
                            {
                                parameterName: "type",
                                parameterPath: ["query", "bool", "filter", 5, "term", "type.exact"]
                            },
                            {
                                parameterName: "funders",
                                parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range", "date", "format"],
                                parameterName: "date_range_format",
                                defaultValue: "yyyy-MM-dd||yyyy"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range",  "date", "gte"],
                                parameterName: "start",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                                parameterName: "end",
                                defaultValue: lte
                            },
                            {
                                parametername: "page",
                                parameterpath: ["from"],
                                defaultvalue: 0
                            },
                        ],
                        widgetSettings : {
                            minHeight: 115
                        }
                    },
                    {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 3,
                        facetDash: null,
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.exact"],
                                parameterName: "sources"
                            },
                            {
                                parameterName: "tags",
                                parameterPath: ["query", "bool", "filter", 2, "term", "tags.exact"]
                            },
                            {
                                parameterName: "publishers",
                                parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                            },
                            {
                                parameterName: "contributors",
                                parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                            },
                            {
                                parameterName: "type",
                                parameterPath: ["query", "bool", "filter", 5, "term", "type.exact"]
                            },
                            {
                                parameterName: "funders",
                                parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range", "date", "format"],
                                parameterName: "date_range_format",
                                defaultValue: "yyyy-MM-dd||yyyy"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range",  "date", "gte"],
                                parameterName: "start",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                                parameterName: "end",
                                defaultValue: lte
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            }
                        ],
                        widgetSettings : {
                            fontSize: 2,
                            fontColor: '#F44336',
                            minHeight: 115,
                            isLink: false
                        }
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Data Providers',
                        width: 3,
                        mappingType: "OBJECT_TO_ARRAY",
                        facetDash: "search",
                        facetDashParameter: "publishers",
                        hideViewAll: !transition.queryParams.all,
                        widgetSettings : {
                          viewAllRoute: 'providers',
                          showFilter: true,
                          mode: 'search',
                          aggregationTitle: 'publishers'
                        },
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.exact"],
                                parameterName: "sources"
                            },
                            {
                                parameterName: "tags",
                                parameterPath: ["query", "bool", "filter", 2, "term", "tags.exact"]
                            },
                            {
                                parameterName: "publishers",
                                parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                            },
                            {
                                parameterName: "contributors",
                                parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                            },
                            {
                                parameterName: "type",
                                parameterPath: ["query", "bool", "filter", 5, "term", "type.exact"]
                            },
                            {
                                parameterName: "funders",
                                parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range",  "date", "gte"],
                                parameterName: "start",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                                parameterName: "end",
                                defaultValue: lte
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range", "date", "format"],
                                parameterName: "date_range_format",
                                defaultValue: "yyyy-MM-dd||yyyy"
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            },
                            {
                                parameterPath: ["aggregations", "publishers", "terms", "field"],
                                parameterName: "publisher_field",
                                defaultValue: "lists.publishers.id.exact",
                            },
                            {
                                parameterPath: ["aggregations", "publishers", "terms", "size"],
                                parameterName: "publisher_size",
                                defaultValue: 200,
                            }
                        ],
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'dropdown-widget',
                        name: 'Contributors',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "contributors",
                        post_body: {
                            "aggregations": {
                                "dropdownList" : {
                                    "terms": {
                                        "field": "",
                                        "size": 100
                                    },
                                    "aggs" : {
                                        "name": {
                                            "terms": {
                                                "field": ""
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "filter", 0, "bool", "should", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "bool", "should"],
                                defaultValue: ucsd_query
                            },
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources"]
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterName: "tags",
                                parameterPath: ["query", "bool", "filter", 2, "term", "tags"]
                            },
                            {
                                parameterName: "publishers",
                                parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                            },
                            {
                                parameterName: "contributors",
                                parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                            },
                            {
                                parameterName: "type",
                                parameterPath: ["query", "bool", "filter", 5, "term", "type"]
                            },
                            {
                                parameterName: "funders",
                                parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range",  "date", "gte"],
                                parameterName: "start",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                                parameterName: "end",
                                defaultValue: lte
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            }
                        ],
                        widgetSettings: {
                            mode: 'search'
                        }
                    },
                    {
                        // Type dropdown
                        widgetType: 'dropdown-widget',
                        name: 'Types',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "type",
                        post_body : {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"],
                                parameterName: "sources"
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["aggregations", "dropdownList", "terms", "field"],
                                parameterName: "type_field",
                                defaultValue: "type.exact"
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            }
                        ],
                        widgetSettings: {
                            mode: 'dropdown'
                        }
                    },
                    {
                        // Tag select
                        widgetType: 'dropdown-widget',
                        name: 'Tags',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "tags",
                        post_body: {
                            "aggregations": {
                                "dropdownList" : {
                                    "terms": {
                                        "field": 'tags.exact',
                                        "size": 100,
                                        exclude: tag_blacklist,
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "filter", 0, "bool", "should", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "bool", "should"],
                                defaultValue: ucsd_query
                            },
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources"]
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterName: "tags",
                                parameterPath: ["query", "bool", "filter", 2, "term", "tags"]
                            },
                            {
                                parameterName: "publishers",
                                parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                            },
                            {
                                parameterName: "contributors",
                                parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                            },
                            {
                                parameterName: "type",
                                parameterPath: ["query", "bool", "filter", 5, "term", "type"]
                            },
                            {
                                parameterName: "funders",
                                parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range",  "date", "gte"],
                                parameterName: "start",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                                parameterName: "end",
                                defaultValue: lte
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            }

                        ],
                        widgetSettings: {
                            mode: 'search'
                        }
                    },
                    {
                        // Funder select
                        widgetType: 'dropdown-widget',
                        name: 'Funders',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "funders",
                        post_body: {
                            "aggregations": {
                                "dropdownList" : {
                                    "terms": {
                                        "field": "lists.funders.id.exact",
                                        "size": 100
                                    },
                                    "aggs" : {
                                        "name": {
                                            "terms": {
                                                "field": "lists.funders.name.exact"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "filter", 1, "bool", "should", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 1, "bool", "should"],
                                defaultValue: ucsd_query
                            },
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterName: "tags",
                                parameterPath: ["query", "bool", "filter", 1, "term", "tags"]
                            },
                            {
                                parameterName: "publishers",
                                parameterPath: ["query", "bool", "filter", 2, "term", "lists.publishers.id.exact"]
                            },
                            {
                                parameterName: "contributors",
                                parameterPath: ["query", "bool", "filter", 3, "term", "lists.contributors.id.exact"]
                            },
                            {
                                parameterName: "type",
                                parameterPath: ["query", "bool", "filter", 4, "term", "type"]
                            },
                            {
                                parameterName: "funders",
                                parameterPath: ["query", "bool", "filter", 5, "term", "lists.funders.id.exact"]
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range",  "date", "gte"],
                                parameterName: "start",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                                parameterName: "end",
                                defaultValue: lte
                            }
                        ],
                        widgetSettings: {
                            mode: 'search'
                        }
                    },
                    {
                        // Daterange select
                        widgetType: 'search-facet-daterange',
                        name: 'Dates',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "",
                        post_body: {}
                    }
                ]
            },
            aboutDash: {
                dashboardName: "About",
                widgets: [
                    {
                        widgetType: "text-widget",
                        name: "",
                        width: 12,
                        facetDash: "aboutDash",
                        content: "<h4><b>What is TritonSHARE?</b></h4>" +
                        "<p>TritonSHARE is a tool that harvests and presents information about UC San Diego research outputs, harvested from sources around the world. Research outputs refers to a wide variety of scholarly work, including journal articles and preprints, datasets, ongoing projects, awards and research tools that are publicly findable.</p>" +
                        "<p>TritonSHARE is a tool designed and built by the UC San Diego Library, in conjunction with several partners. It harvests metadata about research - that is, the tool collects information about contemporary research outputs from diverse sources and presents it in a single, unified interface. This allows for the discovery of many pieces of research in one place, rather than needing to search in multiple locations. TritonSHARE displays this information in a simple interface, exposing common elements.</p>" +
                        "<h4><b>How does TritonSHARE work?</b></h4>" +
                        "<p>TritonSHARE is built on top of an international research tool: the SHARE database. SHARE is an <a href=\"http://arl.org\">Association of Research Libraries (ARL)</a> and <a href=\"http://cos.io\">Center for Open Science</a> initiative whose mission is to maximize research impact by making research output widely accessible, discoverable, and reusable. SHARE is a free, open data set about research and scholarly activities across the scholarly life cycle. The SHARE database stores information on over 30 million research items, harvested from <a href=\"https://share.osf.io/sources\">more than 150 international sources</a>. These are presented in a searchable interface on the SHARE site: <a href=\"https://share.osf.io\">https://share.osf.io</a>.</p>" +
                        "<p>TritonSHARE is a <i>custom view</i> into the SHARE database, searching only for UC San Diego-related resources. This is done behind the scenes via an actively-maintained search string that looks for all name variants for our campus, schools and research units. Based on this query, users can search whatever keywords, names, identifiers, resource types, etc. they want to find.</p>" +
                        "<p>Once relevant items are found, TritonSHARE displays them in a consistent format, to allow for ease of comparison. If searchers want to find out more about certain items, or download data, clicking on the relevant link in the record will hand them off directly to the data resource.</p>" +
                        "<h4><b>How do I get my research listed in TritonSHARE?</b></h4>" +
                        "<p>In addition to harvesting information from sources, the Library can manually enter information you provide about your research data into the SHARE database. The Library also hosts a data repository, the <a href=\"https://library.ucsd.edu/dc\">UC San Diego Library Digital Collections</a>, one of the many sources harvested by SHARE. Contact the team at <a href=\"mailto:tritonshare@ucsd.edu\">tritonshare@ucsd.edu</a> if you would like to enter information about your published data into SHARE or deposit your data into the Digital Collections.</p>" +
                        "<h4><b>I’m not finding items that I expect to be in TritonSHARE</b></h4>" +
                        "<p>TritonSHARE undergoes <i>constant updating, revision and improvement</i>. Because it presents data that are hosted in thousands of locations around the world, consistency is a challenge. Sometimes metadata is present in the tool, but phrased in such a way to make discovery difficult. Sometimes data hasn’t been correctly attributed as associated with UC San Diego, or contains errors in the attribution. And sometimes the tool simply doesn’t know about research output that has been posted online but not indexed in one of the international sources from which SHARE currently harvests information.</p>" +
                        "<h4><b>I see a problem or error in TritonSHARE</b></h4>" +
                        "<p>The TritonSHARE team works daily to improve content in the tool, and greatly appreciates your feedback, comments, and requests for updates. You can contact the team directly at <a href=\"mailto:tritonshare@ucsd.edu\">tritonshare@ucsd.edu</a>, and we’ll look into your query and respond as soon as possible.</p>" +
                        "<h4><b>Attributions</b></h4>" +
                        "<p>SHARE is funded by the <a href=\"http://imls.gov\">Institute of Museum and Library Services</a> and the <a href=\"http://sloan.org\">Alfred P. Sloan Foundation</a>. The SHARE initiative was founded in 2013 by <a href=\"http://www.arl.org\">ARL</a>, the <a href=\"http://www.aau.edu\">Association of American Universities (AAU)</a>, and the <a href=\"http://aplu.org\">Association of Public and Land-grant Universities (APLU).</a></p>"
                    }
                ]
            },
            "ucsd": {
                dasboardName: 'Institution Overview Dashboard',
                widgets: [
                    {
                        widgetType: "text-widget",
                        name: "",
                        width: 12,
                        facetDash: "aboutDash",
                        content: "TritonSHARE presents information about UC San Diego research outputs, harvested from sources around the world.",
                        showButton: true,
                    },
                    {
                        widgetType: "query-widget",
                        background_color: "000000",
                        name: "",
                        width: 8,
                        facetDashParameter: "query",
                        facetDash: "search"
                    },
                    {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 4,
                        facetDash: "search",
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                parameterName: "sources"
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            }
                        ],
                        widgetSettings : {
                            fontSize: 2,
                            fontColor: '#F44336',
                            minHeight: 115
                        }
                    },
                    {
                        chartType: 'highlightedCollections',
                        widgetType: 'list-widget',
                        name: 'Highlighted Collections',
                        width: 6,
                        facetDash: "objectDetail",
                        facetDashParameter: "id",
                        hideViewAll: true
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Data Providers',
                        width: 6,
                        mappingType: "OBJECT_TO_ARRAY",
                        facetDash: "search",
                        facetDashParameter: "publishers",
                        hideViewAll: !transition.queryParams.all,
                        widgetSettings : {
                            viewAllRoute: 'providers',
                            showFilter: true,
                            mode: 'search',
                            aggregationTitle: 'publishers'
                        },
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                parameterName: "sources"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 2, "range",  "date", "gte"],
                                parameterName: "start",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 2, "range", "date", "lte"],
                                parameterName: "end",
                                defaultValue: lte
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 2, "range", "date", "format"],
                                parameterName: "date_range_format",
                                defaultValue: "yyyy-MM-dd||yyyy"
                            },
                            {
                                parameterPath: ["aggregations", "publishers", "terms", "field"],
                                parameterName: "publisher_field",
                                defaultValue: "lists.publishers.id.exact"
                            },
                            {
                                parameterPath: ["aggregations", "publishers", "terms", "size"],
                                parameterName: "publisher_size",
                                defaultValue: 200
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            }
                        ]
                    },
                    {
                        widgetType: "stacked-bars",
                        name: "Types",
                        width: 12,
                        facetDash: "search",
                        facetDashParameter: "type",
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                parameterName: "sources"
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["aggregations", "stackedData", "terms", "field"],
                                parameterName: "type_field",
                                defaultValue: "type.exact"
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            }
                        ]
                    },
                    {
                        chartType: 'recentlyAdded',
                        widgetType: 'list-widget',
                        name: 'Recently Added',
                        facetDash: "objectDetail",
                        facetDashParameter: "id",
                        hideViewAll: true,
                        width: 6,
                        post_body : {
                          "sort": { "date": { "order": "desc" }}
                        },
                        postBodyParams: [
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                            },
                            {
                                parameterName: "recently_added_sort",
                                parameterPath: ["sort", "date", "order"],
                                defaultValue: "desc"
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            }
                        ]
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Contributors',
                        width: 6,
                        facetDash: "search",
                        facetDashParameter: "contributors",
                        dataType: 'contributors',
                        post_body : {
                            "aggregations": {
                                "listWidgetData": {
                                    "terms": {
                                        "exclude": ucsd_blacklist,
                                        "field": 'lists.contributors.id.exact',
                                        "size": 9
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"]
                            }
                        ]
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Funders',
                        facetDash: "search",
                        facetDashParameter: "funders",
                        width: 6,
                        mappingType: "OBJECT_AWARDS_NESTED_VALUE_TO_ARRAY",
                        post_body: {
                            "aggregations": {
                                "funders": {
                                    "terms": {
                                        "field": "lists.funders.id.exact"
                                    },
                                    "aggs": {
                                        "awards": {
                                            "sum": {
                                                "script": {
                                                    "lang": "expression",
                                                    "inline": "doc['lists.funders.awards.amount'].sum()"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: ucsd_query
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"],
                                parameterName: "sources"
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range",  "date", "gte"],
                                parameterName: "start",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                                parameterName: "end",
                                defaultValue: lte
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "format"],
                                parameterName: "date_range_format",
                                defaultValue: "yyyy-MM-dd||yyyy"
                            }
                        ],
                        widgetSettings: {
                          helpText: 'Click on a section to view associated records'
                        }
                    },
                    {
                        chartType: 'tagsList',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        facetDash: "search",
                        facetDashParameter: "tags",
                        width: 6,
                        dataType: 'tags',
                        post_body : {
                            from: 0,
                            aggregations: {
                                listWidgetData : {
                                    terms : {
                                        field: 'tags.exact',
                                        exclude: tag_blacklist,
                                        size: 10
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"]
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            }
                        ]
                    }
                ]
            },
            contributors: {
                dashboardName: 'Top Contributors',
                wrapperClass: 'index-page',
                widgets: [
                    {
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Contributors',
                        width: 12,
                        facetDash: "search",
                        facetDashParameter: "contributors",
                        dataType: 'contributors',
                        hideViewAll: true,
                        post_body : {
                            "aggregations": {
                                "listWidgetData": {
                                    "terms": {
                                        "exclude": ucsd_blacklist,
                                        "field": 'lists.contributors.id.exact',
                                        "size": 100
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            }
                        ]
                    }
                ]
            },
            tags: {
                dashboardName: 'Top Tags',
                wrapperClass: 'index-page',
                widgets: [
                    {
                        chartType: 'tagsList',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        width: 12,
                        indexVersion: 3,
                        hideViewAll: true,
                        post_body: {
                            "aggregations": {
                                "listWidgetData" : {
                                    "terms": {
                                        "field": 'tags.exact',
                                        "size": 100,
                                        exclude: tag_blacklist,
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterName: "topic",
                                parameterPath: ["query", "bool", "filter", 0, "term", "tags"]
                            },
                            {
                                parameterName: "institution",
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources"],
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.exact"],
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            }
                        ],
                        facetDash: "search",
                        facetDashParameter: "tags"
                    }
                ]
            },
            providers: {
                dashboardName: 'Data providers',
                wrapperClass: 'index-page',
                widgets: [
                    {
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Data providers',
                        width: 12,
                        facetDash: "search",
                        facetDashParameter: "publishers",
                        hideViewAll: true,
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "filter", 1, "bool", "should", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 1, "bool", "should"],
                                defaultValue: ucsd_query
                            },
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.raw"],
                                parameterName: "sources"
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range",  "date", "gte"],
                                parameterName: "start",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                                parameterName: "end",
                                defaultValue: lte
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "format"],
                                parameterName: "date_range_format",
                                defaultValue: "yyyy-MM-dd||yyyy"
                            },
                            {
                                parameterPath: ["aggregations", "listWidgetData", "terms", "field"],
                                parameterName: "publisher_field",
                                defaultValue: "lists.publishers.id.exact",
                            },
                            {
                                parameterPath: ["aggregations", "listWidgetData", "terms", "size"],
                                parameterName: "publisher_size",
                                defaultValue: 200,
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            },
                        ]
                    }
                ]
            },
            awards: {
                "dashboardName": "Awards Dashboard",
                "widgets": [
                      {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Awards',
                        facetDash: "agentDetail",
                        facetDashParameter: "id",
                        width: 6,
                        mappingType: "OBJECT_AWARDS_NESTED_VALUE_TO_ARRAY",
                        post_body: {
                            "aggregations": {
                                "funders": {
                                    "terms": {
                                        "field": "lists.funders.id.exact"
                                    },
                                    "aggs": {
                                        "awards": {
                                            "sum": {
                                                "script": {
                                                    "lang": "expression",
                                                    "inline": "doc['lists.funders.awards.amount'].sum()"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "filter", 1, "bool", "should", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 1, "bool", "should"],
                                defaultValue: ucsd_query
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                parameterName: "sources"
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range",  "date", "gte"],
                                parameterName: "start",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                                parameterName: "end",
                                defaultValue: lte
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "format"],
                                parameterName: "date_range_format",
                                defaultValue: "yyyy-MM-dd||yyyy"
                            },
                            {
                                parameterPath: ["size"],
                                defaultValue: 0
                            }
                        ],
                        widgetSettings: {
                          helpText: 'Click on a section to view associated records'
                        }
                    }
                ]
            },
        };

        let dashboard = dashboards[params.dashboard];
        let widgets = dashboard.widgets;
        let array_keys = new Set(["filter", "must", "must_not"]);
        dashboard.widgets = widgets.map((widget) => {
            if (widget.postBodyParams) {
                widget.postBodyParams.forEach((param) => {

                    let parameter_value;
                    if (param.parameterName in transition.queryParams) {
                        if (param.parameterName === "page") {
                            parameter_value = (Number(transition.queryParams[param.parameterName])*10)-10;
                        } else {
                            parameter_value = transition.queryParams[param.parameterName];
                        }
                    } else if ("defaultValue" in param) {
                        parameter_value = param.defaultValue;
                    } else {
                        return;
                    }
                    let path_parts = param.parameterPath.slice(0, -1);
                    let parameter_key = param.parameterPath[param.parameterPath.length-1];
                    let nested_object = path_parts.reduce((nested, pathPart) => {
                        if (!nested[pathPart]) {
                            if (array_keys.has(pathPart)) {
                                nested[pathPart] = [];
                            } else {
                                nested[pathPart] = {};
                            }
                        }
                        return nested[pathPart];
                    }, widget.post_body); // Uses the actual object; changes made on nested change the original.

                    nested_object[parameter_key] = parameter_value;

                });
            }

            return widget;

        });

        return {
            dashboard: dashboard,
            parameters: transition.queryParams
        };

    },

    setupController: function(controller, model) {

        this._super(controller, model);

        if (controller.get('query') === undefined) { // This will change depending on what default will be in the storage backend.
            controller.set('query', model.dashboard.query);
        }

        controller.set('parameters', model.parameters);

        controller.set('institutionName', "eScholarship @ University of California");
        controller.set('wrapperClass', model.dashboard.wrapperClass);
        controller.set('widgets', model.dashboard.widgets);
    }

});
