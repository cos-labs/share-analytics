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
    {"match_phrase": {"affiliations": "UCSD"}},
    {"match_phrase": {"affiliations": "UC San Diego"}},
    {"match_phrase": {"affiliations": "UC San Diego Library"}},
    {"match_phrase": {"affiliations": "UC San Diego Library Digital Collections"}},
    {"match_phrase": {"affiliations": "Scripps Institution of Oceanography"}},
    {"match_phrase": {"affiliations": "Scripps Institute of Oceanography"}},
    {"match_phrase": {"affiliations": "University of California San Diego"}},
    {"match_phrase": {"affiliations": "Univ of california san diego"}},
    {"match_phrase": {"affiliations": "University of CA San Diego"}},
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
    {"term": {"source": "UC San Diego Library"}}
];

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
]

export default Ember.Route.extend({

    queryParams: {
        query: {refreshModel: true},
        tags: {refreshModel: true},
        sources: {refreshModel: true},
        id: {refreshModel: true},
        scholar: {refreshModel: true},
        all: {refreshModel: true},
        contributors: {refreshModel: true},
        special_filter: {refreshModel: true},
        publishers: {refreshModel: true},
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
            agentDetail: {
                dasboardName: 'Agent Detail Dashboard',
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
            resultsList: {
                dasboardName: 'Institution Overview Dashboard',
                widgets: [
                    {
                        widgetType: "query-widget",
                        background_color: "rgba(0,0,0,0.3)",
                        name: "",
                        width: 12,
                        facetDash: "resultsList",
                    },
                    {
                        widgetType: "filter-plaques",
                        background_color: "rgba(0,0,0,0)",
                        name: "",
                        width: 12,
                        facetDash: "resultsList",
                    },
                    {
                        widgetType: "results-list",
                        name: "",
                        width: 9,
                        post_body: {},
                        indexVersion: 3,
                        facetDash: "resultsList",
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources"],
                                parameterName: "sources"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "tags.exact"],
                                parameterName: "tags"
                            },
                            {
                                parameterName: "publishers",
                                parameterPath: ["query", "bool", "filter", 2, "term", "lists.publishers.id.exact"],
                            },
                            {
                                parameterName: "contributors",
                                parameterPath: ["query", "bool", "filter", 3, "term", "lists.contributors.id.exact"],
                            }
                        ]
                    },
                    {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 3,
                        indexVersion: 3,
                        facetDash: "resultsList",
                        height: 115,
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources"],
                                parameterName: "sources"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "tags.exact"],
                                parameterName: "tags"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 2, "term", "lists.publishers.id.exact"],
                                parameterName: "publishers",
                            },
                            {
                                parameterName: "contributors",
                                parameterPath: ["query", "bool", "filter", 3, "term", "lists.contributors.id.exact"],
                            }
                        ],
                        widgetSettings : {
                            fontSize: 2,
                            fontColor: '#F44336'
                        }
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Data Providers',
                        indexVersion: 3,
                        width: 3,
                        mappingType: "OBJECT_TO_ARRAY",
                        facetDash: "resultsList",
                        facetDashParameter: "publishers",
                        hideViewAll: !transition.queryParams.all,
                        widgetSettings : {
                            viewAllRoute: 'providers'
                        },
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
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
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                parameterName: "sources"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 1, "term", "tags.exact"],
                                parameterName: "tags"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 2, "term", "lists.publishers.id.exact"],
                                parameterName: "publishers",
                            },
                            {
                                parameterName: "contributors",
                                parameterPath: ["query", "bool", "filter", 3, "term", "lists.contributors.id.exact"],
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
                            },
                        ],
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'contributors-widget',
                        name: 'Top Contributors',
                        width: 3,
                        hideSHAREButton: true,
                        indexVersion: 3,
                        facetDash: "resultsList",
                        dataType: 'contributors',
                        facetDashParameter: "contributors",
                        post_body : {},
                        postBodyParams: [
                            {
                                parameterPath: ["aggregations", "contributors", "terms", "field"],
                                parameterName: "contributors_id_field",
                                defaultValue: "lists.contributors.id.exact",
                            },
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 1, "term", "tags"],
                                parameterName: "tags"
                            },
                            {
                                parameterName: "publishers",
                                parameterPath: ["query", "bool", "filter", 2, "term", "lists.publishers.id.exact"],
                            },
                            {
                                parameterName: "contributors",
                                parameterPath: ["query", "bool", "filter", 3, "term", "lists.contributors.id.exact"],
                            }
                        ],
                    },
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
                        widgetSettings : {
                            institution_id: 'ucsd'
                        },
                        content: "<h4><b>What is this?</b></h4>" +
                        "<p>The Research Data Catalog pulls information about data created by members of the UC San Diego research community from the SHARE database.</p>" +
                        "<h4><b>Where does the information come from?</b></h4>" +
                        "<p>SHARE is an <a href='http://www.arl.org/'>Association of Research Libraries (ARL)</a> and <a href='http://cos.io/'>Center for Open Science</a> initiative whose mission is to maximize research impact by making a comprehensive inventory of research widely accessible, discoverable, and reusable. To fulfill this mission SHARE is building a free, open, data set about research and scholarly activities across the scholarly life cycle. This includes registrations, data sets, preprints, and publications.</p>" +
                        "<p>SHARE is funded by the <a href='http://www.imls.gov/'> Institute of Museum and Library Services</a> and the <a href='http://www.sloan.org/'>Alfred P. Sloan Foundation</a>. The SHARE initiative was founded in 2013 by <a href='http://www.arl.org/'>ARL</a>, the <a href='http://www.aau.edu/'>Association of American Universities (AAU)</a>, and the <a href='http://www.aplu.org/'>Association of Public and Land-grant Universities (APLU)</a>.</p>" +
                        "<p>The Research Data Catalog is a joint development effort between the SHARE team and the UC San Diego Library. The Library team includes members of the Research Data Curation, Metadata Services and Information Technology Programs.</p>" +
                        "<h4><b>How do I get my data listed?</b></h4>" +
                        "<p>SHARE harvests metadata about research output from <a href='https://share.osf.io/sources'>146 sources</a> around the world. If your work has been indexed by any of these sources, its metadata has been or can be harvested by SHARE. For your data to be represented in the Research Data Catalog, it must be clearly identified as coming from UC San Diego. How this is done will vary by source. For help, please contact the <a href='mailto:research-data-curation@ucsd.edu'>Research Data Curation Program (RDCP) at the UC San Diego Library</a>.</p>" +
                        "<p>In addition to these sources, the UC San Diego Library can manually enter information into the SHARE catalog. The Library also hosts one of the many sources harvested by SHARE via its Digital Collections website. <a href='mailto:research-data-curation@ucsd.edu'>Contact RDCP</a> for more information on entering information about your published data into SHARE or depositing your data into the Digital Collections. </p>" +
                        "<h4><b>I see an error in the representation of my data! How do I correct it? How do I add more or better metadata for my research in the catalog?</b></h4>" +
                        "<p>Because SHARE harvests from many sources, there will be different answers to this question. While we can update the information in SHARE, we would ideally also correct the original source. <a href='mailto:research-data-curation@ucsd.edu'>Contact RDCP</a> for help.</p>"
                    }
                ]
            },
            institution: {
                dasboardName: 'Institution Overview Dashboard',
                widgets: [
                    {
                        widgetType: "text-widget",
                        name: "",
                        width: 12,
                        facetDash: "aboutDash",
                        widgetSettings : {
                            institution_id: 'ucsd'
                        },
                        content: "Data and research output shared by the UC San Diego research community and indexed by SHARE.",
                        showButton: true,
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
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                parameterName: "sources"
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
                        facetDash: "agentDetail",
                        facetDashParameter: "id",
                        hideViewAll: !transition.queryParams.all,
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
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
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
                                defaultValue: "lists.publishers.id.exact"
                            },
                            {
                                parameterPath: ["aggregations", "publishers", "terms", "size"],
                                parameterName: "publisher_size",
                                defaultValue: 200
                            }
                        ]
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
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                parameterName: "sources"
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["aggregations", "stackedData", "terms", "field"],
                                parameterName: "type_field",
                                defaultValue: "type"
                            }
                        ]
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'contributors-widget',
                        name: 'Top Contributors',
                        width: 12,
                        facetDash: "agentDetail",
                        dataType: 'contributors',
                        facetDashParameter: "id",
                        post_body : {},
                        postBodyParams: [
                            {
                                parameterPath: ["aggregations", "contributors", "terms", "field"],
                                parameterName: "contributors_id_field",
                                defaultValue: "lists.contributors.id.exact"
                            },
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                            }
                        ]
                    },
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
                                    parameterPath: ["query", "bool", "minimum_should_match"],
                                    parameterName: "shouldMatch",
                                    defaultValue: 1
                                },
                                {
                                    parameterPath: ["query", "bool", "should"],
                                    defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                                },
                                {
                                    parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                    parameterName: "sources"
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
                                }
                            ]
                        },
                    {
                        chartType: 'tagsList',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        facetDash: "resultsList",
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
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
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
                        ]
                    },
                    {
                        chartType: 'recentlyAdded',
                        widgetType: 'list-widget',
                        name: 'Recently Added',
                        facetDash: "objectDetail",
                        facetDashParameter: "id",
                        hideViewAll: true,
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
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
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
                        indexVersion: 3,
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
                                parameterPath: ["query", "bool", "filter", 1, "term", "sources"],
                            },
                            {
                                parameterName: "contributor",
                                parameterPath: ["query", "bool", "filter", 2, "term", "contributors.exact"],
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
                        widgetType: 'contributors-widget',
                        name: 'Top Contributors',
                        width: 12,
                        facetDash: "agentDetail",
                        dataType: 'contributors',
                        facetDashParameter: "id",
                        hideViewAll: true,
                        post_body : {
                            "aggregations": {
                                "contributors": {
                                    "terms": {
                                        "field": 'lists.contributors.id.exact',
                                        "size": 100
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
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
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
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
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
                            }
                        ],
                        facetDash: "resultsList",
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
                        widgetType: 'contributors-widget',
                        name: 'Data providers',
                        width: 12,
                        facetDash: "agentDetail",
                        facetDashParameter: "id",
                        hideViewAll: true,
                        post_body: {},
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
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
                                defaultValue: "lists.publishers.id.exact",
                            },
                            {
                                parameterPath: ["aggregations", "publishers", "terms", "size"],
                                parameterName: "publisher_size",
                                defaultValue: 200,
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
                                    parameterPath: ["query", "bool", "minimum_should_match"],
                                    parameterName: "shouldMatch",
                                    defaultValue: 1
                                },
                                {
                                    parameterPath: ["query", "bool", "should"],
                                    defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                                },
                                {
                                    parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                    parameterName: "sources"
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
                                }
                            ]
                        }
                ]
            },
            institution2: {
                dasboardName: 'Institution Overview Dashboard',
                widgets: [
                    {
                        widgetType: "text-widget",
                        name: "",
                        width: 12,
                        facetDash: "aboutDash",
                        widgetSettings : {
                            institution_id: 'ucsd'
                        },
                        content: "Data and research output shared by the UC San Diego research community and indexed by SHARE.",
                        showButton: true,
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
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                parameterName: "sources"
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
                        width: 12,
                        facetDash: "objectDetail",
                        facetDashParameter: "id",
                        hideViewAll: true
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Data Providers',
                        facetDash: "agentDetail",
                        facetDashParameter: "id",
                        width: 6,
                        mappingType: "OBJECT_TO_ARRAY",
                        hideViewAll: !transition.queryParams.all,
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
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
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
                                defaultValue: "lists.publishers.id.exact"
                            },
                            {
                                parameterPath: ["aggregations", "publishers", "terms", "size"],
                                parameterName: "publisher_size",
                                defaultValue: 200
                            }
                        ]
                    },
                    {
                            chartType: 'donut',
                            widgetType: 'c3-chart',
                            name: 'Awards',
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
                                    defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                                },
                                {
                                    parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                    parameterName: "sources"
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
                                }
                            ],
                            facetDash: "awards"
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
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                                parameterName: "sources"
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["aggregations", "stackedData", "terms", "field"],
                                parameterName: "type_field",
                                defaultValue: "type"
                            }
                        ]
                    },
                    {
                        chartType: 'topContributors',
                        widgetType: 'contributors-widget',
                        name: 'Top Contributors',
                        width: 6,
                        facetDash: "agentDetail",
                        dataType: 'contributors',
                        facetDashParameter: "id",
                        post_body : {},
                        postBodyParams: [
                            {
                                parameterPath: ["aggregations", "contributors", "terms", "field"],
                                parameterName: "contributors_id_field",
                                defaultValue: "lists.contributors.id.exact"
                            },
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                            }
                        ]
                    },
                    {
                        chartType: 'tagsList',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        facetDash: "resultsList",
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
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                            },
                            {
                                parameterName: "query",
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                defaultValue: "*"
                            }
                        ]
                    },
                    {
                        chartType: 'recentlyAdded',
                        widgetType: 'list-widget',
                        name: 'Recently Added',
                        facetDash: "objectDetail",
                        facetDashParameter: "id",
                        width: 12,
                        hideViewAll: true,
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
                                defaultValue: (()=>{ return transition.queryParams.all ? ucsd_query : undefined; })()
                            },
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
                    }
                ]
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
                        return;
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
