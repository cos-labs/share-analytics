import Ember from 'ember';
/* global Freewall */
//import 'bower_components/freewall/freewall';
//
const ucsd_query = [
    {"match_phrase": {"contributors": "UCSD"}},
    {"match_phrase": {"contributors": "UC San Diego"}},
    {"match_phrase": {"contributors": "UC San Diego Library"}},
    {"match_phrase": {"contributors": "UC San Diego Library Digital Collections"}},
    {"match_phrase": {"contributors": "Scripps Institution of Oceanography"}},
    {"match_phrase": {"contributors": "Scripps Institute of Oceanography"}},
    {"match_phrase": {"contributors": "University of California San Diego"}},
    {"match_phrase": {"contributors": "Univ of california san diego"}},
    {"match_phrase": {"contributors": "University of CA San Diego"}},
    {"match_phrase": {"publishers": "UCSD"}},
    {"match_phrase": {"publishers": "UC San Diego"}},
    {"match_phrase": {"publishers": "UC San Diego Library"}},
    {"match_phrase": {"publishers": "UC San Diego Library Digital Collections"}},
    {"match_phrase": {"publishers": "Scripps Institution of Oceanography"}},
    {"match_phrase": {"publishers": "Scripps Institute of Oceanography"}},
    {"match_phrase": {"publishers": "University of California San Diego"}},
    {"match_phrase": {"publishers": "Univ of california san diego"}},
    {"match_phrase": {"publishers": "University of CA San Diego"}},
    {"match_phrase": {"funders": "UCSD"}},
    {"match_phrase": {"funders": "UC San Diego"}},
    {"match_phrase": {"funders": "UC San Diego Library"}},
    {"match_phrase": {"funders": "UC San Diego Library Digital Collections"}},
    {"match_phrase": {"funders": "Scripps Institution of Oceanography"}},
    {"match_phrase": {"funders": "Scripps Institute of Oceanography"}},
    {"match_phrase": {"funders": "University of California San Diego"}},
    {"match_phrase": {"funders": "Univ of california san diego"}},
    {"match_phrase": {"funders": "University of CA San Diego"}},
    {"match_phrase": {"title": "UCSD"}},
    {"match_phrase": {"title": "UC San Diego"}},
    {"match_phrase": {"title": "UC San Diego Library"}},
    {"match_phrase": {"title": "UC San Diego Library Digital Collections"}},
    {"match_phrase": {"title": "Scripps Institution of Oceanography"}},
    {"match_phrase": {"title": "Scripps Institute of Oceanography"}},
    {"match_phrase": {"title": "University of California San Diego"}},
    {"match_phrase": {"title": "Univ of california san diego"}},
    {"match_phrase": {"title": "University of CA San Diego"}},
    {"match_phrase": {"hosts": "UCSD"}},
    {"match_phrase": {"hosts": "UC San Diego"}},
    {"match_phrase": {"hosts": "UC San Diego Library"}},
    {"match_phrase": {"hosts": "UC San Diego Library Digital Collections"}},
    {"match_phrase": {"hosts": "Scripps Institution of Oceanography"}},
    {"match_phrase": {"hosts": "Scripps Institute of Oceanography"}},
    {"match_phrase": {"hosts": "University of California San Diego"}},
    {"match_phrase": {"hosts": "Univ of california san diego"}},
    {"match_phrase": {"hosts": "University of CA San Diego"}},
    {"match_phrase": {"tags": "ucsd"}},
    {"match_phrase": {"tags": "cdl.ucsd"}},
    {"match_phrase": {"tags": "Scripps institution of oceanography"}},
]

const tag_blacklist = [
    "text",
    "cdl",
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

export default Ember.Route.extend({

    queryParams: {
        query: {refreshModel: true},
        tags: {refreshModel: true},
        source: {refreshModel: true},
        id: {refreshModel: true},
        contributors: {refreshModel: true},
        special_filter: {refresh_model: true}
    },
    query: 'UC',
    gte: "1996-01-01",
    lte: (new Date()).toISOString().split('T')[0], // Set the ending date of our query to today's date, by default
    tsInterval: Ember.computed('gte','lte', function() { // Initialize the "bucket size" for our timeseries aggregations
        let d1 = new Date(this.get('gte'));
        let d2 = new Date(this.get('lte'));
        if((d2 - d1) >= 31622400000) { // If our dates are more than a year apart
           return 'month'; // We want to increment our TS data by months
        }
        if((7948800000 <= (d2 - d1)) && ((d2 - d1) < 31622400000)) { // If our dates are less than a year apart but more than three months apart
            return 'week'; // We want to increment our TS data by weeks
        }
        if((d2 - d1) < 7948800000) { // If our data are less than three months apart
            return 'day'; // We want to increment our TS data by days
        }
    }),

    model: function(params, transition, queryParams) {
        let query = this.get('query');
        let gte = this.get('gte');
        let lte = this.get('lte');
        let interval = this.get('tsInterval');
        let dashboards = {
            scholar: {

                dashboardName: 'Scholar Dashboard',
                parameters: [
                    "scholar",
                    "institution"
                ],
                widgets: [
                    {
                        widgetType: "query-widget",
                        background_color: "000000",
                        name: "Search",
                        width: 12,
                    },
                    {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 4,
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 0,  "term", "contributors.raw"]
                            },
                            {
                                parameterName: "institution",
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                            },
                            {
                                parameterName: "topic",
                                parameterPath: ["query", "bool", "filter", 0, "term", "tags"]
                            },
                        ]
                    },
                    {
                        chartType: 'totalPublications',
                        widgetType: 'number-widget',
                        name: 'Total Papers',
                        width: 4,
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", "query_string", "query"]
                            },
                            {
                                parameterName: "type",
                                parameterPath: ["query", "bool", "filter", 0, "term", "types.raw"],
                                defaultValue: "publication"
                            },
                            {
                                parameterName: "institution",
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 2,  "term", "contributors.raw"]
                            },
                        ]
                    },
                    {
                        chartType: 'relatedResearchers',
                        widgetType: 'number-widget',
                        name: 'Total Collaborators',
                        width: 4,
                        post_body: {
                            query: {
                                bool: {
                                    filter: [{
                                        term: {
                                            "lists.contributors.name.raw": null
                                        }
                                    }]
                                }
                            },
                            aggregations: {
                                relatedContributors: {
                                    "cardinality": {
                                        "field": "lists.contributors.id"
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 0, "term", "lists.contributors.name.raw"]
                            }
                        ]
                    },
                    {
                        chartType: 'timeseries',
                        widgetType: 'c3-chart',
                        name: 'Date Histogram',
                        width: 12,
                        post_body: {
                            "aggregations": {
                                "sorted_by_type": {
                                    "terms": {
                                        "field": "type"
                                    },
                                    "aggregations": {
                                        "type_over_time": {
                                            "date_histogram": {
                                                "field": "date_updated",
                                                "interval": "1M",
                                                "format": "yyyy-MM-dd"
                                            }
                                        }
                                    }
                                },
                                "all_over_time": {
                                    "date_histogram": {
                                        "field": "date_updated",
                                        "interval": "1M",
                                        "format": "yyyy-MM-dd"
                                    }
                                }
                            }
                        },
                        facetDash: "shareresults",
                        postBodyParams: [
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "lt"],
                                parameterName: "tillDate",
                                defaultValue: "now/d"
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "gte"],
                                parameterName: "fromDate",
                                defaultValue: "now-10y/d"
                            },
                            {
                                parameterName: "topic",
                                parameterPath: ["query", "bool", "filter", 0, "term", "tags"]
                            },
                            {
                                parameterName: "institution",
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.raw"],
                            }
                        ]
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Contributors',
                        facetDash: "scholar",
                        width: 4,
                        dataType: 'contributors',
                        post_body: {
                            "query": {
                                "bool": {
                                    "must": {
                                        "query_string": {"query": ""}
                                    },
                                    "filter": [{
                                        "term": {
                                            "sources.raw": "eScholarship @ University of California"
                                        }
                                    }]
                                }
                            },
                            from: 0,
                            aggregations: {
                                listWidgetData : {
                                    terms : {
                                        field: 'contributors.raw',
                                        size: 10
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterName: "institution",
                                parameterPath: ["query", "bool", "must", "query_string", "query"]
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "must", "query_string", "query"]
                            },
                            {
                                parameterName: "id",
                                parameterPath: ["query", "bool", "filter", "term", "lists.contributors.name.raw"]
                            }
                        ]
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Publishers',
                        width: 4,
                        post_body : {
                            aggregations: {
                                publishers : {
                                    terms : {
                                        field: 'publishers.raw'
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", "term", "lists.contributors.name.raw"]
                            }
                        ],
                        facetDash: "scholar"
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        width: 4,
                        dataType: 'tags',
                        post_body: {
                            "aggregations": {
                                "listWidgetData" : {
                                    "terms": {
                                        "field": 'tags',
                                        "size": 10
                                    }
                                }
                            }
                        },
                        postBodyParams: [
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
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.raw"],
                            }
                        ],
                        facetDash: "scholar"
                    },
                ]
            },
            objectDetail: {
                dasboardName: 'Object Detail Dashboard',
                widgets: [
                    {
                        widgetType: "object-detail-widget",
                        background_color: "000000",
                        name: "",
                        width: 12,
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
            resultsList: {
                dasboardName: 'Institution Overview Dashboard',
                widgets: [
                    {
                        widgetType: "query-widget",
                        background_color: "000000",
                        name: "",
                        width: 12,
                        facetDash: "resultsList",
                    },
                    {
                        widgetType: "results-list",
                        name: "",
                        width: 12,
                        post_body: {},
                        facetDash: "resultsList",
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.special_filter ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "tags"],
                                parameterName: "tags"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                                parameterName: "source"
                            }
                        ]
                    }
                ]
            },
            institution: {
                dasboardName: 'Institution Overview Dashboard',
                widgets: [
                    {
                        widgetType: "about-text-widget",
                        name: "",
                        width: 12,
                        widgetSettings : {
                            institution_id: 'ucsd'
                        }
                    },
                    {
                        widgetType: "query-widget",
                        background_color: "000000",
                        name: "",
                        width: 8,
                        facetDashParameter: "query",
                        facetDash: "resultsList"
                    },
                    {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 4,
                        facetDash: "resultsList",
                        height: 115,
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.special_filter ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.raw"],
                                parameterName: "source"
                            }
                        ],
                        widgetSettings : {
                            fontSize: 2,
                            fontColor: '#F44336'
                        }
                    },
                    {
                        chartType: 'highlightedCollections',
                        widgetType: 'list-widget',
                        name: 'Highlighted Collections',
                        width: 6,
                        facetDash: "url",
                        hideViewAll: true
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Data Providers',
                        width: 6,
                        widgetSettings : {
                            viewAllRoute: 'providers'
                        },
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.special_filter ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.raw"],
                                parameterName: "source"
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range",  "date", "gte"],
                                parameterName: "min_date",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                                parameterName: "max_date",
                                defaultValue: lte
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "format"],
                                parameterName: "date_range_format",
                                defaultValue: "yyyy-MM-dd||yyyy"
                            },
                            {
                                parameterPath: ["aggregations", "publishers", "terms", "field"],
                                parameterName: "publisher_field",
                                defaultValue: "publishers.raw",
                            },
                            {
                                parameterPath: ["aggregations", "publishers", "terms", "size"],
                                parameterName: "publisher_size",
                                defaultValue: 200,
                            },
                        ],
                        facetDash: "institution"
                    },
                    {
                        widgetType: "stacked-bars",
                        name: "Types",
                        width: 12,
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.raw"],
                                parameterName: "source"
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.special_filter ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["aggregations", "stackedData", "terms", "field"],
                                parameterName: "type_field",
                                defaultValue: "types.raw",
                            },
                        ]
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'contributors-widget',
                        name: 'Top Contributors',
                        width: 12,
                        facetDash: "scholar",
                        dataType: 'contributors',
                        facetDashParameter: "scholar",
                        post_body : {},
                        postBodyParams: [
                            {
                                parameterPath: ["aggregations", "contributors", "terms", "field"],
                                parameterName: "contributors_id_field",
                                defaultValue: "lists.contributors.id.raw",
                            },
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.special_filter ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterName: "source",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.raw"],
                            }
                        ],
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'NIH Awards 2016',
                        facetDash: "funder",
                        facetDashParameter: "funder",
                        width: 6,
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.special_filter ? ucsd_query : undefined; })()
                            },
                            {
                                parameterName: "source",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.raw"],
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            }
                        ],
                    },
                    {
                        chartType: 'tagsList',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        facetDash: "url",
                        facetDashParameter: "topic",
                        width: 6,
                        dataType: 'tags',
                        post_body : {
                            from: 0,
                            aggregations: {
                                listWidgetData : {
                                    terms : {
                                        field: 'tags',
                                        size: 10
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
                                defaultValue: (()=>{ return transition.queryParams.special_filter ? ucsd_query : undefined; })()
                            },
                            {
                                parameterName: "source",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.raw"],
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterName: "tag_blacklist",
                                parameterPath: ["query", "bool", "must_not", 0, "terms", "tags"],
                                defaultValue: tag_blacklist
                            }
                        ],
                    },
                    {
                        chartType: 'recentlyAdded',
                        widgetType: 'list-widget',
                        name: 'Recently Added',
                        facetDash: "url",
                        width: 12,
                        post_body : {
                          "sort": { "date": { "order": "desc" }}
                        },
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.special_filter ? ucsd_query : undefined; })()
                            },
                            {
                                parameterName: "source",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.raw"],
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
                        ],
                    }
                ]
            },
            topic: {
                parameters: [
                    "scholar",
                    "institution",
                    "topic"
                ],
                dashboardName: 'Institution Subject Area Dashboard',
                widgets: [
                    {
                        widgetType: "query-widget",
                        background_color: "000000",
                        name: "Search",
                        width: 12,
                    },
                    {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 4,
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterName: "topic",
                                parameterPath: ["query", "bool", "filter", 0, "term", "tags"]
                            },
                            {
                                parameterName: "institution",
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                            },
                            {
                                parameterName: "contributor",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.raw"],
                            }
                        ],
                    },
                    {
                        chartType: 'totalPublications',
                        widgetType: 'number-widget',
                        name: 'Total Publications',
                        width: 4,
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterName: "type",
                                parameterPath: ["query", "bool", "filter", 0, "term", "types.raw"],
                                defaultValue: "publication"
                            },
                            {
                                parameterName: "topic",
                                parameterPath: ["query", "bool", "filter", 1, "term", "tags"]
                            },
                            {
                                parameterName: "institution",
                                parameterPath: ["query", "bool", "filter", 2, "term", "sources.raw"],
                            },
                            {
                                parameterName: "contributor",
                                parameterPath: ["query", "bool", "filter", 3, "term", "contributors.raw"],
                            },
                        ],
                    },
                    {
                        chartType: 'relatedResearchers',
                        widgetType: 'number-widget',
                        name: 'Related Researchers',
                        width: 4,
                        post_body: {
                            "aggregations": {
                                "relatedContributors" : {
                                    "cardinality": {
                                        "field": "lists.contributors.id"
                                    }
                                }
                            }
                        },
                        postBodyParams: [
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
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.raw"],
                            }
                        ]
                    },
                    {
                        chartType: 'relevanceHistogram',
                        widgetType: 'c3-chart',
                        name:'Relevance Histogram',
                        width: 12,
                        facetDash: "arttype",
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterName: "topic",
                                parameterPath: ["query", "bool", "must", 0,  "query_string", "query"],
                                defaultValue: "*"
                            },
                                                        {
                                parameterName: "institution",
                                parameterPath: ["aggregations", "filtered_score", "filters", "filters", "institution", "term", "sources.raw"]
                            },
                            {
                                parameterName: "scoring",
                                parameterPath: ["aggregations", "filtered_score", "aggregations", "score"],
                                defaultValue: {
                                    histogram: {
                                        interval: 1,
                                        script: {
                                            lang: "expression",
                                            inline: "_score * 10"
                                        }
                                    }
                                }
                            },
                            {
                                parameterName: "scoring",
                                parameterPath: ["aggregations", "all_score"],
                                defaultValue: {
                                    histogram: {
                                        interval: 1,
                                        script: {
                                            lang: "expression",
                                            inline: "_score * 10"
                                        }
                                    }
                                }
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.raw"],
                            }
                        ]
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Contributors',
                        width: 4,
                        dataType: 'contributors',
                        post_body : {
                            "aggregations": {
                                "listWidgetData": {
                                    "terms": {
                                        "field": 'contributors.raw',
                                        "size": 10
                                    }
                                }
                            }
                        },
                        postBodyParams: [
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
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.raw"],
                            }
                        ],
                        facetDash: "scholar"
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Events by Source',
                        width: 4,
                        post_body: {
                            query: {
                                bool: { must: [{
                                        query_string: {query: query}
                                    },{
                                        range: { date: {
                                                   gte: gte,
                                                   lte: lte,
                                                   format: "yyyy-MM-dd||yyyy"
                                                   }
                                        }
                                    }
                                ]}
                            },
                            from: 0,
                            aggregations: {
                                sources: {
                                    terms: {
                                         field: 'sources.raw',
                                         size: 200
                                    }
                                },
                            }
                        },
                        postBodyParams: [
                        ],
                        facetDash: "institution",
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        width: 4,
                        dataType: 'tags',
                        post_body: {
                            "aggregations": {
                                "listWidgetData" : {
                                    "terms": {
                                        "field": 'tags',
                                        "size": 10
                                    }
                                }
                            }
                        },
                        postBodyParams: [
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
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.raw"],
                            }
                        ],
                        facetDash: "scholar"
                    },
                    {
                        chartType: 'timeseries',
                        widgetType: 'c3-chart',
                        name: 'Date Histogram',
                        width: 12,
                        post_body: {
                            "aggregations": {
                                "sorted_by_type": {
                                    "terms": {
                                        "field": "type"
                                    },
                                    "aggregations": {
                                        "type_over_time": {
                                            "date_histogram": {
                                                "field": "date_updated",
                                                "interval": "1M",
                                                "format": "yyyy-MM-dd"
                                            }
                                        }
                                    }
                                },
                                "all_over_time": {
                                    "date_histogram": {
                                        "field": "date_updated",
                                        "interval": "1M",
                                        "format": "yyyy-MM-dd"
                                    }
                                }
                            }
                        },
                        facetDash: "shareresults",
                        postBodyParams: [
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "lt"],
                                parameterName: "tillDate",
                                defaultValue: "now/d"
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "gte"],
                                parameterName: "fromDate",
                                defaultValue: "now-10y/d"
                            },
                            {
                                parameterName: "topic",
                                parameterPath: ["query", "bool", "filter", 0, "term", "tags"]
                            },
                            {
                                parameterName: "institution",
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.raw"],
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
                        hideViewAll: true,
                        post_body : {
                            "aggregations": {
                                "listWidgetData": {
                                    "terms": {
                                        "field": 'contributors.raw',
                                        "size": 100
                                    }
                                }
                            }
                        },
                        postBodyParams: [
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
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.raw"],
                            }
                        ],
                        facetDash: "scholar"
                    }
                ]
            },
            tags: {
                dashboardName: 'Top Tags',
                wrapperClass: 'index-page',
                widgets: [
                    {
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        width: 12,
                        hideViewAll: true,
                        post_body: {
                            "aggregations": {
                                "listWidgetData" : {
                                    "terms": {
                                        "field": 'tags',
                                        "size": 100
                                    }
                                }
                            }
                        },
                        postBodyParams: [
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
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources.raw"],
                            },
                            {
                                parameterName: "scholar",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.raw"],
                            }
                        ],
                        facetDash: "scholar"
                    },
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
                        post_body: {
                            query: {
                                bool: { must: [{
                                        query_string: {query: query}
                                    },{
                                        range: { date: {
                                                   gte: gte,
                                                   lte: lte,
                                                   format: "yyyy-MM-dd||yyyy"
                                                   }
                                        }
                                    }
                                ]}
                            },
                            from: 0,
                            aggregations: {
                                listWidgetData: {
                                    terms: {
                                         field: 'publishers.raw',
                                         size: 100
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                        ],
                        facetDash: "institution"
                  }
                ]
            },
            awards: {
                "dashboardName": "Awards Dashboard",
                "widgets": []
            }

        };

        let dashboard = dashboards[params.dashboard];
        let widgets = dashboard.widgets;
        let array_keys = new Set(["filter", "must", "must_not"]);
        dashboard.widgets = widgets.map((widget) => {

            if (widget.postBodyParams) {
                widget.postBodyParams.forEach((param) => {

                    let parameter_value;
                    if (param.parameterName in transition.queryParams) {
                        parameter_value = transition.queryParams[param.parameterName];
                    } else if ("defaultValue" in param) {
                        parameter_value = param.defaultValue;
                    } else {
                        return; // The parameter must have a value.
                    }

                    let path_parts = param.parameterPath.slice(0, -1)
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
                    }, widget.post_body) // Uses the actual object; changes made on nested change the original.

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

        controller.set('parameters', model.parameters)

        controller.set('institutionName', "eScholarship @ University of California");
        // controller.set('dashboardName', model.dashboard.dashboardName);
        controller.set('wrapperClass', model.dashboard.wrapperClass);
        controller.set('widgets', model.dashboard.widgets);
    }

});
