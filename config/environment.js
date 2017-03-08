/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        authorizationType: 'token',
        modulePrefix: 'analytics-dashboard',
        environment: environment,
        rootURL: '/',
        locationType: 'auto',
        EmberENV: {
            EXTEND_PROTOTYPES: {
                Date: false,
                Array: true,
                String: true,
                Function: true,
            },
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
              // Here you can pass flags/options to your application instance
              // when it is created
        },

        contentSecurityPolicy: {
            'default-src': "'none'",
            'script-src': "'self' www.google-analytics.com",
            'font-src': "'self'",
            'connect-src': "'self' *",
            'img-src': "'self'",
            'style-src': "'self'",
            'media-src': "'self'"
        }

    };
    //this needs to go in an actual env at some point
    ENV.csrfCookie = 'csrftoken';
    ENV.apiBaseUrl = 'https://share.osf.io';
    ENV.apiUrl = 'https://share.osf.io/api/v2';

    if (environment === 'development') {
        ENV['ember-cli-mirage'] = {
            enabled: false
        };
        ENV.APP.LOG_RESOLVER = false;
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_TRANSITIONS = false;
        ENV.APP.LOG_TRANSITIONS_INTERNAL = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;
        ENV.APP.GRANTS_BACKEND = 'http://127.0.0.1:8000/api';
    }
//
//    if (environment === 'staging') {
//        ENV.apiBaseUrl = 'https://staging-share.osf.io';
//        ENV.apiUrl = 'https://staging-share.osf.io/api/v2';
//
//        // Testem prefers this...
//        ENV.baseURL = '/';
//
//        // keep test console output quieter
//        ENV.APP.LOG_ACTIVE_GENERATION = false;
//        ENV.APP.LOG_VIEW_LOOKUPS = false;
//
//        // ENV.APP.rootElement = '#ember-staging';
//    }
//
    ENV.locationType = 'hash';
    ENV.rootURL = '/analytics-dashboard/';


    if (environment === 'production') {
        ENV.locationType = 'hash';
        ENV.rootURL = '/share-analytics/client/';


        ENV.baseURL = "share-analytics";
        ENV.locationType = "hash";

//        ENV.apiBaseUrl = 'https://share.osf.io';
//        ENV.apiUrl = 'https://share.osf.io/api/v2';
//        ENV.metricsAdapters = [{
//          name: 'GoogleAnalytics',
//          environments: ['production'],
//          config: {id: 'UA-83881781-1'}
//        }];
//
//        // Testem prefers this...
//        ENV.baseURL = '/';
//
//        // keep test console output quieter
//        ENV.APP.LOG_ACTIVE_GENERATION = false;
//        ENV.APP.LOG_VIEW_LOOKUPS = false;
    }

    return ENV;
};
