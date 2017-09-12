"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('analytics-dashboard/adapters/application', ['exports', 'ember', 'ember-data', 'analytics-dashboard/config/environment'], function (exports, _ember, _emberData, _analyticsDashboardConfigEnvironment) {
    exports['default'] = _emberData['default'].RESTAdapter.extend(_emberData['default'].BuildURLMixin, {
        namespace: 'api/v2',
        host: _analyticsDashboardConfigEnvironment['default'].apiBaseUrl,
        headers: {
            Accept: 'application/json'
        },
        ajax: function ajax(url, method, hash) {
            hash = hash || {};
            hash.crossDomain = true;
            hash.xhrFields = { withCredentials: true };
            return this._super(url, method, hash);
        },
        pathForType: function pathForType(type) {
            var inflector = new _ember['default'].Inflector(_ember['default'].Inflector.defaultRules);
            return _ember['default'].String.underscore(inflector.pluralize(type));
        }
    });
});
define('analytics-dashboard/adapters/citation', ['exports', 'ember-osf/adapters/citation'], function (exports, _emberOsfAdaptersCitation) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersCitation['default'];
    }
  });
});
define('analytics-dashboard/adapters/collection', ['exports', 'ember-osf/adapters/collection'], function (exports, _emberOsfAdaptersCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersCollection['default'];
    }
  });
});
define('analytics-dashboard/adapters/comment-report', ['exports', 'ember-osf/adapters/comment-report'], function (exports, _emberOsfAdaptersCommentReport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersCommentReport['default'];
    }
  });
});
define('analytics-dashboard/adapters/comment', ['exports', 'ember-osf/adapters/comment'], function (exports, _emberOsfAdaptersComment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersComment['default'];
    }
  });
});
define('analytics-dashboard/adapters/contributor', ['exports', 'ember-osf/adapters/contributor'], function (exports, _emberOsfAdaptersContributor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersContributor['default'];
    }
  });
});
define('analytics-dashboard/adapters/draft-registration', ['exports', 'ember-osf/adapters/draft-registration'], function (exports, _emberOsfAdaptersDraftRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersDraftRegistration['default'];
    }
  });
});
define('analytics-dashboard/adapters/file-contents', ['exports', 'ember-osf/adapters/file-contents'], function (exports, _emberOsfAdaptersFileContents) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFileContents['default'];
    }
  });
});
define('analytics-dashboard/adapters/file-provider', ['exports', 'ember-osf/adapters/file-provider'], function (exports, _emberOsfAdaptersFileProvider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFileProvider['default'];
    }
  });
});
define('analytics-dashboard/adapters/file-version', ['exports', 'ember-osf/adapters/file-version'], function (exports, _emberOsfAdaptersFileVersion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFileVersion['default'];
    }
  });
});
define('analytics-dashboard/adapters/file', ['exports', 'ember-osf/adapters/file'], function (exports, _emberOsfAdaptersFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersFile['default'];
    }
  });
});
define('analytics-dashboard/adapters/institution', ['exports', 'ember-osf/adapters/institution'], function (exports, _emberOsfAdaptersInstitution) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersInstitution['default'];
    }
  });
});
define('analytics-dashboard/adapters/license', ['exports', 'ember-osf/adapters/license'], function (exports, _emberOsfAdaptersLicense) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersLicense['default'];
    }
  });
});
define('analytics-dashboard/adapters/log', ['exports', 'ember-osf/adapters/log'], function (exports, _emberOsfAdaptersLog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersLog['default'];
    }
  });
});
define('analytics-dashboard/adapters/metaschema', ['exports', 'ember-osf/adapters/metaschema'], function (exports, _emberOsfAdaptersMetaschema) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersMetaschema['default'];
    }
  });
});
define('analytics-dashboard/adapters/node-link', ['exports', 'ember-osf/adapters/node-link'], function (exports, _emberOsfAdaptersNodeLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersNodeLink['default'];
    }
  });
});
define('analytics-dashboard/adapters/node', ['exports', 'ember-osf/adapters/node'], function (exports, _emberOsfAdaptersNode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersNode['default'];
    }
  });
});
define('analytics-dashboard/adapters/osf-adapter', ['exports', 'ember-osf/adapters/osf-adapter'], function (exports, _emberOsfAdaptersOsfAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersOsfAdapter['default'];
    }
  });
});
define('analytics-dashboard/adapters/preprint-provider', ['exports', 'ember-osf/adapters/preprint-provider'], function (exports, _emberOsfAdaptersPreprintProvider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersPreprintProvider['default'];
    }
  });
});
define('analytics-dashboard/adapters/preprint', ['exports', 'ember-osf/adapters/preprint'], function (exports, _emberOsfAdaptersPreprint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersPreprint['default'];
    }
  });
});
define('analytics-dashboard/adapters/registration', ['exports', 'ember-osf/adapters/registration'], function (exports, _emberOsfAdaptersRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersRegistration['default'];
    }
  });
});
define('analytics-dashboard/adapters/taxonomy', ['exports', 'ember-osf/adapters/taxonomy'], function (exports, _emberOsfAdaptersTaxonomy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersTaxonomy['default'];
    }
  });
});
define('analytics-dashboard/adapters/user', ['exports', 'ember-osf/adapters/user'], function (exports, _emberOsfAdaptersUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAdaptersUser['default'];
    }
  });
});
define('analytics-dashboard/adapters/widget', ['exports', 'ember-data/adapters/json-api', 'analytics-dashboard/config/environment'], function (exports, _emberDataAdaptersJsonApi, _analyticsDashboardConfigEnvironment) {
    exports['default'] = _emberDataAdaptersJsonApi['default'].extend({

        host: _analyticsDashboardConfigEnvironment['default'].APP.GRANTS_BACKEND,

        buildURL: function buildURL(type, id, record) {
            //call the default buildURL and then append a slash
            // return this._super(type, id, record) + '/';
            return this._super(type, id, record) + '/';
        }

    });
});
define('analytics-dashboard/app', ['exports', 'ember', 'analytics-dashboard/resolver', 'ember-load-initializers', 'analytics-dashboard/config/environment'], function (exports, _ember, _analyticsDashboardResolver, _emberLoadInitializers, _analyticsDashboardConfigEnvironment) {

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = _ember['default'].Application.extend({
    modulePrefix: _analyticsDashboardConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _analyticsDashboardConfigEnvironment['default'].podModulePrefix,
    Resolver: _analyticsDashboardResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _analyticsDashboardConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('analytics-dashboard/authenticators/osf-cookie', ['exports', 'ember-osf/authenticators/osf-cookie'], function (exports, _emberOsfAuthenticatorsOsfCookie) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAuthenticatorsOsfCookie['default'];
    }
  });
});
define('analytics-dashboard/authenticators/osf-token', ['exports', 'ember-osf/authenticators/osf-token'], function (exports, _emberOsfAuthenticatorsOsfToken) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAuthenticatorsOsfToken['default'];
    }
  });
});
define('analytics-dashboard/authorizers/osf-cookie', ['exports', 'ember-osf/authorizers/osf-cookie'], function (exports, _emberOsfAuthorizersOsfCookie) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAuthorizersOsfCookie['default'];
    }
  });
});
define('analytics-dashboard/authorizers/osf-token', ['exports', 'ember-osf/authorizers/osf-token'], function (exports, _emberOsfAuthorizersOsfToken) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfAuthorizersOsfToken['default'];
    }
  });
});
define('analytics-dashboard/components/agent-detail-widget/component', ['exports', 'ember', 'analytics-dashboard/config/environment'], function (exports, _ember, _analyticsDashboardConfigEnvironment) {
    exports['default'] = _ember['default'].Component.extend({

        agentData: _ember['default'].computed(function () {
            return this.get('data.hits.hits')[0];
        }),
        dataAsString: _ember['default'].computed(function () {
            var data = this.get('data.hits.hits')[0];
            return JSON.stringify(data, null, '    ');
        }),
        showJSON: false,

        actions: {

            transitionToFacet: function transitionToFacet(item) {
                var queryParams = {
                    id: undefined
                };
                var facet = this.get("item.facetDashParameter");
                if (facet) {
                    queryParams[facet] = item.name;
                    this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
                } else if (item.url) {
                    window.location.href = item.url;
                }
            },

            transitionToViewAll: function transitionToViewAll(item) {
                this.attrs.transitionToFacet(item.dataType, item);
            }

        }

    });
});
define("analytics-dashboard/components/agent-detail-widget/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 8
            },
            "end": {
              "line": 6,
              "column": 8
            }
          },
          "moduleName": "analytics-dashboard/components/agent-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "type", ["loc", [null, [5, 18], [5, 26]]], 0, 0, 0, 0]],
        locals: ["type"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 4
            },
            "end": {
              "line": 10,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/agent-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Description");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "agentData._source.description", ["loc", [null, [9, 33], [9, 66]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 16
              },
              "end": {
                "line": 17,
                "column": 16
              }
            },
            "moduleName": "analytics-dashboard/components/agent-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "identifier", ["loc", [null, [16, 24], [16, 38]]], 0, 0, 0, 0]],
          locals: ["identifier"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 4
            },
            "end": {
              "line": 20,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/agent-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Identifiers");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "agentData._source.identifiers", ["loc", [null, [15, 24], [15, 53]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [15, 16], [17, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 16
              },
              "end": {
                "line": 27,
                "column": 16
              }
            },
            "moduleName": "analytics-dashboard/components/agent-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "source", ["loc", [null, [26, 24], [26, 34]]], 0, 0, 0, 0]],
          locals: ["source"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 4
            },
            "end": {
              "line": 30,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/agent-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Sources");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "agentData._source.sources", ["loc", [null, [25, 24], [25, 49]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [25, 16], [27, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 4
            },
            "end": {
              "line": 34,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/agent-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "pointer");
          var el2 = dom.createTextNode("Hide Raw Data    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
          return morphs;
        },
        statements: [["element", "action", [["get", "toggleProperty", ["loc", [null, [32, 21], [32, 35]]], 0, 0, 0, 0], "showJSON"], [], ["loc", [null, [32, 12], [32, 48]]], 0, 0], ["inline", "fa-icon", ["chevron-up"], [], ["loc", [null, [32, 102], [32, 126]]], 0, 0], ["content", "dataAsString", ["loc", [null, [33, 13], [33, 29]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 4
            },
            "end": {
              "line": 36,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/agent-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "pointer");
          var el2 = dom.createTextNode("View Raw Data    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["element", "action", [["get", "toggleProperty", ["loc", [null, [35, 21], [35, 35]]], 0, 0, 0, 0], "showJSON"], [], ["loc", [null, [35, 12], [35, 48]]], 0, 0], ["inline", "fa-icon", ["chevron-down"], [], ["loc", [null, [35, 102], [35, 128]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 38,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/agent-detail-widget/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "object-detail");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var element3 = dom.childAt(element2, [1]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(element3, 1, 1);
        morphs[1] = dom.createMorphAt(element3, 4, 4);
        morphs[2] = dom.createMorphAt(element2, 3, 3);
        morphs[3] = dom.createMorphAt(element2, 4, 4);
        morphs[4] = dom.createMorphAt(element2, 5, 5);
        morphs[5] = dom.createMorphAt(element2, 6, 6);
        return morphs;
      },
      statements: [["content", "agentData._source.name", ["loc", [null, [3, 8], [3, 34]]], 0, 0, 0, 0], ["block", "each", [["get", "agentData._source.types", ["loc", [null, [4, 16], [4, 39]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 8], [6, 17]]]], ["block", "if", [["get", "agentData._source.description", ["loc", [null, [8, 10], [8, 39]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [8, 4], [10, 11]]]], ["block", "if", [["get", "agentData._source.identifiers", ["loc", [null, [11, 10], [11, 39]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [11, 4], [20, 11]]]], ["block", "if", [["get", "agentData._source.sources", ["loc", [null, [21, 10], [21, 35]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [21, 4], [30, 11]]]], ["block", "if", [["get", "showJSON", ["loc", [null, [31, 10], [31, 18]]], 0, 0, 0, 0]], [], 4, 5, ["loc", [null, [31, 4], [36, 11]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define('analytics-dashboard/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'analytics-dashboard/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _analyticsDashboardConfigEnvironment) {

  var name = _analyticsDashboardConfigEnvironment['default'].APP.name;
  var version = _analyticsDashboardConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('analytics-dashboard/components/bootstrap-datepicker-inline', ['exports', 'ember', 'ember-cli-bootstrap-datepicker/components/bootstrap-datepicker-inline'], function (exports, _ember, _emberCliBootstrapDatepickerComponentsBootstrapDatepickerInline) {
  exports['default'] = _emberCliBootstrapDatepickerComponentsBootstrapDatepickerInline['default'];
});
define('analytics-dashboard/components/bootstrap-datepicker', ['exports', 'ember', 'ember-cli-bootstrap-datepicker/components/bootstrap-datepicker'], function (exports, _ember, _emberCliBootstrapDatepickerComponentsBootstrapDatepicker) {
  exports['default'] = _emberCliBootstrapDatepickerComponentsBootstrapDatepicker['default'];
});
define('analytics-dashboard/components/bs-accordion-item', ['exports', 'ember-bootstrap/components/bs-accordion-item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('analytics-dashboard/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('analytics-dashboard/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('analytics-dashboard/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  exports['default'] = _emberBootstrapComponentsBsButtonGroup['default'];
});
define('analytics-dashboard/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  exports['default'] = _emberBootstrapComponentsBsButton['default'];
});
define('analytics-dashboard/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('analytics-dashboard/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-dropdown-button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('analytics-dashboard/components/bs-dropdown-menu', ['exports', 'ember-bootstrap/components/bs-dropdown-menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('analytics-dashboard/components/bs-dropdown-toggle', ['exports', 'ember-bootstrap/components/bs-dropdown-toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('analytics-dashboard/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('analytics-dashboard/components/bs-form-element', ['exports', 'ember-bootstrap/components/bs-form-element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('analytics-dashboard/components/bs-form-group', ['exports', 'ember-bootstrap/components/bs-form-group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('analytics-dashboard/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('analytics-dashboard/components/bs-input', ['exports', 'ember-bootstrap/components/bs-input'], function (exports, _emberBootstrapComponentsBsInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsInput['default'];
    }
  });
});
define('analytics-dashboard/components/bs-modal-backdrop', ['exports', 'ember-bootstrap/components/bs-modal-backdrop'], function (exports, _emberBootstrapComponentsBsModalBackdrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBackdrop['default'];
    }
  });
});
define('analytics-dashboard/components/bs-modal-body', ['exports', 'ember-bootstrap/components/bs-modal-body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('analytics-dashboard/components/bs-modal-dialog', ['exports', 'ember-bootstrap/components/bs-modal-dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('analytics-dashboard/components/bs-modal-footer', ['exports', 'ember-bootstrap/components/bs-modal-footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('analytics-dashboard/components/bs-modal-header', ['exports', 'ember-bootstrap/components/bs-modal-header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('analytics-dashboard/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('analytics-dashboard/components/bs-nav-item', ['exports', 'ember-bootstrap/components/bs-nav-item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('analytics-dashboard/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('analytics-dashboard/components/bs-navbar-content', ['exports', 'ember-bootstrap/components/bs-navbar-content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('analytics-dashboard/components/bs-navbar-nav', ['exports', 'ember-bootstrap/components/bs-navbar-nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('analytics-dashboard/components/bs-navbar-toggle', ['exports', 'ember-bootstrap/components/bs-navbar-toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('analytics-dashboard/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('analytics-dashboard/components/bs-popover-element', ['exports', 'ember-bootstrap/components/bs-popover-element'], function (exports, _emberBootstrapComponentsBsPopoverElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopoverElement['default'];
    }
  });
});
define('analytics-dashboard/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _emberBootstrapComponentsBsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopover['default'];
    }
  });
});
define('analytics-dashboard/components/bs-progress-bar', ['exports', 'ember-bootstrap/components/bs-progress-bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('analytics-dashboard/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('analytics-dashboard/components/bs-select', ['exports', 'ember-bootstrap/components/bs-select'], function (exports, _emberBootstrapComponentsBsSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsSelect['default'];
    }
  });
});
define('analytics-dashboard/components/bs-tab-pane', ['exports', 'ember-bootstrap/components/bs-tab-pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('analytics-dashboard/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('analytics-dashboard/components/bs-textarea', ['exports', 'ember-bootstrap/components/bs-textarea'], function (exports, _emberBootstrapComponentsBsTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTextarea['default'];
    }
  });
});
define('analytics-dashboard/components/bs-tooltip-element', ['exports', 'ember-bootstrap/components/bs-tooltip-element'], function (exports, _emberBootstrapComponentsBsTooltipElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltipElement['default'];
    }
  });
});
define('analytics-dashboard/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _emberBootstrapComponentsBsTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltip['default'];
    }
  });
});
define('analytics-dashboard/components/c3-chart', ['exports', 'ember-c3/components/c3-chart'], function (exports, _emberC3ComponentsC3Chart) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberC3ComponentsC3Chart['default'];
    }
  });
});
define('analytics-dashboard/components/c3-chart/component', ['exports', 'ember', 'analytics-dashboard/config/environment', 'analytics-dashboard/utils/currency-rounder'], function (exports, _ember, _analyticsDashboardConfigEnvironment, _analyticsDashboardUtilsCurrencyRounder) {
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    var NIH_LABELS = {
        'fogarty international center': 'FIC',
        'national center for advancing translational sciences': 'NCATS',
        'national center for complementary and integrative health': 'NCCIH',
        'national cancer institute': 'NCI',
        'national eye institute': 'NEI',
        'national human genome research institute': 'NHGRI',
        'national heart': 'NHLBI',
        'national institute on aging': 'NIA',
        'national institute on alcohol abuse and alcoholism': 'NIAAA',
        'national institute of allergy and infectious diseases': 'NIAID',
        'national institute of arthritis and musculoskeletal and skin diseases': 'NIAMS',
        'national institute of biomedical imaging and bioengineering': 'NIBIB',
        'national institute of child health and human development': 'NICHD',
        'national institute on drug abuse': 'NIDA',
        'national institute on deafness and other communication disorders': 'NIDCD',
        'national institute of dental and craniofacial research': 'NIDCR',
        'national institute of diabetes and digestive and kidney diseases': 'NIDDK',
        'national institute of environmental health sciences': 'NIEHS',
        'national institute of general medical sciences': 'NIGMS',
        'national institute of mental health': 'NIMH',
        'national institute of neurological disorders and stroke': 'NINDS',
        'national institute of nursing research': 'NINR',
        'national library of medicine': 'NLM',
        'office of the director': 'OD',
        'national science foundation': 'NSF',
        'u.s. department of energy': 'U.S. DOE',
        'rolling deck to repository (r2r) program': 'R2R Program',
        'pangaea - data publisher for earth & environmental science': 'PANGAEA',
        'escholarship, university of california': 'eScholarship, UC',
        'international studies perspectives 2015. doi: 10.1111/insp.12104': 'Intl. Studies Perspectives'
    };

    function log10ToLinear(log_num) {
        if (log_num <= 0) {
            return 0;
        }
        return Math.pow(10, log_num - 1).toFixed(0);
    }

    function linearToLog10(lin_num) {
        if (lin_num <= 0) {
            return 0;
        }
        return Math.log(lin_num) / Math.LN10 + 1;
    }

    function getLabel(label) {
        if (NIH_LABELS[label.toLowerCase()]) {
            return NIH_LABELS[label.toLowerCase()];
        }
        return label;
    }

    exports['default'] = _ember['default'].Component.extend({

        classNames: ['chart'],
        charttitle: 'Untitled Chart',

        dataChanged: _ember['default'].observer('data', function () {
            this.updateChart();
        }),

        dataChanged2: _ember['default'].observer('data.[]', function () {
            this.updateChart();
        }),

        data: [],

        init: function init() {
            this._super.apply(this, arguments);
            if (this.get('name') === 'Data Providers') {
                this.processData(this.get("aggregations.publishers.buckets"));
            }
            if (this.get('name') === "Funders") {
                this.processData(this.get('aggregations.funders.buckets'));
            }
        },

        processData: function processData(data) {
            var agent_details;
            return regeneratorRuntime.async(function processData$(context$1$0) {
                while (1) switch (context$1$0.prev = context$1$0.next) {
                    case 0:
                        if (!(this.get('name') === 'Data Providers' || this.get('name') === 'Funders')) {
                            context$1$0.next = 5;
                            break;
                        }

                        context$1$0.next = 3;
                        return regeneratorRuntime.awrap(_ember['default'].$.ajax({
                            url: 'https://dev-labs.cos.io/bulk_get_agents',
                            crossDomain: true,
                            data: JSON.stringify(data),
                            type: 'POST',
                            contentType: 'application/json'
                        }));

                    case 3:
                        agent_details = context$1$0.sent;

                        this.set("data", JSON.parse(agent_details));

                    case 5:
                    case 'end':
                        return context$1$0.stop();
                }
            }, null, this);
        },

        sizeChanged: _ember['default'].observer('resizedSignal', function () {
            if (this.get('resizedSignal') === false) {
                return;
            }
            this.updateChart();
            this.set('resizedSignal', false);
        }),

        charTypeChange: _ember['default'].observer('chartType', function () {
            this.updateChart();
        }),

        updateChart: function updateChart() {
            var self, chart_type, chart_options, title, _data, data, columns, labels;

            return regeneratorRuntime.async(function updateChart$(context$1$0) {
                var _this = this;

                while (1) switch (context$1$0.prev = context$1$0.next) {
                    case 0:
                        self = this;
                        chart_type = this.get('chartType');
                        chart_options = _defineProperty({
                            bindto: this.$(this.element).find('.renderChart')[0],
                            data: {
                                columns: null, //to be filled later
                                type: chart_type,
                                onclick: function onclick(d) {
                                    self.get('actions').transitionToFacet.call(self, d.id);
                                }
                            },
                            legend: { show: false }
                        }, chart_type, {
                            title: this.get('charttitle'), //to be filled later
                            label: {
                                show: false
                            }
                        });

                        if (chart_type == 'donut') {
                            title = '';
                            _data = this.get('data');

                            if (this.get('data').length === 0 && this.get('name') === 'Data Providers') {
                                data = [{
                                    'id': '64201-BDE-4D4',
                                    'name': 'UC San Diego',
                                    'number': 58
                                }];

                                this.set('data', data);
                            }

                            if (this.get('item.mappingType') === 'OBJECT_TO_ARRAY') {
                                columns = this.get('data').map(function (_ref) {
                                    var id = _ref.id;
                                    var number = _ref.number;
                                    return [id, number];
                                });
                            }

                            if (this.get('item.mappingType') === 'OBJECT_AWARDS_NESTED_VALUE_TO_ARRAY') {
                                columns = this.get('data').map(function (_ref2) {
                                    var id = _ref2.id;
                                    var number = _ref2.number;
                                    var awards = _ref2.awards;
                                    return [id, awards.value];
                                });
                            }

                            chart_options['tooltip'] = {
                                format: { // We want to return a nice-looking tooltip whose content is determined by (or at least consistent with) sour TS intervals
                                    name: function name(id, percentage) {
                                        return self.data.reduce(function (acc, cur, idx, arr) {
                                            if (cur.id === id) {
                                                return cur.name;
                                            }
                                            return acc;
                                        }, false);
                                    },
                                    value: function value(_value, percent, id) {
                                        var obj = self.data.filter(function (obj) {
                                            return obj.id === id;
                                        })[0];
                                        var counts = obj.number;
                                        if (self.get('name') === 'Funders') {
                                            var roundedValue = (0, _analyticsDashboardUtilsCurrencyRounder['default'])(_value);
                                            return counts + "&nbsp;records ($" + roundedValue + ")";
                                        }
                                        return counts + " records"; // This isn't perfect, but it's at least more verbose than before
                                    }
                                }
                            };

                            chart_options['donut'].width = 100;
                        } else if (chart_type === 'bar') {

                            this.set('data', this.get('aggregations.contributors.buckets'));
                            columns = this.get('data').map(function (_ref3) {
                                var key = _ref3.key;
                                var doc_count = _ref3.doc_count;
                                return [key, doc_count];
                            }).slice(0, 10);

                            chart_options['axis'] = {
                                x: {
                                    tick: {
                                        format: function format() {
                                            return 'Top 10 Contributors';
                                        }
                                    }
                                },
                                y: {
                                    label: 'Number of Publications'
                                }
                            };
                            chart_options['tooltip'] = {
                                grouped: false };
                            // Default true
                            chart_options['tooltip'] = tooltip;
                        } else if (chart_type === 'relevanceHistogram') {
                            (function () {

                                var UC_hits = _this.get('aggregations.filtered_score.buckets.institution.doc_count');
                                var total_hits = _this.get('total');
                                columns = [['overallCountByRelevance'].concat(_this.get('data.aggregations.all_score.buckets').map(function (datum) {
                                    var val = _this.get('aggregations.all_score.buckets')[datum.key];
                                    if (val && val.doc_count > 0) {
                                        return val.doc_count * UC_hits / total_hits;
                                    }
                                    return 0;
                                })), ['ucCountByRelevance'].concat(_this.get('aggregations.all_score.buckets').map(function (datum) {
                                    var val = _this.get('aggregations.filtered_score.buckets.institution.score.buckets')[datum.key];
                                    if (val && val.doc_count > 0) {
                                        return val.doc_count;
                                    }
                                    return 0;
                                }))];

                                chart_options['axis'] = {
                                    x: {
                                        tick: {
                                            format: function format(val) {
                                                return val;
                                            }
                                        },
                                        label: 'Relevance Score'
                                    },
                                    y: {
                                        tick: {
                                            format: function format(d) {
                                                return d;
                                            }
                                        },
                                        label: 'Number of Items'
                                    }
                                };

                                chart_options['data']['types'] = {
                                    x: 'bar',
                                    overallCountByRelevance: 'bar',
                                    doeCountByRelevance: 'bar',
                                    ucCountByRelevance: 'bar'
                                };

                                chart_options['data']['labels'] = {
                                    //labels: {
                                    //    format: {
                                    //        overallCountByRelevance: function(d,id){console.log(id, Math.pow(10,d));return Math.pow(10,d).toFixed(0);},
                                    //        institutionCountByRelevance: function(d,id){console.log(id, Math.pow(10,d));return Math.pow(10,d).toFixed(0);}
                                    //    }
                                    //}
                                };

                                chart_options['point'] = { show: false };
                            })();
                        } else if (chart_type === 'timeseries') {
                            (function () {

                                var x_axis = _this.get('data.aggregations.all_over_time.buckets').map(function (datum) {
                                    return datum.key_as_string;
                                });
                                columns = _this.get('data.aggregations.sorted_by_type.buckets').map(function (bucket) {
                                    return [bucket.key].concat(bucket['type_over_time'].buckets.reduce(function (ret, bucket) {
                                        ret[x_axis.indexOf(bucket.key_as_string)] = linearToLog10(bucket.doc_count);
                                        return ret;
                                    }, new Array(x_axis.length).fill(0)));
                                });

                                columns.unshift(['x'].concat(x_axis));
                                columns.unshift(['All Events'].concat(_this.get('data.aggregations.all_over_time.buckets').map(function (bucket) {
                                    return linearToLog10(bucket.doc_count);
                                })));
                                var data_x = 'x';
                                chart_options['axis'] = {
                                    x: {
                                        type: 'timeseries',
                                        tick: {
                                            culling: {
                                                max: 10
                                            },
                                            rotate: 90,
                                            format: '%d-%m-%Y' // Format the tick labels on our chart
                                        }
                                    },
                                    y: {
                                        min: 1,
                                        tick: {
                                            format: log10ToLinear
                                        },
                                        label: 'Number of Items (Log Scale)'
                                    }
                                };
                                var data_types = columns.reduce(function (r, c, i, a) {
                                    r[c[0]] = 'area-spline';
                                    return r;
                                }, {});
                                chart_options['tooltip'] = {
                                    format: { // We want to return a nice-looking tooltip whose content is determined by (or at least consistent with) sour TS intervals
                                        title: function title(d) {
                                            return d.toString().substring(4, 15); // This isn't perfect, but it's at least more verbose than before
                                        }
                                    }
                                };

                                var point = {
                                    show: false
                                };

                                chart_options['data']['types'] = data_types;
                                chart_options['data']['x'] = data_x;
                                chart_options['legend'] = { position: "right" };
                                chart_options['point'] = point;
                            })();
                        }

                        chart_options['data']['columns'] = columns;
                        chart_options[chart_type]['title'] = title;
                        this.set('chart', c3.generate(chart_options));

                        if (chart_type === "donut") {
                            labels = d3.selectAll(this.$(this.element).find('.c3-chart-arc')).select(function (d) {
                                var angle_size = d.endAngle - d.startAngle;
                                if (angle_size < 0.5) {
                                    return;
                                }
                                d3.select(this.parentNode).append('text').text(self.data.reduce(function (acc, cur, idx, arr) {
                                    if (cur.id === d.data.id) {
                                        var string = cur.name ? cur.name : cur.id;
                                        var label = getLabel(string);
                                        if (label.length > 28) {
                                            return label.substring(0, 25) + "...";
                                        }
                                        return label;
                                    }
                                    return acc;
                                }, false)).attr("x", 160 * Math.sin((d.startAngle + d.endAngle) / 2)).attr("y", -130 * Math.cos((d.startAngle + d.endAngle) / 2)).attr("text-anchor", "middle").attr("alignment-baseline", "central").attr("font-size", "12px").attr("fill", "rgb(250,250,250)").each(function (d) {
                                    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                                    this.parentNode.insertBefore(rect, this);
                                    var bbox = this.getBBox();
                                    d3.select(rect).attr("fill", "rgba(0,0,0,0.5)").attr("stroke", "rgba(0,0,0,0.6)").attr("width", bbox.width + 14).attr("height", bbox.height + 8).attr("x", bbox.x - 7).attr("y", bbox.y - 4);
                                });
                            });
                        }

                    case 8:
                    case 'end':
                        return context$1$0.stop();
                }
            }, null, this);
        },

        /*var labels_bgs = d3.selectAll(this.$(this.element).find('.c3-chart-arc'))
            .insert('rect', 'text')
            .each(function(d) {
                d.attr("width", 200).attr("height", 20)
            })
         labels.select(function() {
        });*/
        didRender: function didRender() {
            //this.updateChart();
        },

        actions: {
            parentTransitionToFacet: function parentTransitionToFacet(facetDash, queryParams) {
                this.attrs.transitionToFacet(facetDash, queryParams);
            },
            transitionToFacet: function transitionToFacet(id, override) {
                //Two different items here; one refers to the widget; one refers to the datum.
                override = override || false;
                var queryParams = {};
                var data = this.get('data');
                var item = data.reduce(function (acc, cur, idx, arr) {
                    if (cur.id === id) {
                        return cur;
                    }
                    return acc;
                }, false);
                var facet = this.get("item.facetDashParameter");
                var facetDash = this.get("item.facetDash");
                queryParams["page"] = undefined;
                if (override) {
                    facetDash = override;
                }
                if (id === null) {
                    this.attrs.transitionToFacet(facetDash, queryParams);
                    return;
                }
                if (facetDash === "url" && item.url) {
                    window.location.href = item.url;
                    return;
                }
                if (facet) {
                    queryParams[facet] = item.name;
                    if (item.types.indexOf("agent") > -1) {
                        queryParams[facet] = item.id;
                    }
                    this.attrs.transitionToFacet(facetDash, queryParams);
                }
            }
        }

    });
});
/* global c3 */
define("analytics-dashboard/components/c3-chart/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 2
            }
          },
          "moduleName": "analytics-dashboard/components/c3-chart/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "text-muted text-smaller");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          var el3 = dom.createTextNode("(");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(")");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["content", "widgetSettings.helpText", ["loc", [null, [4, 10], [4, 37]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 2
            },
            "end": {
              "line": 11,
              "column": 2
            }
          },
          "moduleName": "analytics-dashboard/components/c3-chart/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "dropdown-widget", [], ["widgetSettings", ["subexpr", "@mut", [["get", "widgetSettings", ["loc", [null, [10, 39], [10, 53]]], 0, 0, 0, 0]], [], [], 0, 0], "aggregations", ["subexpr", "@mut", [["get", "aggregations", ["loc", [null, [10, 67], [10, 79]]], 0, 0, 0, 0]], [], [], 0, 0], "parameters", ["subexpr", "@mut", [["get", "parameters", ["loc", [null, [10, 91], [10, 101]]], 0, 0, 0, 0]], [], [], 0, 0], "item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [10, 107], [10, 111]]], 0, 0, 0, 0]], [], [], 0, 0], "data", ["subexpr", "@mut", [["get", "data", ["loc", [null, [10, 117], [10, 121]]], 0, 0, 0, 0]], [], [], 0, 0], "transitionToFacet", ["subexpr", "action", ["parentTransitionToFacet"], [], ["loc", [null, [10, 140], [10, 174]]], 0, 0]], ["loc", [null, [10, 6], [10, 176]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 15,
                  "column": 12
                },
                "end": {
                  "line": 19,
                  "column": 12
                }
              },
              "moduleName": "analytics-dashboard/components/c3-chart/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "text-right m-t-md");
              var el2 = dom.createTextNode("\n                    ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("button");
              dom.setAttribute(el2, "class", "btn btn-link text-bigger");
              var el3 = dom.createTextNode("View all");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1, 1]);
              var morphs = new Array(1);
              morphs[0] = dom.createElementMorph(element0);
              return morphs;
            },
            statements: [["element", "action", ["transitionToFacet", null, "providers"], [], ["loc", [null, [17, 61], [17, 108]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 8
              },
              "end": {
                "line": 20,
                "column": 8
              }
            },
            "moduleName": "analytics-dashboard/components/c3-chart/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "unless", [["get", "item.hideViewAll", ["loc", [null, [15, 22], [15, 38]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [15, 12], [19, 23]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 4
            },
            "end": {
              "line": 21,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/c3-chart/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "widgetSettings.viewAllRoute", ["loc", [null, [14, 14], [14, 41]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [14, 8], [20, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 4
            },
            "end": {
              "line": 23,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/c3-chart/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "text-center");
          var el2 = dom.createTextNode("No data providers");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/c3-chart/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "widget-body clearfix");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "renderChart");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        morphs[2] = dom.createMorphAt(element1, 7, 7);
        return morphs;
      },
      statements: [["block", "if", [["get", "widgetSettings.helpText", ["loc", [null, [2, 8], [2, 31]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 2], [6, 9]]]], ["block", "if", [["get", "widgetSettings.showFilter", ["loc", [null, [9, 8], [9, 33]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [9, 2], [11, 9]]]], ["block", "if", [["get", "data.length", ["loc", [null, [13, 10], [13, 21]]], 0, 0, 0, 0]], [], 2, 3, ["loc", [null, [13, 4], [23, 11]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define('analytics-dashboard/components/citation-widget/component', ['exports', 'ember-osf/components/citation-widget/component'], function (exports, _emberOsfComponentsCitationWidgetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsCitationWidgetComponent['default'];
    }
  });
});
define('analytics-dashboard/components/comment-detail/component', ['exports', 'ember-osf/components/comment-detail/component'], function (exports, _emberOsfComponentsCommentDetailComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsCommentDetailComponent['default'];
    }
  });
});
define('analytics-dashboard/components/comment-form/component', ['exports', 'ember-osf/components/comment-form/component'], function (exports, _emberOsfComponentsCommentFormComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsCommentFormComponent['default'];
    }
  });
});
define('analytics-dashboard/components/comment-pane/component', ['exports', 'ember-osf/components/comment-pane/component'], function (exports, _emberOsfComponentsCommentPaneComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsCommentPaneComponent['default'];
    }
  });
});
define('analytics-dashboard/components/draggable-object-target', ['exports', 'ember-drag-drop/components/draggable-object-target'], function (exports, _emberDragDropComponentsDraggableObjectTarget) {
  exports['default'] = _emberDragDropComponentsDraggableObjectTarget['default'];
});
define('analytics-dashboard/components/draggable-object', ['exports', 'ember-drag-drop/components/draggable-object'], function (exports, _emberDragDropComponentsDraggableObject) {
  exports['default'] = _emberDragDropComponentsDraggableObject['default'];
});
define('analytics-dashboard/components/dropdown-widget/component', ['exports', 'ember'], function (exports, _ember) {
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    exports['default'] = _ember['default'].Component.extend({
        dropList: null,
        firstRow: 'Select type', // Text for visible first row on dropdown,
        mode: 'dropdown', // Can be dropdown or search
        filteredList: null,
        filterText: '',
        showList: false,
        selectedType: null, // If mode of widget is dropdown, this will be set to item listed in query parameters
        enteredItem: null, // If mode of widget is search, this will be set to the term in query parameters
        updatedData: _ember['default'].observer('data', function () {
            if (this.get('widgetSettings.aggregationTitle')) {
                this.processData(this.get('data'));
            }
        }),
        typingTimer: null,
        init: function init() {
            var _this = this;

            this._super.apply(this, arguments);
            // check settings to see what the mode is
            var settings = this.get('widgetSettings');
            if (settings && settings.mode) {
                this.set('mode', settings.mode);
            }
            this.set('dropList', _ember['default'].A());
            this.set('filteredList', _ember['default'].A());
            var aggregationsData = this.get('aggregations.dropdownList.buckets') || this.get('aggregations.publishers.buckets');
            this.processData(aggregationsData);
            // Show the selected parameter
            var queryParams = this.get('parameters');
            var facet = this.get("item.facetDashParameter");
            console.log(queryParams[facet]);
            if (queryParams[facet]) {
                if (facet === 'type') {
                    this.set('selectedType', queryParams[facet]);
                } else if (facet === 'funders' || facet === 'publishers' || facet === 'contributors') {
                    var id = { key: queryParams[facet] };
                    console.log('id', id);

                    this.fetchAgentDetails([id]).then(function (data) {
                        if (data[0]) {
                            _this.set('enteredItem', data[0].name);
                        }
                    });
                } else {
                    this.set('enteredItem', queryParams[facet]);
                }
            }
        },
        fetchAgentDetails: function fetchAgentDetails(agentList) {
            var agent_details;
            return regeneratorRuntime.async(function fetchAgentDetails$(context$1$0) {
                while (1) switch (context$1$0.prev = context$1$0.next) {
                    case 0:
                        console.log('agentList', agentList);
                        context$1$0.next = 3;
                        return regeneratorRuntime.awrap(_ember['default'].$.ajax({
                            url: 'https://dev-labs.cos.io/bulk_get_agents',
                            crossDomain: true,
                            data: JSON.stringify(agentList),
                            type: 'POST',
                            contentType: 'application/json'
                        }));

                    case 3:
                        agent_details = context$1$0.sent;
                        return context$1$0.abrupt('return', JSON.parse(agent_details));

                    case 5:
                    case 'end':
                        return context$1$0.stop();
                }
            }, null, this);
        },
        outsideClick: function outsideClick(event) {
            if (!this.get('showList')) {
                return;
            }
            var $element = this.$();
            var $target = $(event.target);

            if ($element && $target && !$target.closest($element).length) {
                this.set('showList', false);
            }
        },
        didInsertElement: function didInsertElement() {
            if (this.get('mode') === 'dropdown') {
                return;
            }
            var clickHandler = this.get('outsideClick').bind(this);
            _ember['default'].$(document).on('click', clickHandler);
        },
        willDestroyElement: function willDestroyElement() {
            if (this.get('mode') === 'dropdown') {
                return;
            }
            var clickHandler = this.get('outsideClick').bind(this);
            _ember['default'].$(document).off('click', clickHandler);
        },
        processData: function processData(data) {
            var _this2 = this;

            this.get('dropList').clear();
            this.get('filteredList').clear();
            data.forEach(function (item) {
                var obj = {};
                if (item.doc_count) {
                    if (item.doc_count > 0) {
                        obj.key = item.key;
                        if (item.name) {
                            obj.name = item.name.buckets[0].key;
                        }
                    } else {
                        return;
                    }
                } else if (item.number) {
                    if (item.number > 0) {
                        obj.key = item.id;
                        obj.name = item.name;
                    } else {
                        return;
                    }
                }
                _this2.get('dropList').addObject(obj);
                _this2.get('filteredList').addObject(obj);
            });
        },
        actions: {
            transitionToFacet: function transitionToFacet(value) {
                //Two different items here; one refers to the widget; one refers to the datum.
                var queryParams = {};
                var facet = this.get("item.facetDashParameter");
                if (facet) {
                    queryParams[facet] = value;
                    queryParams["page"] = undefined;
                    this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
                }
            },
            removeFilter: function removeFilter(key) {
                var queryParams = {};
                queryParams[key] = undefined;
                this.attrs.transitionToFacet("search", queryParams);
            },
            applySelection: function applySelection(value) {
                this.send('transitionToFacet', value);
            },
            debouncedfilterVisible: function debouncedfilterVisible() {
                clearTimeout(this.get('typingTimer'));
                var typingTimer = setTimeout((function () {
                    this.send('filterVisible');
                }).bind(this), 1000);
                this.set('typingTimer', typingTimer);
            },
            resetDebounce: function resetDebounce() {
                clearTimeout(this.get('typingTimer'));
            },
            filterVisible: function filterVisible() {
                var widget_category;
                return regeneratorRuntime.async(function filterVisible$(context$1$0) {
                    var _this3 = this;

                    while (1) switch (context$1$0.prev = context$1$0.next) {
                        case 0:
                            widget_category = this.get('item.facetDashParameter');

                            if (!(widget_category === "contributors")) {
                                context$1$0.next = 4;
                                break;
                            }

                            context$1$0.next = 4;
                            return regeneratorRuntime.awrap((function callee$1$0() {
                                var term_name, search_term_query, search_term, first_char_search_term, filter_query, filter_data, afilteredList, flattenedFilteredContribList, i, k;
                                return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
                                    while (1) switch (context$2$0.prev = context$2$0.next) {
                                        case 0:
                                            term_name = "lists." + this.get('item.facetDashParameter') + ".name.exact";
                                            search_term_query = this.get('filterText');
                                            search_term = "^" + this.get('filterText');
                                            first_char_search_term = search_term_query.charAt(0).toLowerCase();

                                            if (search_term_query.length > 1) {
                                                search_term_query = search_term_query.slice(1, search_term_query.length);
                                                search_term_query = "[" + first_char_search_term + first_char_search_term.toUpperCase() + "]" + search_term_query + "(.*)";
                                            } else {
                                                search_term_query = search_term_query + "(.*)";
                                            }

                                            filter_query = {
                                                "query": {
                                                    "bool": {
                                                        "must": {
                                                            "regexp": _defineProperty({}, term_name, {
                                                                "value": search_term_query
                                                            })
                                                        }
                                                    }
                                                }
                                            };
                                            context$2$0.next = 8;
                                            return regeneratorRuntime.awrap(_ember['default'].$.ajax({
                                                url: 'https://dev-labs.cos.io/api/v2/search/creativeworks/_search?request_cache=true',
                                                crossDomain: true,
                                                data: JSON.stringify(filter_query),
                                                type: 'POST',
                                                contentType: 'application/json'
                                            }));

                                        case 8:
                                            filter_data = context$2$0.sent;
                                            afilteredList = filter_data.hits.hits.map(function (x) {
                                                if (widget_category === "contributors") {

                                                    var contributorsList = x._source.lists.contributors.map(function (y) {
                                                        return {
                                                            key: y.id,
                                                            name: y.name
                                                        };
                                                    });

                                                    var filteredContribList = contributorsList.filter(function (word) {
                                                        return word.name.toLowerCase().match(search_term.toLowerCase());
                                                    });
                                                }
                                                return filteredContribList;
                                            });
                                            flattenedFilteredContribList = afilteredList.reduce(function (a, b) {
                                                return a.concat(b);
                                            }, []);

                                            for (i = 0; i < flattenedFilteredContribList.length; i++) {
                                                for (k = i + 1; k < flattenedFilteredContribList.length; k++) {
                                                    if (flattenedFilteredContribList[i].name == flattenedFilteredContribList[k].name) {
                                                        flattenedFilteredContribList.splice(k, 1);
                                                    }
                                                }
                                            }

                                            this.set('filteredList', Array.from(new Set(flattenedFilteredContribList)));

                                        case 13:
                                        case 'end':
                                            return context$2$0.stop();
                                    }
                                }, null, _this3);
                            })());

                        case 4:
                        case 'end':
                            return context$1$0.stop();
                    }
                }, null, this);
            },
            showList: function showList() {
                this.set('showList', true);
            }
        }

    });
});
define("analytics-dashboard/components/dropdown-widget/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 6
              },
              "end": {
                "line": 7,
                "column": 6
              }
            },
            "moduleName": "analytics-dashboard/components/dropdown-widget/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "facet-tag");
            var el2 = dom.createTextNode("Current selection:\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createElement("b");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3, "class", "pointer");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element5 = dom.childAt(fragment, [1, 1]);
            var element6 = dom.childAt(element5, [2]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(element5, [0]), 0, 0);
            morphs[1] = dom.createElementMorph(element6);
            morphs[2] = dom.createMorphAt(element6, 0, 0);
            return morphs;
          },
          statements: [["content", "selectedType", ["loc", [null, [5, 18], [5, 34]]], 0, 0, 0, 0], ["element", "action", ["removeFilter", ["get", "item.facetDashParameter", ["loc", [null, [5, 85], [5, 108]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 61], [5, 110]]], 0, 0], ["inline", "fa-icon", ["close"], [], ["loc", [null, [5, 111], [5, 130]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 12
              },
              "end": {
                "line": 12,
                "column": 12
              }
            },
            "moduleName": "analytics-dashboard/components/dropdown-widget/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            dom.setAttribute(el1, "value", "");
            dom.setAttribute(el1, "selected", "selected");
            var el2 = dom.createTextNode("Select Type");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 12
              },
              "end": {
                "line": 15,
                "column": 12
              }
            },
            "moduleName": "analytics-dashboard/components/dropdown-widget/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element4, 'value');
            morphs[1] = dom.createAttrMorph(element4, 'selected');
            morphs[2] = dom.createMorphAt(element4, 0, 0);
            return morphs;
          },
          statements: [["attribute", "value", ["get", "type.key", ["loc", [null, [14, 32], [14, 40]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selected", ["subexpr", "if", [["subexpr", "eq", [["get", "selectedType", ["loc", [null, [14, 61], [14, 73]]], 0, 0, 0, 0], ["get", "type.key", ["loc", [null, [14, 74], [14, 82]]], 0, 0, 0, 0]], [], ["loc", [null, [14, 57], [14, 83]]], 0, 0], true], [], ["loc", [null, [null, null], [14, 90]]], 0, 0], 0, 0, 0, 0], ["content", "type.key", ["loc", [null, [14, 91], [14, 103]]], 0, 0, 0, 0]],
          locals: ["type"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/components/dropdown-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-md");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("select");
          dom.setAttribute(el2, "class", "form-control");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [1]);
          var element8 = dom.childAt(element7, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element7, 1, 1);
          morphs[1] = dom.createAttrMorph(element8, 'onchange');
          morphs[2] = dom.createMorphAt(element8, 1, 1);
          morphs[3] = dom.createMorphAt(element8, 2, 2);
          return morphs;
        },
        statements: [["block", "if", [["get", "selectedType", ["loc", [null, [3, 12], [3, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 6], [7, 13]]]], ["attribute", "onchange", ["subexpr", "action", ["applySelection"], ["value", "target.value"], ["loc", [null, [null, null], [9, 94]]], 0, 0], 0, 0, 0, 0], ["block", "unless", [["get", "selectedType", ["loc", [null, [10, 22], [10, 34]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [10, 12], [12, 23]]]], ["block", "each", [["get", "dropList", ["loc", [null, [13, 20], [13, 28]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [13, 12], [15, 21]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 22,
                "column": 6
              },
              "end": {
                "line": 26,
                "column": 6
              }
            },
            "moduleName": "analytics-dashboard/components/dropdown-widget/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "facet-tag");
            var el2 = dom.createTextNode("Current selection:\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createElement("b");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3, "class", "pointer");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1, 1]);
            var element2 = dom.childAt(element1, [2]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(element1, [0]), 0, 0);
            morphs[1] = dom.createElementMorph(element2);
            morphs[2] = dom.createMorphAt(element2, 0, 0);
            return morphs;
          },
          statements: [["content", "enteredItem", ["loc", [null, [24, 22], [24, 37]]], 0, 0, 0, 0], ["element", "action", ["removeFilter", ["get", "item.facetDashParameter", ["loc", [null, [24, 88], [24, 111]]], 0, 0, 0, 0]], [], ["loc", [null, [24, 64], [24, 113]]], 0, 0], ["inline", "fa-icon", ["close"], [], ["loc", [null, [24, 114], [24, 133]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 32,
                    "column": 22
                  },
                  "end": {
                    "line": 34,
                    "column": 22
                  }
                },
                "moduleName": "analytics-dashboard/components/dropdown-widget/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["content", "item.name", ["loc", [null, [33, 24], [33, 37]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 34,
                    "column": 22
                  },
                  "end": {
                    "line": 36,
                    "column": 22
                  }
                },
                "moduleName": "analytics-dashboard/components/dropdown-widget/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["content", "item.key", ["loc", [null, [35, 24], [35, 36]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 30,
                  "column": 14
                },
                "end": {
                  "line": 38,
                  "column": 14
                }
              },
              "moduleName": "analytics-dashboard/components/dropdown-widget/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "dropdown-search-item");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("                  ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createElementMorph(element0);
              morphs[1] = dom.createMorphAt(element0, 1, 1);
              return morphs;
            },
            statements: [["element", "action", ["applySelection", ["get", "item.key", ["loc", [null, [31, 78], [31, 86]]], 0, 0, 0, 0]], [], ["loc", [null, [31, 52], [31, 88]]], 0, 0], ["block", "if", [["get", "item.name", ["loc", [null, [32, 28], [32, 37]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [32, 22], [36, 29]]]]],
            locals: ["item"],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 28,
                "column": 6
              },
              "end": {
                "line": 40,
                "column": 6
              }
            },
            "moduleName": "analytics-dashboard/components/dropdown-widget/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "dropdown-search");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "filteredList", ["loc", [null, [30, 22], [30, 34]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [30, 14], [38, 23]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 0
            },
            "end": {
              "line": 42,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/components/dropdown-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-md");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element3, 1, 1);
          morphs[1] = dom.createMorphAt(element3, 3, 3);
          morphs[2] = dom.createMorphAt(element3, 5, 5);
          return morphs;
        },
        statements: [["block", "if", [["get", "enteredItem", ["loc", [null, [22, 12], [22, 23]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [22, 6], [26, 13]]]], ["inline", "input", [], ["class", "form-control", "value", ["subexpr", "@mut", [["get", "filterText", ["loc", [null, [27, 41], [27, 51]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Type to filter", "key-up", "debouncedfilterVisible", "key-down", "resetDebounce", "focus-in", "showList"], ["loc", [null, [27, 6], [27, 159]]], 0, 0], ["block", "if", [["get", "showList", ["loc", [null, [28, 12], [28, 20]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [28, 6], [40, 13]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 43,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/dropdown-widget/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "eq", [["get", "mode", ["loc", [null, [1, 10], [1, 14]]], 0, 0, 0, 0], "dropdown"], [], ["loc", [null, [1, 6], [1, 26]]], 0, 0]], [], 0, null, ["loc", [null, [1, 0], [18, 7]]]], ["block", "if", [["subexpr", "eq", [["get", "mode", ["loc", [null, [20, 10], [20, 14]]], 0, 0, 0, 0], "search"], [], ["loc", [null, [20, 6], [20, 24]]], 0, 0]], [], 1, null, ["loc", [null, [20, 0], [42, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('analytics-dashboard/components/dropzone-widget/component', ['exports', 'ember-osf/components/dropzone-widget/component'], function (exports, _emberOsfComponentsDropzoneWidgetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsDropzoneWidgetComponent['default'];
    }
  });
});
define('analytics-dashboard/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('analytics-dashboard/components/eosf-project-nav/component', ['exports', 'ember-osf/components/eosf-project-nav/component'], function (exports, _emberOsfComponentsEosfProjectNavComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsEosfProjectNavComponent['default'];
    }
  });
});
define('analytics-dashboard/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('analytics-dashboard/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('analytics-dashboard/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('analytics-dashboard/components/file-browser-icon/component', ['exports', 'ember-osf/components/file-browser-icon/component'], function (exports, _emberOsfComponentsFileBrowserIconComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileBrowserIconComponent['default'];
    }
  });
});
define('analytics-dashboard/components/file-browser-item/component', ['exports', 'ember-osf/components/file-browser-item/component'], function (exports, _emberOsfComponentsFileBrowserItemComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileBrowserItemComponent['default'];
    }
  });
});
define('analytics-dashboard/components/file-browser-tree/component', ['exports', 'ember-osf/components/file-browser-tree/component'], function (exports, _emberOsfComponentsFileBrowserTreeComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileBrowserTreeComponent['default'];
    }
  });
});
define('analytics-dashboard/components/file-browser/component', ['exports', 'ember-osf/components/file-browser/component'], function (exports, _emberOsfComponentsFileBrowserComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileBrowserComponent['default'];
    }
  });
});
define('analytics-dashboard/components/file-chooser/component', ['exports', 'ember-osf/components/file-chooser/component'], function (exports, _emberOsfComponentsFileChooserComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileChooserComponent['default'];
    }
  });
});
define('analytics-dashboard/components/file-renderer/component', ['exports', 'ember-osf/components/file-renderer/component'], function (exports, _emberOsfComponentsFileRendererComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileRendererComponent['default'];
    }
  });
});
define('analytics-dashboard/components/file-version/component', ['exports', 'ember-osf/components/file-version/component'], function (exports, _emberOsfComponentsFileVersionComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileVersionComponent['default'];
    }
  });
});
define('analytics-dashboard/components/file-widget/component', ['exports', 'ember-osf/components/file-widget/component'], function (exports, _emberOsfComponentsFileWidgetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsFileWidgetComponent['default'];
    }
  });
});
define('analytics-dashboard/components/filter-plaques/component', ['exports', 'ember'], function (exports, _ember) {

  var ID_FILTERS = ['contributors', 'funders', 'publishers'];

  exports['default'] = _ember['default'].Component.extend({
    filters: null,
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      var parameters = this.get('parameters');
      var filters = Object.keys(parameters).filter(function (key) {
        return key !== "page";
      }).map(function (key) {
        return {
          "key": key,
          "value": parameters[key]
        };
      });

      // Find and format all query params that use ids for the value
      var ids = filters.filter(function (item) {
        return ID_FILTERS.indexOf(item.key) !== -1;
      }).map(function (param) {
        return { key: param.value };
      });

      // Fetch display names
      if (ids.length > 0) {
        this.fetchAgentDetails(ids).then(function (data) {
          var displayFilters = filters.map(function (filter) {
            var value = filter.value;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var agentData = _step.value;

                if (value === agentData.id) {
                  value = agentData.name;
                  break;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return { key: filter.key, value: value };
          });
          _this.set('filters', displayFilters);
        });
      }
    },

    fetchAgentDetails: function fetchAgentDetails(agentList) {
      var agent_details;
      return regeneratorRuntime.async(function fetchAgentDetails$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            context$1$0.next = 2;
            return regeneratorRuntime.awrap(_ember['default'].$.ajax({
              url: 'https://dev-labs.cos.io/bulk_get_agents',
              crossDomain: true,
              data: JSON.stringify(agentList),
              type: 'POST',
              contentType: 'application/json'
            }));

          case 2:
            agent_details = context$1$0.sent;
            return context$1$0.abrupt('return', JSON.parse(agent_details));

          case 4:
          case 'end':
            return context$1$0.stop();
        }
      }, null, this);
    },

    actions: {

      removeFilter: function removeFilter(filter) {
        var queryParams = {};
        queryParams[filter.key] = undefined;
        queryParams['page'] = undefined;
        this.attrs.transitionToFacet("search", queryParams);
      },

      transitionToFacet: function transitionToFacet(parameter, parameterValue) {
        var queryParams = {};
        queryParams[parameter] = parameterValue;
        this.attrs.transitionToFacet("search", queryParams);
      }

    }

  });
});
define("analytics-dashboard/components/filter-plaques/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 4,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/filter-plaques/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "filter-plaque");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "filter-plaque-type");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "pointer");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [4]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [0]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [2]), 0, 0);
          morphs[2] = dom.createElementMorph(element1);
          morphs[3] = dom.createMorphAt(element1, 0, 0);
          return morphs;
        },
        statements: [["content", "filter.key", ["loc", [null, [3, 68], [3, 82]]], 0, 0, 0, 0], ["content", "filter.value", ["loc", [null, [3, 119], [3, 135]]], 0, 0, 0, 0], ["element", "action", ["removeFilter", ["get", "filter", ["loc", [null, [3, 212], [3, 218]]], 0, 0, 0, 0]], [], ["loc", [null, [3, 188], [3, 220]]], 0, 0], ["inline", "fa-icon", ["close"], [], ["loc", [null, [3, 221], [3, 240]]], 0, 0]],
        locals: ["filter"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/filter-plaques/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "widget-body clearfix filter-plaques-container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "filters", ["loc", [null, [2, 12], [2, 19]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 4], [4, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('analytics-dashboard/components/license-list/component', ['exports', 'ember-osf/components/license-list/component'], function (exports, _emberOsfComponentsLicenseListComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsLicenseListComponent['default'];
    }
  });
});
define('analytics-dashboard/components/license-picker/component', ['exports', 'ember-osf/components/license-picker/component'], function (exports, _emberOsfComponentsLicensePickerComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsLicensePickerComponent['default'];
    }
  });
});
define('analytics-dashboard/components/list-widget/component', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        data: [],
        init: function init() {
            this._super.apply(this, arguments);
            if (this.get('chartType') === 'recentlyAdded') {
                var data = this.get('data.hits.hits').map(function (hits, index) {
                    return {
                        number: index + 1,
                        name: hits._source.title,
                        id: hits._source.id
                    };
                });
                this.set('data', data);
            } else if (this.get('chartType') == 'highlightedCollections') {
                data = [{
                    number: 1,
                    name: 'CAVEcam Virtual Reality Photography Collection',
                    id: '46002-874-0B4'
                }, {
                    number: 2,
                    name: 'Data from: Carbonic Anhydrases, EPF2 and a Novel Protease Mediate CO2 Control of Stomatal Development',
                    id: '4619D-B54-28E'
                }, {
                    number: 3,
                    name: 'Heavy Metals in the Ocean Insect, Halobates',
                    id: '4612B-AF0-7FB'
                }, {
                    number: 4,
                    name: 'Keith Rayner Eye Movements in Reading Data Collection',
                    id: '4601B-68A-696'
                }, {
                    number: 5,
                    name: 'Stack Gas and Plume Aerosol Measurements from Renewable Diesel and Ultra Low Sulfur Diesel in At-Sea Operation of Research Vessel Robert Gordon Sproul',
                    id: '4607A-27C-FB9'
                }];
                this.set('data', data);
            } else if (this.get('chartType') === 'topContributors') {
                this.fetchAgentDetails(this.get('aggregations.listWidgetData.buckets'));
            } else {
                this.processData(this.get('aggregations.listWidgetData.buckets'));
            }
        },
        processData: function processData(data) {
            this.set('data', data.map(function (raw_datum) {
                return {
                    number: raw_datum.doc_count,
                    name: raw_datum.key
                };
            }));
        },

        fetchAgentDetails: function fetchAgentDetails(data) {
            var agent_details;
            return regeneratorRuntime.async(function fetchAgentDetails$(context$1$0) {
                while (1) switch (context$1$0.prev = context$1$0.next) {
                    case 0:
                        context$1$0.next = 2;
                        return regeneratorRuntime.awrap(_ember['default'].$.ajax({
                            url: 'https://dev-labs.cos.io/bulk_get_agents',
                            crossDomain: true,
                            data: JSON.stringify(data),
                            type: 'POST',
                            contentType: 'application/json'
                        }));

                    case 2:
                        agent_details = context$1$0.sent;

                        this.set("data", JSON.parse(agent_details));

                    case 4:
                    case 'end':
                        return context$1$0.stop();
                }
            }, null, this);
        },

        actions: {
            transitionToFacet: function transitionToFacet(item) {
                //Two different items here; one refers to the widget; one refers to the datum.
                var queryParams = {};
                var facet = this.get("item.facetDashParameter");
                var facetDash = this.get("item.facetDash");
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
            transitionToViewAll: function transitionToViewAll(item) {
                this.attrs.transitionToFacet(item.dataType, {});
            }
        }
    });
});
define("analytics-dashboard/components/list-widget/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/list-widget/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          dom.setAttribute(el1, "href", "#");
          dom.setAttribute(el1, "class", "list-widget-item");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "item-number");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "item-name");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element1, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createMorphAt(element2, 0, 0);
          morphs[2] = dom.createElementMorph(element3);
          morphs[3] = dom.createMorphAt(element3, 0, 0);
          return morphs;
        },
        statements: [["element", "action", ["transitionToFacet", ["get", "listItem", ["loc", [null, [4, 69], [4, 77]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 40], [4, 79]]], 0, 0], ["content", "listItem.number", ["loc", [null, [4, 80], [4, 99]]], 0, 0, 0, 0], ["element", "action", ["transitionToFacet", ["get", "listItem", ["loc", [null, [5, 67], [5, 75]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 38], [5, 77]]], 0, 0], ["content", "listItem.name", ["loc", [null, [5, 78], [5, 95]]], 0, 0, 0, 0]],
        locals: ["listItem"],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 4
              },
              "end": {
                "line": 14,
                "column": 4
              }
            },
            "moduleName": "analytics-dashboard/components/list-widget/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "text-right m-t-md");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2, "class", "btn btn-link text-bigger");
            var el3 = dom.createTextNode("View more");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["transitionToViewAll", ["get", "item", ["loc", [null, [12, 84], [12, 88]]], 0, 0, 0, 0]], [], ["loc", [null, [12, 53], [12, 90]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/components/list-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "unless", [["get", "item.hideViewAll", ["loc", [null, [10, 14], [10, 30]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [10, 4], [14, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/components/list-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "text-center");
          var el2 = dom.createTextNode("No results");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/list-widget/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "style", "width: 100%;");
        dom.setAttribute(el1, "class", "list-widget widget-body");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "data", ["loc", [null, [2, 12], [2, 16]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 4], [7, 13]]]], ["block", "if", [["get", "data.length", ["loc", [null, [9, 6], [9, 17]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [9, 0], [17, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define('analytics-dashboard/components/navbar-auth-dropdown/component', ['exports', 'ember-osf/components/navbar-auth-dropdown/component'], function (exports, _emberOsfComponentsNavbarAuthDropdownComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsNavbarAuthDropdownComponent['default'];
    }
  });
});
define('analytics-dashboard/components/number-widget/component', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        total: null,
        settings: {
            fontSize: 3,
            fontColor: '#F44336',
            isLink: true,
            pre: '',
            post: ''
        },
        init: function init() {
            this._super.apply(this, arguments);
            var settings = this.get('widgetSettings');
            if (settings) {
                this.set('settings', _ember['default'].assign(this.get('settings'), settings));
            }
        },

        didReceiveAttrs: function didReceiveAttrs() {
            this._super.apply(this, arguments);
            var unformatted = this.total || 0;
            this.set('total', unformatted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        },

        actions: {

            transitionToFacet: function transitionToFacet() {
                //Two different items here; one refers to the widget; one refers to the datum.
                if (!this.get('settings.isLink')) {
                    return;
                }
                var queryParams = {};
                var facet = this.get("item.facetDashParameter");
                var facetDash = this.get("item.facetDash");
                if (facetDash === "url" && item.url) {
                    window.location.href = item.url;
                    return;
                }
                if (facetDash) {
                    this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
                }
            }

        }

    });
});
define("analytics-dashboard/components/number-widget/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/number-widget/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "widget-body clearfix");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element0, 'style');
        morphs[2] = dom.createElementMorph(element1);
        morphs[3] = dom.createMorphAt(element1, 0, 0);
        morphs[4] = dom.createMorphAt(element1, 1, 1);
        morphs[5] = dom.createMorphAt(element1, 2, 2);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["widget-number size-", ["get", "settings.fontSize", ["loc", [null, [2, 37], [2, 54]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "settings.isLink", ["loc", [null, [2, 62], [2, 77]]], 0, 0, 0, 0], "is-link"], [], ["loc", [null, [2, 57], [2, 89]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "style", ["concat", ["color:", ["get", "settings.fontColor", ["loc", [null, [2, 106], [2, 124]]], 0, 0, 0, 0], ";"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["transitionToFacet"], [], ["loc", [null, [3, 14], [3, 44]]], 0, 0], ["content", "settings.pre", ["loc", [null, [3, 45], [3, 61]]], 0, 0, 0, 0], ["content", "total", ["loc", [null, [3, 61], [3, 70]]], 0, 0, 0, 0], ["content", "settings.post", ["loc", [null, [3, 70], [3, 87]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('analytics-dashboard/components/oauth-popup/component', ['exports', 'ember-osf/components/oauth-popup/component'], function (exports, _emberOsfComponentsOauthPopupComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOauthPopupComponent['default'];
        }
    });
});
define('analytics-dashboard/components/object-bin', ['exports', 'ember-drag-drop/components/object-bin'], function (exports, _emberDragDropComponentsObjectBin) {
  exports['default'] = _emberDragDropComponentsObjectBin['default'];
});
define('analytics-dashboard/components/object-detail-widget/component', ['exports', 'ember', 'analytics-dashboard/config/environment', 'npm:is-url'], function (exports, _ember, _analyticsDashboardConfigEnvironment, _npmIsUrl) {

    var isHTTPURL = function isHTTPURL(value) {
        var httpURL = /^https?/;
        return httpURL.test(value.trim()) && (0, _npmIsUrl['default'])(value);
    };

    exports['default'] = _ember['default'].Component.extend({

        showJSON: false,
        showAllContrib: false,
        hasMoreContrib: false,

        objectData: _ember['default'].computed(function () {
            return this.get('data');
        }),

        affiliations: _ember['default'].computed(function () {
            return Array.from(new Set(this.get('data._source.affiliations')));
        }),

        dataAsString: _ember['default'].computed(function () {
            var data = this.get('data');

            if (!library) var library = {};

            library.json = {
                replacer: function replacer(match, pIndent, pKey, pVal, pEnd) {
                    var key = '<span class=json-key>';
                    var val = '<span class=json-value>';
                    var str = '<span class=json-string>';
                    var r = pIndent || '';
                    if (pKey) r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
                    if (pVal) r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
                    return r + (pEnd || '');
                },
                prettyPrint: function prettyPrint(obj) {
                    var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
                    return JSON.stringify(obj, null, 3).replace(/&/g, '&amp;').replace(/\\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(jsonLine, library.json.replacer);
                }
            };

            return library.json.prettyPrint(data);
            //return JSON.stringify(data, null, '    ');
        }),

        identifierURLs: _ember['default'].computed('objectData._source.identifiers', function () {
            return this.get('objectData')._source.identifiers.filter(function (id) {
                return isHTTPURL(id);
            });
        }),

        dataUrl: _ember['default'].computed(function () {
            // Use the doi url to link to the resource, otherwise use the first http url
            var data = this.get('objectData');
            var identifiers = data._source.identifiers;
            var httpUrl = null;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = identifiers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var id = _step.value;

                    if (id.includes('doi')) {
                        return id;
                    } else if (!httpUrl && id.includes('http')) {
                        httpUrl = id;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return httpUrl;
        }),

        funders: _ember['default'].computed('objectData._source.lists.funders', function () {
            var funders = this.get('objectData')._source.lists.funders;
            var currency = '$';
            if (funders) {
                return funders.map(function (funder) {
                    var total = funder.awards.reduce(function (total, award) {
                        return total + award.amount;
                    }, 0);
                    var formattedTotal = total > 0 ? total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null;
                    return { name: funder.name, awardTotal: formattedTotal, currency: currency };
                });
            }
        }),

        topContrib: _ember['default'].computed('objectData._source.lists.contributors', function () {
            var topContrib = this.get('objectData')._source.lists.contributors;
            if (topContrib.length > 10) {
                this.hasMoreContrib = true;
            }
            return topContrib.slice(0, 10);
        }),

        init: function init() {
            this._super.apply(this, arguments);
            var data = this.processData(this.get('data'));
            this.set('data', data);
        },

        processData: function processData(data) {
            var datum = data.hits.hits[0];
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            options.timeZone = 'UTC';
            if (datum._source.date_modified) {
                //keep
                datum["_source"]["date_modified"] = new Date(datum["_source"]["date_modified"]).toLocaleDateString('en-US', options);
            }
            if (datum._source.date_published) {
                //keep
                datum["_source"]["date_published"] = new Date(datum["_source"]["date_published"]).toLocaleDateString('en-US', options);
            }
            if (datum._source.date_updated) {
                //keep
                datum["_source"]["date_updated"] = new Date(datum["_source"]["date_updated"]).toLocaleDateString('en-US', options);
            }
            return datum;
        },

        actions: {
            transitionToFacet: function transitionToFacet(facetDash, parameterName, parameter) {
                var queryParams = {
                    id: undefined
                };
                queryParams[parameterName] = parameter;
                this.attrs.transitionToFacet(facetDash, queryParams);
            },

            transitionToSHARE: function transitionToSHARE(item) {
                window.location.href = item.url;
            },

            transitionToViewAll: function transitionToViewAll(item) {
                this.attrs.transitionToFacet(item.dataType, item);
            }

        }

    });
});
define("analytics-dashboard/components/object-detail-widget/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 8
            },
            "end": {
              "line": 6,
              "column": 8
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "btn btn-md object-detail-button");
          var el2 = dom.createTextNode("Access Resource");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element9 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element9, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "dataUrl", ["loc", [null, [5, 59], [5, 66]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 16
              },
              "end": {
                "line": 18,
                "column": 16
              }
            },
            "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "publisher", ["loc", [null, [17, 24], [17, 37]]], 0, 0, 0, 0]],
          locals: ["publisher"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 4
            },
            "end": {
              "line": 21,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Data Providers");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "objectData._source.publishers", ["loc", [null, [16, 24], [16, 53]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [16, 16], [18, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 4
            },
            "end": {
              "line": 25,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Description");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "objectData._source.description", ["loc", [null, [24, 33], [24, 67]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 12
              },
              "end": {
                "line": 33,
                "column": 12
              }
            },
            "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "class", "pointer");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element8 = dom.childAt(fragment, [1, 0]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element8);
            morphs[1] = dom.createMorphAt(element8, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["transitionToFacet", "search", "contributors", ["get", "contributor.id", ["loc", [null, [32, 92], [32, 106]]], 0, 0, 0, 0]], [], ["loc", [null, [32, 39], [32, 108]]], 0, 0], ["content", "contributor.name", ["loc", [null, [32, 109], [32, 129]]], 0, 0, 0, 0]],
          locals: ["contributor"],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 35,
                "column": 4
              },
              "end": {
                "line": 37,
                "column": 4
              }
            },
            "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "class", "toggleContrib");
            var el2 = dom.createTextNode("Hide    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element7 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element7);
            morphs[1] = dom.createMorphAt(element7, 1, 1);
            return morphs;
          },
          statements: [["element", "action", [["get", "toggleProperty", ["loc", [null, [36, 16], [36, 30]]], 0, 0, 0, 0], "showAllContrib"], [], ["loc", [null, [36, 7], [36, 49]]], 0, 0], ["inline", "fa-icon", ["chevron-up"], [], ["loc", [null, [36, 100], [36, 124]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 4
            },
            "end": {
              "line": 38,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Contributors");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "objectData._source.lists.contributors", ["loc", [null, [31, 20], [31, 57]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [31, 12], [33, 21]]]], ["block", "if", [["get", "hasMoreContrib", ["loc", [null, [35, 10], [35, 24]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [35, 4], [37, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 41,
                "column": 12
              },
              "end": {
                "line": 43,
                "column": 12
              }
            },
            "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "class", "pointer");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element6 = dom.childAt(fragment, [1, 0]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element6);
            morphs[1] = dom.createMorphAt(element6, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["transitionToFacet", "search", "contributors", ["get", "contributor.id", ["loc", [null, [42, 92], [42, 106]]], 0, 0, 0, 0]], [], ["loc", [null, [42, 39], [42, 108]]], 0, 0], ["content", "contributor.name", ["loc", [null, [42, 109], [42, 129]]], 0, 0, 0, 0]],
          locals: ["contributor"],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 45,
                "column": 4
              },
              "end": {
                "line": 47,
                "column": 4
              }
            },
            "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "class", "toggleContrib");
            var el2 = dom.createTextNode("View More    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element5 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element5);
            morphs[1] = dom.createMorphAt(element5, 1, 1);
            return morphs;
          },
          statements: [["element", "action", [["get", "toggleProperty", ["loc", [null, [46, 16], [46, 30]]], 0, 0, 0, 0], "showAllContrib"], [], ["loc", [null, [46, 7], [46, 49]]], 0, 0], ["inline", "fa-icon", ["chevron-down"], [], ["loc", [null, [46, 105], [46, 131]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 38,
              "column": 4
            },
            "end": {
              "line": 48,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Contributors");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "topContrib", ["loc", [null, [41, 20], [41, 30]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [41, 12], [43, 21]]]], ["block", "if", [["get", "hasMoreContrib", ["loc", [null, [45, 10], [45, 24]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [45, 4], [47, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 55,
                "column": 16
              },
              "end": {
                "line": 57,
                "column": 16
              }
            },
            "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "affiliation", ["loc", [null, [56, 22], [56, 37]]], 0, 0, 0, 0]],
          locals: ["affiliation"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 51,
              "column": 4
            },
            "end": {
              "line": 60,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Affiliations");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "affiliations", ["loc", [null, [55, 24], [55, 36]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [55, 16], [57, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child6 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 68,
                  "column": 20
                },
                "end": {
                  "line": 70,
                  "column": 20
                }
              },
              "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                      : ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
              return morphs;
            },
            statements: [["content", "funder.currency", ["loc", [null, [69, 24], [69, 43]]], 0, 0, 0, 0], ["content", "funder.awardTotal", ["loc", [null, [69, 43], [69, 64]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 66,
                "column": 16
              },
              "end": {
                "line": 72,
                "column": 16
              }
            },
            "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("                  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element4, 0, 0);
            morphs[1] = dom.createMorphAt(element4, 2, 2);
            return morphs;
          },
          statements: [["content", "funder.name", ["loc", [null, [67, 22], [67, 37]]], 0, 0, 0, 0], ["block", "if", [["get", "funder.awardTotal", ["loc", [null, [68, 26], [68, 43]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [68, 20], [70, 27]]]]],
          locals: ["funder"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 62,
              "column": 4
            },
            "end": {
              "line": 75,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Funders");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "funders", ["loc", [null, [66, 24], [66, 31]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [66, 16], [72, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child7 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 79,
                "column": 12
              },
              "end": {
                "line": 81,
                "column": 12
              }
            },
            "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "object-tag");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element3);
            morphs[1] = dom.createMorphAt(element3, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["transitionToFacet", "search", "tags", ["get", "tag", ["loc", [null, [80, 86], [80, 89]]], 0, 0, 0, 0], true], ["on", "click"], ["loc", [null, [80, 41], [80, 107]]], 0, 0], ["content", "tag", ["loc", [null, [80, 109], [80, 116]]], 0, 0, 0, 0]],
          locals: ["tag"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 77,
              "column": 4
            },
            "end": {
              "line": 83,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Tags");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 2, 2);
          return morphs;
        },
        statements: [["block", "each", [["get", "objectData._source.tags", ["loc", [null, [79, 20], [79, 43]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [79, 12], [81, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child8 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 89,
                "column": 16
              },
              "end": {
                "line": 93,
                "column": 16
              }
            },
            "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n                        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element2, 'href');
            morphs[1] = dom.createMorphAt(element2, 0, 0);
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "identifier", ["loc", [null, [91, 35], [91, 45]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "identifier", ["loc", [null, [91, 49], [91, 63]]], 0, 0, 0, 0]],
          locals: ["identifier"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 85,
              "column": 4
            },
            "end": {
              "line": 96,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Identifiers");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "identifierURLs", ["loc", [null, [89, 24], [89, 38]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [89, 16], [93, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child9 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 102,
                "column": 16
              },
              "end": {
                "line": 104,
                "column": 16
              }
            },
            "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "source", ["loc", [null, [103, 24], [103, 34]]], 0, 0, 0, 0]],
          locals: ["source"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 98,
              "column": 4
            },
            "end": {
              "line": 107,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Sources");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "objectData._source.sources", ["loc", [null, [102, 24], [102, 50]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [102, 16], [104, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child10 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 112,
              "column": 12
            },
            "end": {
              "line": 114,
              "column": 13
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("strong");
          var el3 = dom.createTextNode("First published by Source:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 2, 2);
          return morphs;
        },
        statements: [["content", "objectData._source.date_published", ["loc", [null, [113, 64], [113, 101]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child11 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 115,
              "column": 13
            },
            "end": {
              "line": 117,
              "column": 13
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("strong");
          var el3 = dom.createTextNode("Last updated by Source:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 2, 2);
          return morphs;
        },
        statements: [["content", "objectData._source.date_updated", ["loc", [null, [116, 61], [116, 96]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child12 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 118,
              "column": 13
            },
            "end": {
              "line": 120,
              "column": 12
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("strong");
          var el3 = dom.createTextNode("Last harvested by SHARE:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 2, 2);
          return morphs;
        },
        statements: [["content", "objectData._source.date_modified", ["loc", [null, [119, 62], [119, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child13 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 125,
              "column": 4
            },
            "end": {
              "line": 128,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "pointer");
          var el2 = dom.createTextNode("Hide Raw Data    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createUnsafeMorphAt(dom.childAt(fragment, [3]), 0, 0);
          return morphs;
        },
        statements: [["element", "action", [["get", "toggleProperty", ["loc", [null, [126, 21], [126, 35]]], 0, 0, 0, 0], "showJSON"], [], ["loc", [null, [126, 12], [126, 48]]], 0, 0], ["inline", "fa-icon", ["chevron-up"], [], ["loc", [null, [126, 102], [126, 126]]], 0, 0], ["content", "dataAsString", ["loc", [null, [127, 13], [127, 31]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child14 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 128,
              "column": 4
            },
            "end": {
              "line": 130,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "pointer");
          var el2 = dom.createTextNode("View Raw Data    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["element", "action", [["get", "toggleProperty", ["loc", [null, [129, 21], [129, 35]]], 0, 0, 0, 0], "showJSON"], [], ["loc", [null, [129, 12], [129, 48]]], 0, 0], ["inline", "fa-icon", ["chevron-down"], [], ["loc", [null, [129, 102], [129, 128]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 133,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/object-detail-widget/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "object-detail");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Resource Type");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Dates");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element10 = dom.childAt(fragment, [0]);
        var element11 = dom.childAt(element10, [1]);
        var element12 = dom.childAt(element10, [23, 3]);
        var morphs = new Array(15);
        morphs[0] = dom.createUnsafeMorphAt(element11, 1, 1);
        morphs[1] = dom.createMorphAt(element11, 4, 4);
        morphs[2] = dom.createMorphAt(dom.childAt(element10, [5, 0]), 0, 0);
        morphs[3] = dom.createMorphAt(element10, 7, 7);
        morphs[4] = dom.createMorphAt(element10, 9, 9);
        morphs[5] = dom.createMorphAt(dom.childAt(element10, [11]), 1, 1);
        morphs[6] = dom.createMorphAt(element10, 13, 13);
        morphs[7] = dom.createMorphAt(element10, 15, 15);
        morphs[8] = dom.createMorphAt(element10, 17, 17);
        morphs[9] = dom.createMorphAt(element10, 19, 19);
        morphs[10] = dom.createMorphAt(element10, 21, 21);
        morphs[11] = dom.createMorphAt(element12, 1, 1);
        morphs[12] = dom.createMorphAt(element12, 2, 2);
        morphs[13] = dom.createMorphAt(element12, 3, 3);
        morphs[14] = dom.createMorphAt(element10, 25, 25);
        return morphs;
      },
      statements: [["content", "objectData._source.title", ["loc", [null, [3, 8], [3, 38]]], 0, 0, 0, 0], ["block", "if", [["get", "dataUrl", ["loc", [null, [4, 14], [4, 21]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 8], [6, 15]]]], ["content", "objectData._source.type", ["loc", [null, [10, 12], [10, 39]]], 0, 0, 0, 0], ["block", "if", [["get", "objectData._source.publishers", ["loc", [null, [12, 10], [12, 39]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [12, 4], [21, 11]]]], ["block", "if", [["get", "objectData._source.description", ["loc", [null, [23, 10], [23, 40]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [23, 4], [25, 11]]]], ["block", "if", [["get", "showAllContrib", ["loc", [null, [28, 10], [28, 24]]], 0, 0, 0, 0]], [], 3, 4, ["loc", [null, [28, 4], [48, 11]]]], ["block", "if", [["get", "affiliations", ["loc", [null, [51, 10], [51, 22]]], 0, 0, 0, 0]], [], 5, null, ["loc", [null, [51, 4], [60, 11]]]], ["block", "if", [["get", "funders", ["loc", [null, [62, 10], [62, 17]]], 0, 0, 0, 0]], [], 6, null, ["loc", [null, [62, 4], [75, 11]]]], ["block", "if", [["get", "objectData._source.tags", ["loc", [null, [77, 10], [77, 33]]], 0, 0, 0, 0]], [], 7, null, ["loc", [null, [77, 4], [83, 11]]]], ["block", "if", [["get", "identifierURLs", ["loc", [null, [85, 10], [85, 24]]], 0, 0, 0, 0]], [], 8, null, ["loc", [null, [85, 4], [96, 11]]]], ["block", "if", [["get", "objectData._source.sources", ["loc", [null, [98, 10], [98, 36]]], 0, 0, 0, 0]], [], 9, null, ["loc", [null, [98, 4], [107, 11]]]], ["block", "if", [["get", "objectData._source.date_published", ["loc", [null, [112, 18], [112, 51]]], 0, 0, 0, 0]], [], 10, null, ["loc", [null, [112, 12], [114, 20]]]], ["block", "if", [["get", "objectData._source.date_updated", ["loc", [null, [115, 19], [115, 50]]], 0, 0, 0, 0]], [], 11, null, ["loc", [null, [115, 13], [117, 20]]]], ["block", "if", [["get", "objectData._source.date_modified", ["loc", [null, [118, 19], [118, 51]]], 0, 0, 0, 0]], [], 12, null, ["loc", [null, [118, 13], [120, 19]]]], ["block", "if", [["get", "showJSON", ["loc", [null, [125, 10], [125, 18]]], 0, 0, 0, 0]], [], 13, 14, ["loc", [null, [125, 4], [130, 11]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11, child12, child13, child14]
    };
  })());
});
define('analytics-dashboard/components/osf-copyright/component', ['exports', 'ember-osf/components/osf-copyright/component'], function (exports, _emberOsfComponentsOsfCopyrightComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOsfCopyrightComponent['default'];
        }
    });
});
define('analytics-dashboard/components/osf-footer/component', ['exports', 'ember-osf/components/osf-footer/component'], function (exports, _emberOsfComponentsOsfFooterComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOsfFooterComponent['default'];
        }
    });
});
define('analytics-dashboard/components/osf-mode-footer/component', ['exports', 'ember-osf/components/osf-mode-footer/component'], function (exports, _emberOsfComponentsOsfModeFooterComponent) {
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
            return _emberOsfComponentsOsfModeFooterComponent['default'];
        }
    });
});
define('analytics-dashboard/components/osf-navbar/component', ['exports', 'ember-osf/components/osf-navbar/component'], function (exports, _emberOsfComponentsOsfNavbarComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsOsfNavbarComponent['default'];
    }
  });
});
define('analytics-dashboard/components/osf-paginator/component', ['exports', 'ember-osf/components/osf-paginator/component'], function (exports, _emberOsfComponentsOsfPaginatorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsOsfPaginatorComponent['default'];
    }
  });
});
define('analytics-dashboard/components/pagination-control/component', ['exports', 'ember-osf/components/pagination-control/component'], function (exports, _emberOsfComponentsPaginationControlComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsPaginationControlComponent['default'];
    }
  });
});
define("analytics-dashboard/components/query-widget/component", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Component.extend({

        init: function init() {
            this._super.apply(this, arguments);
            this.set("query", this.get("parameters").query);
        },

        actions: {

            transitionToFacet: function transitionToFacet(parameter) {
                var queryParams = {};
                queryParams["query"] = parameter;
                queryParams["page"] = undefined;
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }

        }

    });
});
define("analytics-dashboard/components/query-widget/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/query-widget/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "widget-body clearfix");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-group");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "input-group-btn");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "class", "btn btn-default");
        dom.setAttribute(el5, "type", "submit");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 1]), 0, 0);
        return morphs;
      },
      statements: [["element", "action", ["transitionToFacet", ["get", "query", ["loc", [null, [2, 58], [2, 63]]], 0, 0, 0, 0]], ["on", "submit"], ["loc", [null, [2, 29], [2, 77]]], 0, 0], ["inline", "input", [], ["class", "form-control", "type", "text", "value", ["subexpr", "@mut", [["get", "query", ["loc", [null, [4, 59], [4, 64]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "e.g., Ocean"], ["loc", [null, [4, 12], [4, 92]]], 0, 0], ["inline", "fa-icon", ["search"], [], ["loc", [null, [6, 62], [6, 82]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('analytics-dashboard/components/radio-button', ['exports', 'ember-radio-buttons/components/radio-button'], function (exports, _emberRadioButtonsComponentsRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonsComponentsRadioButton['default'];
    }
  });
});
define('analytics-dashboard/components/results-list/component', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        data: [],
        pagebackbtn: null,
        pagenextbtn: null,

        init: function init() {
            this._super.apply(this, arguments);
            var data = this.processData(this.get('data.hits.hits'));
            this.set('data', data);
        },
        pagebackbtn: _ember['default'].computed('page', function () {
            var page = Number(this.parameters['page']);
            if (page == 1 || !page) {
                return 'disable';
            } else {
                return null;
            }
        }),
        pagenextbtn: _ember['default'].computed('data', function () {
            if (this.get('data').length < 10) {
                return 'disable';
            } else {
                return null;
            }
        }),
        pageNumber: _ember['default'].computed('page', function () {
            var page = 'Page ' + this.get('parameters').page;
            return page;
        }),
        processData: function processData(data) {
            return data.map(function (datum) {
                var options = { year: 'numeric', month: 'long', day: 'numeric' };
                options.timeZone = 'UTC';
                if (datum._source.description) {
                    datum['description_truncated'] = datum._source.description.substring(0, 200) + '...';
                }
                if (datum._source.date) {
                    datum["_source"]["date"] = new Date(datum["_source"]["date"]).toLocaleDateString('en-US', options);
                }
                if (datum._source.date_created) {
                    datum["_source"]["date_created"] = new Date(datum["_source"]["date_created"]).toLocaleDateString('en-US', options);
                }
                if (datum._source.date_modified) {
                    datum["_source"]["date_modified"] = new Date(datum["_source"]["date_modified"]).toLocaleDateString('en-US', options);
                }
                if (datum._source.date_published) {
                    datum["_source"]["date_published"] = new Date(datum["_source"]["date_published"]).toLocaleDateString('en-US', options);
                }
                if (datum._source.date_updated) {
                    datum["_source"]["date_updated"] = new Date(datum["_source"]["date_updated"]).toLocaleDateString('en-US', options);
                }
                return datum;
            });
        },

        actions: {

            transitionToFacet: function transitionToFacet(facet_name, parameter_name, parameter_value) {
                var queryParams = {};
                queryParams[parameter_name] = parameter_value;
                this.attrs.transitionToFacet(facet_name, queryParams);
            },

            pageback: function pageback() {
                var page = Number(this.parameters["page"]);
                if (!page || --page < 1) {
                    // decrements and modifies page var before the comparison
                    page = 1;
                }
                this.attrs.transitionToFacet("search", { page: page });
            },
            pagenext: function pagenext() {
                var page = Number(this.parameters["page"]);
                if (!page) {
                    page = 2;
                } else if (++page < 1) {
                    // increments and modifies page var before the comparison
                    page = 1;
                }
                this.attrs.transitionToFacet("search", { page: page });
            }

        }

    });
});
define("analytics-dashboard/components/results-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 37
                },
                "end": {
                  "line": 21,
                  "column": 24
                }
              },
              "moduleName": "analytics-dashboard/components/results-list/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("\n                            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["content", "publisher", ["loc", [null, [20, 34], [20, 47]]], 0, 0, 0, 0]],
            locals: ["publisher"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 20
              },
              "end": {
                "line": 22,
                "column": 20
              }
            },
            "moduleName": "analytics-dashboard/components/results-list/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        Provided by: ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "each", [["get", "item._source.publishers", ["loc", [null, [19, 45], [19, 68]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [19, 37], [21, 33]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 34,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/results-list/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "style", "position: relative; clear: both;");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "style", "cursor: pointer; background-color: #eee; overflow: hidden; position: relative; margin: 0 10px;");
          dom.setAttribute(el2, "href", "#");
          dom.setAttribute(el2, "class", "list-widget-item");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "item-number");
          dom.setAttribute(el3, "style", "color: #fff; background-color: #aaa; position: absolute; left: 0; top: 0; padding: 3px 7px 3px 7px; font-size: 13px; margin: 0px;");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "item-number");
          dom.setAttribute(el3, "style", "color: #aaa; float: right; font-size: 13px;");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "item-number");
          dom.setAttribute(el3, "style", "color: #666; clear: both; padding-top: 10px;");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "style", "max-width: 700px; color: #888; padding-top: 10px; padding-bottom: 10px;");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "item-number");
          dom.setAttribute(el3, "style", "color: #aaa; float: left; clear: both; font-size: 13px;");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "item-name");
          dom.setAttribute(el3, "style", "cursor: pointer; margin-bottom: 10px; float: right; color: #aaa: padding: 3px 5px 3px 5px;");
          var el4 = dom.createTextNode("Details  ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "fa fa-angle-right");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "style", "padding: 10px; margin-bottom: 20px;");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "colspan", "4");
          dom.setAttribute(el3, "style", "padding: 8px; padding-bottom: 28px;");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1, 1]);
          var element4 = dom.childAt(element3, [12]);
          var morphs = new Array(7);
          morphs[0] = dom.createElementMorph(element3);
          morphs[1] = dom.createMorphAt(dom.childAt(element3, [1]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element3, [3]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element3, [5]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element3, [8]), 0, 0);
          morphs[5] = dom.createMorphAt(dom.childAt(element3, [10]), 1, 1);
          morphs[6] = dom.createElementMorph(element4);
          return morphs;
        },
        statements: [["element", "action", ["transitionToFacet", "objectDetail", "id", ["get", "item._source.id", ["loc", [null, [7, 203], [7, 218]]], 0, 0, 0, 0]], [], ["loc", [null, [7, 154], [7, 220]]], 0, 0], ["content", "item._source.type", ["loc", [null, [8, 179], [8, 200]]], 0, 0, 0, 0], ["content", "item._source.date", ["loc", [null, [9, 93], [9, 114]]], 0, 0, 0, 0], ["content", "item._source.title", ["loc", [null, [10, 94], [10, 116]]], 0, 0, 0, 0], ["content", "item.description_truncated", ["loc", [null, [16, 101], [16, 131]]], 0, 0, 0, 0], ["block", "if", [["get", "item._source.publishers", ["loc", [null, [18, 26], [18, 49]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [18, 20], [22, 27]]]], ["element", "action", ["transitionToFacet", "objectDetail", "id", ["get", "item._source.id", ["loc", [null, [24, 187], [24, 202]]], 0, 0, 0, 0]], [], ["loc", [null, [24, 138], [24, 204]]], 0, 0]],
        locals: ["item"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 4
            },
            "end": {
              "line": 38,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/results-list/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          dom.setAttribute(el1, "class", "text-center p-t-md");
          var el2 = dom.createTextNode("\n            No results found.\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 39,
              "column": 4
            },
            "end": {
              "line": 44,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/results-list/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "style", "text-align: center; padding: 30px;");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn btn-primary");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn btn-primary");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [5]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'disabled');
          morphs[1] = dom.createElementMorph(element1);
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createMorphAt(element0, 3, 3);
          morphs[4] = dom.createAttrMorph(element2, 'disabled');
          morphs[5] = dom.createElementMorph(element2);
          morphs[6] = dom.createMorphAt(element2, 0, 0);
          return morphs;
        },
        statements: [["attribute", "disabled", ["subexpr", "if", [["get", "pagebackbtn", ["loc", [null, [41, 59], [41, 70]]], 0, 0, 0, 0], "disabled", null], [], ["loc", [null, [null, null], [41, 88]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["pageback"], [], ["loc", [null, [41, 90], [41, 111]]], 0, 0], ["inline", "fa-icon", ["chevron-left"], [], ["loc", [null, [41, 112], [41, 138]]], 0, 0], ["content", "pageNumber", ["loc", [null, [41, 148], [41, 162]]], 0, 0, 0, 0], ["attribute", "disabled", ["subexpr", "if", [["get", "pagenextbtn", ["loc", [null, [42, 59], [42, 70]]], 0, 0, 0, 0], "disabled", null], [], ["loc", [null, [null, null], [42, 88]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["pagenext"], [], ["loc", [null, [42, 89], [42, 110]]], 0, 0], ["inline", "fa-icon", ["chevron-right"], [], ["loc", [null, [42, 111], [42, 138]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/results-list/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "list-widget widget-body");
        dom.setAttribute(el1, "style", "padding: 0;");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element5, [1, 1]), 0, 0);
        morphs[1] = dom.createMorphAt(element5, 3, 3);
        morphs[2] = dom.createMorphAt(element5, 4, 4);
        return morphs;
      },
      statements: [["content", "results.title", ["loc", [null, [3, 12], [3, 29]]], 0, 0, 0, 0], ["block", "each", [["get", "data", ["loc", [null, [5, 12], [5, 16]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [5, 4], [38, 13]]]], ["block", "if", [["get", "data.length", ["loc", [null, [39, 10], [39, 21]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [39, 4], [44, 11]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define('analytics-dashboard/components/search-dropdown/component', ['exports', 'ember-osf/components/search-dropdown/component'], function (exports, _emberOsfComponentsSearchDropdownComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsSearchDropdownComponent['default'];
    }
  });
});
define('analytics-dashboard/components/search-facet-daterange/component', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {

    var DATE_FORMAT = 'YYYY-MM-DD';

    exports['default'] = _ember['default'].Component.extend({
        state: {
            start: null,
            end: null
        },
        init: function init() {
            this._super.apply(this, arguments);
            var queryParams = this.get('parameters');
            this.set('state.start', queryParams.start || '1996-01-01');
            this.set('state.end', queryParams.end || new Date().toISOString().split('T')[0]);
        },
        didInsertElement: function didInsertElement() {
            var _this = this;

            this._super.apply(this, arguments);

            var dateRanges = {
                'Past week': [(0, _moment['default'])().subtract(1, 'week'), (0, _moment['default'])()],
                'Past month': [(0, _moment['default'])().subtract(1, 'month'), (0, _moment['default'])()],
                'Past year': [(0, _moment['default'])().subtract(1, 'year'), (0, _moment['default'])()],
                'Past decade': [(0, _moment['default'])().subtract(10, 'year'), (0, _moment['default'])()]
            };

            var picker = this.$('.date-range');
            picker.daterangepicker({
                ranges: dateRanges,
                autoUpdateInput: false,
                locale: { cancelLabel: 'Clear' }
            });

            picker.on('apply.daterangepicker', function (ev, picker) {
                _ember['default'].run(function () {
                    var start = picker.startDate;
                    var end = picker.endDate;
                    _this.send('transitionToFacet', start, end);
                });
            });

            picker.on('cancel.daterangepicker', function () {
                _ember['default'].run(function () {
                    _this.send('clear');
                });
            });

            _ember['default'].run.scheduleOnce('actions', this, function () {
                this.filterUpdated();
            });
        },

        statePrevious: [],
        changed: _ember['default'].observer('state.start', 'state.end', function () {
            var start = this.get('state.start');
            var end = this.get('state.end');
            if (start !== this.get('statePrevious.start') || end !== this.get('statePrevious.end')) {
                this.set('pickerValue', (0, _moment['default'])(start).format(DATE_FORMAT) + ' - ' + (0, _moment['default'])(end).format(DATE_FORMAT));
                this.updateFilter(start, end);
            }
        }),

        filterUpdated: _ember['default'].observer('state', function () {
            var state = this.get('state');
            if (state.start) {
                var start = (0, _moment['default'])(this.get('state.start'));
                var end = (0, _moment['default'])(this.get('state.end'));
                var picker = this.$('.date-range').data('daterangepicker');
                picker.setStartDate(start);
                picker.setEndDate(end);
                if (picker.chosenLabel && picker.chosenLabel !== 'Custom Range') {
                    this.set('pickerValue', picker.chosenLabel);
                } else {
                    this.set('pickerValue', start.format(DATE_FORMAT) + ' - ' + end.format(DATE_FORMAT));
                }
            } else {
                this.noFilter();
            }
        }),

        noFilter: function noFilter() {
            this.set('pickerValue', 'All time');
        },

        actions: {
            clear: function clear() {
                this.noFilter();
                this.set('previousState', this.get('state'));
            },
            transitionToFacet: function transitionToFacet(start, end) {
                var queryParams = {
                    start: '' + (0, _moment['default'])(start).format('YYYY-MM-DD'),
                    end: '' + (0, _moment['default'])(end).format('YYYY-MM-DD')
                };
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }
        }
    });
});
define("analytics-dashboard/components/search-facet-daterange/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/search-facet-daterange/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "p-md");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "date-range");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["inline", "fa-icon", ["calendar"], [], ["loc", [null, [3, 8], [3, 30]]], 0, 0], ["content", "pickerValue", ["loc", [null, [4, 8], [4, 23]]], 0, 0, 0, 0], ["inline", "fa-icon", ["caret-down"], ["class", "pull-right"], ["loc", [null, [5, 8], [5, 51]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('analytics-dashboard/components/select-2', ['exports', 'ember-select-2/components/select-2'], function (exports, _emberSelect2ComponentsSelect2) {
  exports['default'] = _emberSelect2ComponentsSelect2['default'];
});
/*
	This is just a proxy file requiring the component from the /addon folder and
	making it available to the dummy application!
 */
define('analytics-dashboard/components/sign-up/component', ['exports', 'ember-osf/components/sign-up/component'], function (exports, _emberOsfComponentsSignUpComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsSignUpComponent['default'];
    }
  });
});
define('analytics-dashboard/components/sortable-objects', ['exports', 'ember-drag-drop/components/sortable-objects'], function (exports, _emberDragDropComponentsSortableObjects) {
  exports['default'] = _emberDragDropComponentsSortableObjects['default'];
});
define('analytics-dashboard/components/stacked-bars/component', ['exports', 'ember'], function (exports, _ember) {

    var minLabelWidth = 90;

    exports['default'] = _ember['default'].Component.extend({
        chartSelector: '.widget-stackedBar',
        data: [],
        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'],
        calculateTotal: function calculateTotal(items) {
            var total = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var value = _step.value;

                    total += value.doc_count;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return total;
        },
        setData: function setData() {
            var _this = this;

            // Turn numbers into percentages and save to width
            var items = this.get('data.aggregations.stackedData.buckets');
            var total = this.calculateTotal(items);
            var data = items.map(function (item, index) {
                var percentage = (item.doc_count * 100 / total).toFixed(2);
                return {
                    number: item.doc_count,
                    label: item.key,
                    percentage: percentage,
                    background: _this.get('pattern')[index] || '#666666'
                };
            });
            this.set('data', data);
        },
        generateChart: function generateChart() {
            var items = this.get('data');
            var chartElement = this.$(this.element).find(this.get('chartSelector'));
            chartElement.html('');
            this.setWidths();
            for (var j = 0; j < items.length; j++) {
                var value = items[j];
                chartElement.append('<div class="stack" data-index="' + j + '" data-tooltip="' + value.label + ': ' + value.number + '&nbsp;records" style="width:' + value.width + 'px; background-color:' + value.background + ';"><span>' + value.label + ': ' + value.number + '&nbsp;records</span></div>');
            }
        },
        showHideLabel: function showHideLabel() {
            var component = this;
            var elements = this.$(this.element).find(this.get('chartSelector') + ' .stack');
            elements.map(function (index, stack) {
                var stackEl = component.$(stack);
                if (stackEl.width() < minLabelWidth) {
                    stackEl.children('span').hide();
                } else {
                    stackEl.children('span').show();
                }
            });
        },
        setWidths: function setWidths() {
            var items = this.get('data');
            var chartElementWidth = this.$(this.element).find(this.get('chartSelector')).width();
            var residualPixel = 0; // How much percentage is left after rounding down
            var topItem = null; // The item that has the highest percentage
            var topItemPercentage = 0; // The highest item Percentage
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var item = _step2.value;

                    var itemWidth = undefined;
                    var rawWidth = chartElementWidth / 100 * item.percentage;
                    if (rawWidth < 1) {
                        itemWidth = 1;
                        residualPixel -= 1 - rawWidth;
                    } else {
                        itemWidth = Math.floor(rawWidth);
                        residualPixel += rawWidth - itemWidth;
                    }
                    if (item.percentage > topItemPercentage) {
                        topItem = item;
                        topItemPercentage = item.percentage;
                    }
                    item.width = itemWidth;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            topItem.itemWidth += residualPixel; // Add all residual pixel to biggest item;
        },
        didInsertElement: function didInsertElement() {
            this.generateChart();
            var component = this;
            component.$(window).on('resize', function () {
                component.generateChart.call(component); // This is very expensive, will need to be revised for actual app
                component.showHideLabel.call(component);
            });
            component.showHideLabel.call(component);
            component.$('.stack').click(function (event) {
                var index = component.$(event.target).attr('data-index');
                var item = component.get('data')[index];
                component.send('transitionToFacet', item);
            });
        },
        init: function init() {
            this._super.apply(this, arguments);
            this.setData();
        },
        actions: {
            transitionToFacet: function transitionToFacet(item) {
                var queryParams = {};
                var facet = this.get("item.facetDashParameter");
                if (facet) {
                    queryParams[facet] = item.label;
                    this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
                } else if (item.url) {
                    window.location.href = item.url;
                }
            }
        }

    });
});
define("analytics-dashboard/components/stacked-bars/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/stacked-bars/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "widget-body clearfix p-v-lg");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "widget-stackedBar");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define('analytics-dashboard/components/tags-widget/component', ['exports', 'ember-osf/components/tags-widget/component'], function (exports, _emberOsfComponentsTagsWidgetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfComponentsTagsWidgetComponent['default'];
    }
  });
});
define('analytics-dashboard/components/text-widget/component', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        actions: {
            transitionToFacet: function transitionToFacet(parameter) {
                var queryParams = {};
                queryParams["query"] = parameter;
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }
        }
    });
});
define("analytics-dashboard/components/text-widget/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 5,
              "column": 8
            }
          },
          "moduleName": "analytics-dashboard/components/text-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-info pull-right");
          var el2 = dom.createTextNode("Read more");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["transitionToFacet"], [], ["loc", [null, [4, 52], [4, 82]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/text-widget/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'class');
        morphs[1] = dom.createUnsafeMorphAt(element2, 0, 0);
        morphs[2] = dom.createMorphAt(element2, 2, 2);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["widget-body text-widget ", ["subexpr", "if", [["get", "item.showButton", ["loc", [null, [1, 41], [1, 56]]], 0, 0, 0, 0], "summary"], [], ["loc", [null, [1, 36], [1, 68]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "item.content", ["loc", [null, [2, 9], [2, 27]]], 0, 0, 0, 0], ["block", "if", [["get", "item.showButton", ["loc", [null, [3, 14], [3, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 8], [5, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('analytics-dashboard/components/widget-adapter/component', ['exports', 'ember', 'analytics-dashboard/config/environment', 'npm:json-stable-stringify', 'analytics-dashboard/utils/date-interval'], function (exports, _ember, _analyticsDashboardConfigEnvironment, _npmJsonStableStringify, _analyticsDashboardUtilsDateInterval) {
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    //import Q from 'npm:q';
    var agg_types = [// agg_types is this array literal, reduced by the following fn

    //
    // Average Aggregation
    // *******************
    {
        'elastic_name': 'avg',
        'pretty_name': 'Average',
        'description': 'A single-value metrics aggregation that computes the average of numeric values that are extracted from the aggregated documents. These values can be extracted either from specific numeric fields in the documents, or be generated by a provided script. Script support is not enabled at this time.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The name of the field to calculate the average over',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default. Documents without a value at \'field\' will be placed into this bucket',
            'isValid': function isValid() {
                return true;
            }
        }]
    },

    //
    // Cardinality Aggregation
    // ***********************
    {
        'elastic_name': 'cardinality',
        'pretty_name': 'Cardinality',
        'description': 'A single-value metrics aggregation that calculates an approximate count of distinct values. Values can be extracted either from specific fields in the document or generated by a script. Script support is not enabled at this time.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The name of the field to calculate the cardinality of',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'precision_threshold',
            'pretty_name': 'Precision Threshold',
            'description': 'The precision_threshold options allows to trade memory for accuracy, and defines a unique count below which counts are expected to be close to accurate. Above this value, counts might become a bit more fuzzy. The maximum supported value is 40000, thresholds above this number will have the same effect as a threshold of 40000. The default values is 3000.',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default. Documents without a value at \'field\' will be placed into this bucket',
            'isValid': function isValid(value) {
                return true;
            }
        }]
    },

    //
    // Extended Stats Aggregation
    // **************************
    {
        'elastic_name': 'extended_stats',
        'pretty_name': 'Extended Stats',
        'description': 'A multi-value metrics aggregation that computes stats over numeric values extracted from the aggregated documents. These values can be extracted from specific numeric fields in the documents. The extended_stats aggregations is an extended version of the stats aggregation, where additional metrics are added such as sum_of_squares, variance, std_deviation and std_deviation_bounds.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the stats will be computed on.',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'sigma',
            'pretty_name': 'Sigma',
            'description': 'By default, the extended_stats metric will return an object called std_deviation_bounds, which provides an interval of plus/minus two standard deviations from the mean. This can be a useful way to visualize variance of your data. If you want a different boundary, for example three standard deviations, you can set sigma in the request. Sigma can be any non-negative double, meaning you can request non-integer values such as 1.5. A value of 0 is valid, but will simply return the average for both upper and lower bounds. The standard deviation and its bounds are displayed by default, but they are not always applicable to all data-sets. Your data must be normally distributed for the metrics to make sense. The statistics behind standard deviations assumes normally distributed data, so if your data is skewed heavily left or right, the value returned will be misleading.',
            'isValid': regeneratorRuntime.mark(function isValid() {
                return regeneratorRuntime.wrap(function isValid$(context$1$0) {
                    while (1) switch (context$1$0.prev = context$1$0.next) {
                        case 0:
                            return context$1$0.abrupt('return', true);

                        case 1:
                        case 'end':
                            return context$1$0.stop();
                    }
                }, isValid, this);
            })
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function isValid(value) {
                return true;
            }
        }]
    },

    //
    // Maximum Aggregation
    // **************************
    {
        'elastic_name': 'max',
        'pretty_name': 'Maximum',
        'description': 'A single-value metrics aggregation that keeps track and returns the maximum value among the numeric values extracted from the aggregated documents.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the maximum will be computed on.',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function isValid(value) {
                return true;
            }
        }]
    },

    //
    // Minimum Aggregation
    // **************************
    {
        'elastic_name': 'min',
        'pretty_name': 'Minimum',
        'description': 'A single-value metrics aggregation that keeps track and returns the minimum value among the numeric values extracted from the aggregated documents.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the minimum will be computed on.',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function isValid(value) {
                return true;
            }
        }]
    },

    //
    // Percentiles Aggregation
    // **************************
    {
        'elastic_name': 'percentiles',
        'pretty_name': 'Percentiles',
        'description': 'A multi-value metrics aggregation that calculates one or more percentiles over numeric values extracted from the aggregated documents. Percentiles show the point at which a certain percentage of observed values occur. For example, the 95th percentile is the value which is greater than 95% of the observed values. Percentiles are often used to find outliers. In normal distributions, the 0.13th and 99.87th percentiles represents three standard deviations from the mean. Any data which falls outside three standard deviations is often considered an anomaly. When a range of percentiles are retrieved, they can be used to estimate the data distribution and determine if the data is skewed, bimodal, etc.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the percentiles will be computed on.',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'percents',
            'pretty_name': 'Percents',
            'description': 'Specify just the percents we are interested in (requested percentiles must be a value between 0-100 inclusive)',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function isValid(value) {
                return true;
            }
        }]
    },

    //
    // Percentile Ranks Aggregation
    // *****************************
    {
        'elastic_name': 'percentile_ranks',
        'pretty_name': 'Percentile Ranks',
        'description': 'A multi-value metrics aggregation that calculates one or more percentiles over numeric values extracted from the aggregated documents. Percentile rank shows the percentage of observed values which are below certain value. For example, if a value is greater than or equal to 95% of the observed values it is said to be at the 95th percentile rank.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the minimum will be computed on.',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'values',
            'pretty_name': 'Values',
            'description': 'Specify just the values we are interested in',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function isValid(value) {
                return true;
            }
        }]
    },

    //
    // Stats  Aggregation
    // *****************************
    {
        'elastic_name': 'stats',
        'pretty_name': 'Stats',
        'description': 'The stats that are returned consist of: min, max, sum, count and avg.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the stats will be calculated on.',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function isValid(value) {
                return true;
            }
        }]
    },

    //
    // Sum Aggregation
    // *****************************
    {
        'elastic_name': 'sum',
        'pretty_name': 'Sum',
        'description': 'A single-value metrics aggregation that sums up numeric values that are extracted from the aggregated documents. These values can be extracted either from specific numeric fields in the documents',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents to be summed.',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function isValid(value) {
                return true;
            }
        }]
    },

    //
    // Value Count Aggregation
    // *****************************
    {
        'elastic_name': 'value_count',
        'pretty_name': 'Value Count',
        'description': 'A single-value metrics aggregation that counts the number of values that are extracted from the aggregated documents. These values can be extracted either from specific fields in the documents, or be generated by a provided script. Typically, this aggregator will be used in conjunction with other single-value aggregations. For example, when computing the avg one might be interested in the number of values the average is computed over.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents to be summed.',
            'isValid': function isValid() {
                return true;
            }
        }]
    },

    //
    // Date Histogram Aggregation
    // **************************
    {
        'elastic_name': 'date_histogram',
        'pretty_name': 'Date Histogram',
        'description': 'A multi-bucket aggregation similar to the histogram except it can only be applied on date values. Scripting is not supported at this time.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The name of the field that contains the date to build the histogram from',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'interval',
            'pretty_name': 'Interval',
            'description': 'The field setting defines the numeric field of the documents the stats will be computed on.',
            'isValid': function isValid() {
                return true;
            }
        }, {
            'elastic_name': 'offset',
            'pretty_name': 'Offset',
            'description': 'The offset parameter is used to change the start value of each bucket by the specified positive (+) or negative offset (-) duration, such as 1h for an hour, or 1M for a month.',
            'isValid': function isValid() {
                return true;
            }
        }]
    }].reduce(function (agg_list, agg_meta) {

        agg_meta['class'] = (function () {
            function _class() {
                _classCallCheck(this, _class);

                this.meta = agg_meta;
            }

            _createClass(_class, [{
                key: 'createAggregations',
                value: function createAggregations() {
                    return this.meta.options.reduce(function (aggs, agg_meta) {
                        var agg_name = agg_meta.elastic_name;
                        var agg = this[agg_name];
                        if (!agg_meta.isValid(agg)) {
                            throw agg;
                        }
                        aggs[agg_name] = agg;
                        return aggs;
                    }, {});
                }
            }]);

            return _class;
        })();

        return agg_list[agg_meta.elastic_name] = agg_meta;
    }, {});

    exports['default'] = _ember['default'].Component.extend({

        aggregations: false,
        docs: false,
        loadingData: _ember['default'].computed('data', function () {
            return !this.get('data');
        }),

        classNameBindings: ['configuring', 'picking', 'width', 'height'],

        widgetType: null,
        name: 'tobeDetermined',
        jsEngine: 'c3',
        widthSetting: 2,
        heightSetting: 2,
        height: _ember['default'].computed(function () {
            return this.get('item').height;
        }),
        width: _ember['default'].computed('widthSetting', function () {

            var new_setting = this.get('widthSetting');
            var current_setting = this.get('currentWidth');

            if (new_setting < 1) {
                new_setting = current_setting;
            }
            if (new_setting > 12) {
                new_setting = 12;
            }

            this.set('currentWidth', new_setting);

            return "col-md-" + new_setting;
        }),

        computedHeight: 200,
        computedWidth: 200,

        router: _ember['default'].inject.service('router'),
        resizedSignal: false,

        // Initialize our query parameters
        query: 'UC',
        gte: "1996-01-01",
        lte: new Date().toISOString().split('T')[0], // Set the ending date of our query to today's date, by default

        tsInterval: _ember['default'].computed('gte', 'lte', function () {
            var d1 = new Date(this.get('gte'));
            var d2 = new Date(this.get('lte'));
            return (0, _analyticsDashboardUtilsDateInterval['default'])(d1, d2);
        }),

        configuring: false,
        picking: false,

        init: function init() {
            var _this = this;

            this._super.apply(this, arguments);
            this.set('widthSetting', this.get('item').width);
            Promise.resolve(this.fetchWidgetData()).then(function () {
                return _this.applyGraphSetting();
            });
        },

        didRender: function didRender() {
            this.set('computedHeight', this.$().height());
            this.set('computedWidth', this.$().width());

            //
            //  Use a closure to hide the local variables from the
            //  global namespace
            //

            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        },

        fetchWidgetData: function fetchWidgetData() {
            var query, gte, lte, interval, item, endpoint, data;
            return regeneratorRuntime.async(function fetchWidgetData$(context$1$0) {
                while (1) switch (context$1$0.prev = context$1$0.next) {
                    case 0:
                        if (!(this.get('item').post_body === null)) {
                            context$1$0.next = 2;
                            break;
                        }

                        return context$1$0.abrupt('return');

                    case 2:
                        query = this.get('query');
                        gte = this.get('gte');
                        lte = this.get('lte');
                        interval = this.get('tsInterval');
                        item = this.get('item');
                        endpoint = 'v2/_search?request_cache=true';

                        if (item.endpoint) {
                            endpoint = '/share/search/' + item.endpoint + '/_search?request_cache=true';
                        }
                        if (item.indexVersion) {
                            endpoint += "&v=" + item.indexVersion;
                        }

                        if (this.get('item').post_body) {
                            context$1$0.next = 13;
                            break;
                        }

                        this.set('data', {});
                        return context$1$0.abrupt('return');

                    case 13:
                        context$1$0.next = 15;
                        return regeneratorRuntime.awrap(_ember['default'].$.ajax({
                            url: _analyticsDashboardConfigEnvironment['default'].apiUrl + endpoint,
                            crossDomain: true,
                            type: 'POST',
                            contentType: 'application/json',
                            data: (0, _npmJsonStableStringify['default'])(this.get('item').post_body, {
                                replacer: function replacer(key, value) {
                                    if (Array.isArray(value)) {
                                        return value.filter(Object);
                                    }
                                    return value;
                                }
                            })
                        }));

                    case 15:
                        data = context$1$0.sent;

                        this.set('data', data);
                        this.set('aggregations', data.aggregations);
                        this.set('total', data.hits.total);

                        if (item.chartType === 'relatedResearchers') {
                            this.set('total', data.aggregations.relatedContributors.value);
                        }

                        /*this.set('docs', data.hits.hits.map((hit) => {
                            let source = Ember.Object.create(hit._source);
                            let r = source.getProperties('type', 'title', 'description', 'language', 'date', 'date_created', 'date_modified', 'date_updated', 'date_published', 'tags', 'sources');
                            r.id = hit._id;
                            r.contributors = source.lists.contributors;
                            r.funders = source.lists.funders;
                            r.publishers = source.lists.publishers;
                            r.institutions = source.lists.institutions;
                            r.organizations = source.lists.organizations;
                            return r;
                        }));
                        */

                    case 20:
                    case 'end':
                        return context$1$0.stop();
                }
            }, null, this);
        },

        applyGraphSetting: function applyGraphSetting() {
            this.set('chartType', this.get('item').chartType);
            this.set('widgetType', this.get('item').widgetType);
        },

        configureQuery: function configureQuery() {},

        actions: {

            addChart: function addChart(option) {
                this.sendAction('addChart', option);
            },

            showConfig: function showConfig() {
                this.set('configuring', !this.get('configuring'));
                this.set('picking', false);
            },

            showPicker: function showPicker() {
                this.set('picking', !this.get('picking'));
                this.set('configuring', false);
            },

            changeEngine: function changeEngine(jsEngine) {
                console.log(jsEngine);
            },

            changeChart: function changeChart(chart) {
                this.set('chartType', chart);
            },

            widgetPicked: function widgetPicked(index) {
                var _this2 = this;

                var selectedWidget = this.get('widgets')[index];
                this.set('item', selectedWidget);
                console.log(this.get('item').name);
                Promise.resolve(this.fetchWidgetData()).then(function () {
                    return _this2.applyGraphSetting();
                });
            },

            removeWidget: function removeWidget() {
                this.sendAction('removeChart', this.get('item'));
            },
            configChanged: function configChanged() {
                this.set('configuring', !this.get('configuring'));
                var name = this.get('name');
                if (this.get('resizedSignal') == true) return;
                this.set('resizedSignal', true);
                this.set('configuring', false);
            },

            transitionToFacet: function transitionToFacet(dashboardName, newQueryParams) {
                var self = this;
                var queryParams = Object.keys(newQueryParams).reduce(function (acc, cur, idx, arr) {
                    acc[cur] = newQueryParams[cur];
                    return acc;
                }, this.get("parameters"));
                this.get('router').transitionTo('dashboards.dashboard', dashboardName, {
                    queryParams: queryParams
                }).then(function (route) {
                    //Ember.run.schedule('afterRender', self, function() {
                    //    let controller = route.get('controller');
                    //    Object.keys(queryParams).map((key) => {
                    //        controller.set(key, queryParams[key]);
                    //    });
                    //    controller.set('back', 'backroute');
                    //});
                    //route.refresh();
                });
            },

            saveWidget: function saveWidget() {
                console.log('saveWidget');
                var widgetType = this.get('chartType');
                var name = this.get('name');
                var jsEngine = this.get('jsEngine');
                var chartType = this.get('chartType');
                var author = "tobeDetermined";
                var width = this.get('widthSetting');
                var height = this.get('heightSetting');

                var q = this.get('q');
                var gte = this.get('gte');
                var lte = this.get('lte');
                var interval = this.get('tsInterval');
                var query = {
                    query: { bool: {
                            must: [{
                                query_string: { query: q }
                            }, {
                                range: { date: {
                                        gte: gte,
                                        lte: lte,
                                        format: "yyyy-MM-dd||yyyy"
                                    } }
                            }]
                        } },
                    from: 0,
                    aggregations: {
                        sources: {
                            terms: {
                                field: 'sources.raw',
                                size: 200
                            }
                        },
                        contributors: {
                            terms: {
                                field: 'contributors.raw',
                                size: 200
                            }
                        },
                        tags: {
                            terms: {
                                field: 'tags.raw',
                                size: 200
                            }
                        },
                        articles_over_time: {
                            date_histogram: {
                                field: 'date',
                                interval: interval,
                                format: 'yyyy-MM-dd'
                            },
                            aggregations: {
                                arttype: { terms: { field: 'type' } }
                            }
                        }
                    }
                };
                var settings = { jsEngine: jsEngine, chartType: chartType };
                var information = {
                    name: name,
                    width: width,
                    height: height,
                    query: query,
                    settings: settings
                };

                this.sendAction('dashboardSaveWidget', information);
            }

        }

    });
});
define("analytics-dashboard/components/widget-adapter/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 46,
              "column": 12
            },
            "end": {
              "line": 48,
              "column": 12
            }
          },
          "moduleName": "analytics-dashboard/components/widget-adapter/template.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "index", ["loc", [null, [47, 32], [47, 37]]], 0, 0, 0, 0], 0, 0, 0, 0], ["content", "item.name", ["loc", [null, [47, 40], [47, 53]]], 0, 0, 0, 0]],
        locals: ["item", "index"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 55,
              "column": 4
            },
            "end": {
              "line": 57,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/components/widget-adapter/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("       ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ball-pulse ball-dark text-center p-lg");
          var el2 = dom.createElement("div");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 60,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/components/widget-adapter/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "widgetButtons");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "configmenu");
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4");
        var el4 = dom.createTextNode("JS Engine:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-8");
        var el4 = dom.createTextNode("\n              ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("select");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "c3");
        var el6 = dom.createTextNode("C3");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "dimple");
        var el6 = dom.createTextNode("Dimple");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4");
        var el4 = dom.createTextNode("Chart:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-8");
        var el4 = dom.createTextNode("\n              ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("select");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "donut");
        var el6 = dom.createTextNode("Donut");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "timeseries");
        var el6 = dom.createTextNode("Time-Series");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "bar");
        var el6 = dom.createTextNode("Bar");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4");
        var el4 = dom.createTextNode("Name:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12");
        var el4 = dom.createTextNode("\n              ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4");
        var el4 = dom.createTextNode("Width:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-8");
        var el4 = dom.createTextNode("\n              ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4");
        var el4 = dom.createTextNode("Height:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-8");
        var el4 = dom.createTextNode("\n              ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4");
        var el4 = dom.createTextNode("Query:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12");
        var el4 = dom.createTextNode("\n              ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12");
        var el4 = dom.createTextNode("\n              ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-primary");
        dom.setAttribute(el4, "style", "margin-right:10px");
        dom.setAttribute(el4, "type", "submit");
        var el5 = dom.createTextNode("OK");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "widgetpicker");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4");
        var el4 = dom.createTextNode("Widgets:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-8");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("select");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [3]);
        var element3 = dom.childAt(element2, [3, 1]);
        var element4 = dom.childAt(element2, [7, 1]);
        var element5 = dom.childAt(element2, [25, 1]);
        var element6 = dom.childAt(element1, [5, 3, 1]);
        var morphs = new Array(15);
        morphs[0] = dom.createAttrMorph(element1, 'class');
        morphs[1] = dom.createAttrMorph(element1, 'style');
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [1, 1]), 0, 0);
        morphs[3] = dom.createAttrMorph(element3, 'onchange');
        morphs[4] = dom.createAttrMorph(element4, 'onchange');
        morphs[5] = dom.createMorphAt(dom.childAt(element2, [11]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(element2, [15]), 1, 1);
        morphs[7] = dom.createMorphAt(dom.childAt(element2, [19]), 1, 1);
        morphs[8] = dom.createMorphAt(dom.childAt(element2, [23]), 1, 1);
        morphs[9] = dom.createElementMorph(element5);
        morphs[10] = dom.createAttrMorph(element6, 'onchange');
        morphs[11] = dom.createMorphAt(element6, 1, 1);
        morphs[12] = dom.createMorphAt(element1, 7, 7);
        morphs[13] = dom.createMorphAt(element1, 9, 9);
        morphs[14] = dom.createMorphAt(element1, 11, 11);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["widget ", ["get", "widgetType", ["loc", [null, [1, 21], [1, 31]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "style", ["concat", ["height: ", ["get", "height", ["loc", [null, [1, 52], [1, 58]]], 0, 0, 0, 0], "px; min-height: ", ["get", "item.widgetSettings.minHeight", ["loc", [null, [1, 78], [1, 107]]], 0, 0, 0, 0], "px;"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "item.name", ["loc", [null, [3, 12], [3, 25]]], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["changeEngine"], ["value", "target.value"], ["loc", [null, [null, null], [8, 77]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["changeChart"], ["value", "target.value"], ["loc", [null, [null, null], [15, 76]]], 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "size", "35", "value", ["subexpr", "@mut", [["get", "name", ["loc", [null, [23, 50], [23, 54]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [23, 14], [23, 56]]], 0, 0], ["inline", "input", [], ["type", "text", "size", "10", "value", ["subexpr", "@mut", [["get", "widthSetting", ["loc", [null, [27, 50], [27, 62]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [27, 14], [27, 64]]], 0, 0], ["inline", "input", [], ["type", "text", "size", "10", "value", ["subexpr", "@mut", [["get", "heightSetting", ["loc", [null, [31, 50], [31, 63]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [31, 14], [31, 65]]], 0, 0], ["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "query", ["loc", [null, [35, 31], [35, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", "35", "rows", "3"], ["loc", [null, [35, 14], [35, 57]]], 0, 0], ["element", "action", ["configChanged"], [], ["loc", [null, [38, 86], [38, 112]]], 0, 0], ["attribute", "onchange", ["subexpr", "action", ["widgetPicked"], ["value", "target.value"], ["loc", [null, [null, null], [45, 73]]], 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "widgets", ["loc", [null, [46, 20], [46, 27]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [46, 12], [48, 21]]]], ["inline", "component", [["get", "widgetType", ["loc", [null, [53, 16], [53, 26]]], 0, 0, 0, 0]], ["parameters", ["subexpr", "@mut", [["get", "parameters", ["loc", [null, [53, 38], [53, 48]]], 0, 0, 0, 0]], [], [], 0, 0], "data", ["subexpr", "@mut", [["get", "data", ["loc", [null, [53, 54], [53, 58]]], 0, 0, 0, 0]], [], [], 0, 0], "widgetSettings", ["subexpr", "@mut", [["get", "item.widgetSettings", ["loc", [null, [53, 74], [53, 93]]], 0, 0, 0, 0]], [], [], 0, 0], "chartType", ["subexpr", "@mut", [["get", "chartType", ["loc", [null, [53, 104], [53, 113]]], 0, 0, 0, 0]], [], [], 0, 0], "aggregations", ["subexpr", "@mut", [["get", "aggregations", ["loc", [null, [53, 127], [53, 139]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "item.name", ["loc", [null, [53, 145], [53, 154]]], 0, 0, 0, 0]], [], [], 0, 0], "item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [53, 160], [53, 164]]], 0, 0, 0, 0]], [], [], 0, 0], "width", ["subexpr", "@mut", [["get", "widthSetting", ["loc", [null, [53, 171], [53, 183]]], 0, 0, 0, 0]], [], [], 0, 0], "height", ["subexpr", "@mut", [["get", "heightSetting", ["loc", [null, [53, 191], [53, 204]]], 0, 0, 0, 0]], [], [], 0, 0], "interval", ["subexpr", "@mut", [["get", "tsInterval", ["loc", [null, [53, 214], [53, 224]]], 0, 0, 0, 0]], [], [], 0, 0], "resizedSignal", ["subexpr", "@mut", [["get", "resizedSignal", ["loc", [null, [53, 239], [53, 252]]], 0, 0, 0, 0]], [], [], 0, 0], "total", ["subexpr", "@mut", [["get", "total", ["loc", [null, [53, 259], [53, 264]]], 0, 0, 0, 0]], [], [], 0, 0], "transitionToFacet", ["subexpr", "action", ["transitionToFacet"], [], ["loc", [null, [53, 283], [53, 311]]], 0, 0]], ["loc", [null, [53, 4], [53, 313]]], 0, 0], ["block", "if", [["get", "loadingData", ["loc", [null, [55, 10], [55, 21]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [55, 4], [57, 11]]]], ["content", "yield", ["loc", [null, [58, 4], [58, 13]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("analytics-dashboard/controllers/application", ["exports", "ember"], function (exports, _ember) {

    //import OsfAgnosticAuthControllerMixin from 'ember-osf/mixins/osf-agnostic-auth-controller';

    //import {
    //    getAuthUrl
    //} from 'ember-osf/utils/auth';

    exports["default"] = _ember["default"].Controller.extend({ //OsfAgnosticAuthControllerMixin,{
        toast: _ember["default"].inject.service(),
        actions: {
            transitionToHome: function transitionToHome() {
                this.transitionToRoute("dashboards.dashboard", "ucsd", {
                    queryParams: {
                        all: undefined,
                        sources: undefined,
                        id: undefined,
                        contributors: undefined,
                        publishers: undefined,
                        tags: undefined,
                        query: undefined,
                        type: undefined,
                        funders: undefined,
                        start: undefined,
                        end: undefined,
                        page: undefined
                    }
                });
            }
        }
    });
});
define('analytics-dashboard/controllers/dashboards/dashboard', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({

        queryParams: [{ 'id': { scope: "controller" } }, { 'scholar': { scope: "controller" } }, { 'query': { scope: "controller" } }, { 'q': { scope: "controller" } }, { 'institution': { scope: "controller" } }, { 'tag': { scope: "controller" } }, { 'tags': { scope: "controller" } }, { 'topic': { scope: "controller" } }, { 'all': { scope: "controller" } }, { 'sources': { scope: "controller" } }, { 'publishers': { scope: "controller" } }, { 'type': { scope: "controller" } }, { 'funders': { scope: "controller" } }, { 'contributors': { scope: "controller" } }],

        updateParams: _ember['default'].observer('queryParams', function () {
            //this.set("parameters", Ember.computed.apply(this, this.get('queryParams').concat(() => {
            //    return this.get('queryParams').map((param) => {
            //        return this.get(param);
            //    })
            //})));
        }),

        currentUser: _ember['default'].inject.service(),

        // Initialize the dashboard with no widgets.
        widgets: [],

        // Initialize the list of additional charts that the user can add
        addableList: [],
        storedDashboards: [],

        configureQuery: (function () {}).on('init'),

        init: function init() {
            var ret = this._super();
            return ret;
        },

        actions: {

            changeQ: function changeQ(query) {
                this.set('q', query);
            },

            changeGte: function changeGte(g) {
                g = new Date(g);
                this.set('gte', g.toISOString().split('T')[0]); // Elasticsearch doesn't accept timezone information.
            },

            changeLte: function changeLte(l) {
                l = new Date(l);
                this.set('lte', l.toISOString().split('T')[0]);
            },

            sortEndAction: function sortEndAction() {},

            removeChart: function removeChart(targetWidget) {
                this.set('widgets', this.get('widgets').filter(function (widget) {
                    return widget !== targetWidget;
                }).slice());
            },

            addChart: function addChart(widget) {
                this.set('widgets', this.get('widgets').concat({ isPlaceholder: true }));
            },

            dashboardSaveWidget: function dashboardSaveWidget(widget) {
                var _this = this;

                this.get('currentUser').load().then(function (c) {
                    widget.author = c.get('fullName');
                    _this.set('widgets', _this.get('widgets').addObject(widget));
                    widget = _this.store.createRecord('widget', widget);
                    widget.save();
                    // TODO: This should not be an alert, but a growl-style notification.
                    // alert("Chart has been successfully saved!");
                }, function (r) {
                    // TODO: This should not be an alert, but a growl-style notification.
                    alert("Widgets may not be saved anonymously. Log in to save a widget.");
                });
            }

        }

    });
});
define('analytics-dashboard/helpers/add', ['exports', 'ember'], function (exports, _ember) {
  exports.add = add;

  function add(params) {
    return params[0] + params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(add);
});
define('analytics-dashboard/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('analytics-dashboard/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('analytics-dashboard/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('analytics-dashboard/helpers/bs-not', ['exports', 'ember-bootstrap/helpers/bs-not'], function (exports, _emberBootstrapHelpersBsNot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsNot['default'];
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsNot.not;
    }
  });
});
define('analytics-dashboard/helpers/bs-read-path', ['exports', 'ember-bootstrap/helpers/bs-read-path'], function (exports, _emberBootstrapHelpersBsReadPath) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsReadPath['default'];
    }
  });
  Object.defineProperty(exports, 'readPath', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsReadPath.readPath;
    }
  });
});
define('analytics-dashboard/helpers/elem-id', ['exports', 'ember-osf/helpers/elem-id'], function (exports, _emberOsfHelpersElemId) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfHelpersElemId['default'];
    }
  });
  Object.defineProperty(exports, 'elemId', {
    enumerable: true,
    get: function get() {
      return _emberOsfHelpersElemId.elemId;
    }
  });
});
define('analytics-dashboard/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('analytics-dashboard/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('analytics-dashboard/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('analytics-dashboard/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define("analytics-dashboard/helpers/log", ["exports"], function (exports) {
  exports["default"] = function () {
    //console.debug(str);
  };

  ;
});
define('analytics-dashboard/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('analytics-dashboard/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('analytics-dashboard/helpers/moment-calendar', ['exports', 'ember', 'analytics-dashboard/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _analyticsDashboardConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_analyticsDashboardConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('analytics-dashboard/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('analytics-dashboard/helpers/moment-format', ['exports', 'ember', 'analytics-dashboard/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _analyticsDashboardConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_analyticsDashboardConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('analytics-dashboard/helpers/moment-from-now', ['exports', 'ember', 'analytics-dashboard/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _analyticsDashboardConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_analyticsDashboardConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('analytics-dashboard/helpers/moment-to-now', ['exports', 'ember', 'analytics-dashboard/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _analyticsDashboardConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_analyticsDashboardConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('analytics-dashboard/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('analytics-dashboard/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('analytics-dashboard/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('analytics-dashboard/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('analytics-dashboard/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('analytics-dashboard/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('analytics-dashboard/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _emberI18nHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nHelper['default'];
    }
  });
});
define('analytics-dashboard/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('analytics-dashboard/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'analytics-dashboard/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _analyticsDashboardConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_analyticsDashboardConfigEnvironment['default'].APP.name, _analyticsDashboardConfigEnvironment['default'].APP.version)
  };
});
define('analytics-dashboard/initializers/bootstrap-linkto', ['exports', 'ember-bootstrap/initializers/bootstrap-linkto'], function (exports, _emberBootstrapInitializersBootstrapLinkto) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapInitializersBootstrapLinkto['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapInitializersBootstrapLinkto.initialize;
    }
  });
});
define('analytics-dashboard/initializers/component-routes', ['exports'], function (exports) {
    exports.initialize = initialize;

    function initialize(application) {
        application.inject('component', 'router', 'router:main');
    }

    exports['default'] = {
        name: 'component-routes',
        initialize: initialize
    };
});
define('analytics-dashboard/initializers/component-styles', ['exports', 'ember', 'ember-component-css/pod-names', 'analytics-dashboard/mixins/style-namespacing-extras'], function (exports, _ember, _emberComponentCssPodNames, _analyticsDashboardMixinsStyleNamespacingExtras) {
  exports.initialize = initialize;
  var Component = _ember['default'].Component;
  var ComponentLookup = _ember['default'].ComponentLookup;
  var computed = _ember['default'].computed;
  var getOwner = _ember['default'].getOwner;

  ComponentLookup.reopen({
    componentFor: function componentFor(name, owner) {
      owner = owner.hasRegistration ? owner : getOwner(this);

      if (_emberComponentCssPodNames['default'][name] && !owner.hasRegistration('component:' + name)) {
        owner.register('component:' + name, Component);
      }
      return this._super.apply(this, arguments);
    }
  });

  Component.reopen(_analyticsDashboardMixinsStyleNamespacingExtras['default'], {
    componentCssClassName: computed({
      get: function get() {
        return _emberComponentCssPodNames['default'][this.get('_componentIdentifier')] || '';
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);

      if (this.get('_shouldAddNamespacedClassName')) {
        this.classNames = this.classNames.concat(this.get('componentCssClassName'));
      }
    }
  });

  function initialize() {}

  exports['default'] = {
    name: 'component-styles',
    initialize: initialize
  };
});
define('analytics-dashboard/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define("analytics-dashboard/initializers/coordinator-setup", ["exports", "analytics-dashboard/models/coordinator"], function (exports, _analyticsDashboardModelsCoordinator) {
  exports["default"] = {
    name: "setup coordinator",

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register("drag:coordinator", _analyticsDashboardModelsCoordinator["default"]);
      app.inject("component", "coordinator", "drag:coordinator");
    }
  };
});
define('analytics-dashboard/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('analytics-dashboard/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define("analytics-dashboard/initializers/ember-i18n", ["exports", "analytics-dashboard/instance-initializers/ember-i18n"], function (exports, _analyticsDashboardInstanceInitializersEmberI18n) {
  exports["default"] = {
    name: _analyticsDashboardInstanceInitializersEmberI18n["default"].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      _analyticsDashboardInstanceInitializersEmberI18n["default"].initialize(application);
    }
  };
});
define('analytics-dashboard/initializers/ember-simple-auth', ['exports', 'ember', 'analytics-dashboard/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _ember, _analyticsDashboardConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(registry) {
      var config = _analyticsDashboardConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _analyticsDashboardConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
  };
});
define('analytics-dashboard/initializers/export-application-global', ['exports', 'ember', 'analytics-dashboard/config/environment'], function (exports, _ember, _analyticsDashboardConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_analyticsDashboardConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _analyticsDashboardConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_analyticsDashboardConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('analytics-dashboard/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('analytics-dashboard/initializers/load-bootstrap-config', ['exports', 'analytics-dashboard/config/environment', 'ember-bootstrap/config'], function (exports, _analyticsDashboardConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_analyticsDashboardConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('analytics-dashboard/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, _emberBootstrapInitializersModalsContainer) {
  exports['default'] = _emberBootstrapInitializersModalsContainer['default'];
});
define('analytics-dashboard/initializers/promise', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;

  function initialize() {
    window.Promise = _ember['default'].RSVP.Promise;
  }

  exports['default'] = {
    name: 'promise',
    initialize: initialize
  };
});
define('analytics-dashboard/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('analytics-dashboard/initializers/toastr', ['exports', 'ember-toastr/initializers/toastr', 'analytics-dashboard/config/environment'], function (exports, _emberToastrInitializersToastr, _analyticsDashboardConfigEnvironment) {

  var toastrOptions = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '4000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  };
  var config = _analyticsDashboardConfigEnvironment['default']['ember-toastr'] || {
    injectAs: 'toast',
    toastrOptions: toastrOptions
  };

  exports['default'] = {
    name: 'ember-toastr',
    initialize: function initialize() {
      // support 1.x and 2.x
      var application = arguments[1] || arguments[0];

      if (!config.toastrOptions) {
        config.toastrOptions = toastrOptions;
      }

      if (!config.injectAs) {
        config.injectAs = 'toast';
      }

      (0, _emberToastrInitializersToastr.initialize)(application, config);
    }
  };
});
define('analytics-dashboard/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('analytics-dashboard/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("analytics-dashboard/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define("analytics-dashboard/instance-initializers/ember-i18n", ["exports", "ember", "ember-i18n/stream", "ember-i18n/legacy-helper", "analytics-dashboard/config/environment"], function (exports, _ember, _emberI18nStream, _emberI18nLegacyHelper, _analyticsDashboardConfigEnvironment) {
  exports["default"] = {
    name: 'ember-i18n',

    initialize: function initialize(appOrAppInstance) {
      if (_emberI18nLegacyHelper["default"] != null) {
        (function () {
          // Used for Ember < 1.13
          var i18n = appOrAppInstance.container.lookup('service:i18n');

          i18n.localeStream = new _emberI18nStream["default"](function () {
            return i18n.get('locale');
          });

          _ember["default"].addObserver(i18n, 'locale', i18n, function () {
            this.localeStream.value(); // force the stream to be dirty
            this.localeStream.notify();
          });

          _ember["default"].HTMLBars._registerHelper('t', _emberI18nLegacyHelper["default"]);
        })();
      }
    }
  };
});
define('analytics-dashboard/instance-initializers/ember-osf', ['exports', 'ember-osf/instance-initializers/ember-osf'], function (exports, _emberOsfInstanceInitializersEmberOsf) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfInstanceInitializersEmberOsf['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberOsfInstanceInitializersEmberOsf.initialize;
    }
  });
});
define('analytics-dashboard/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define('analytics-dashboard/instance-initializers/global', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize(app) {
    // appInstance.inject('route', 'foo', 'service:foo');
    app.store = app.__container__.lookup('service:store');
    window.App = app;
  }

  exports['default'] = {
    name: 'global',
    initialize: initialize
  };
});
define('analytics-dashboard/locales/en-us/config', ['exports', 'ember-osf/locales/en-us/config'], function (exports, _emberOsfLocalesEnUsConfig) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfLocalesEnUsConfig['default'];
    }
  });
});
define('analytics-dashboard/locales/en-us/translations', ['exports', 'ember-osf/locales/en-us/translations'], function (exports, _emberOsfLocalesEnUsTranslations) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfLocalesEnUsTranslations['default'];
    }
  });
});
define('analytics-dashboard/mixins/commentable', ['exports', 'ember-osf/mixins/commentable'], function (exports, _emberOsfMixinsCommentable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfMixinsCommentable['default'];
    }
  });
});
define('analytics-dashboard/mixins/osf-token-login-controller', ['exports', 'ember-osf/mixins/osf-token-login-controller'], function (exports, _emberOsfMixinsOsfTokenLoginController) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfMixinsOsfTokenLoginController['default'];
    }
  });
});
define('analytics-dashboard/mixins/osf-token-login-route', ['exports', 'ember-osf/mixins/osf-token-login-route'], function (exports, _emberOsfMixinsOsfTokenLoginRoute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfMixinsOsfTokenLoginRoute['default'];
    }
  });
});
define('analytics-dashboard/mixins/style-namespacing-extras', ['exports', 'ember-component-css/mixins/style-namespacing-extras'], function (exports, _emberComponentCssMixinsStyleNamespacingExtras) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComponentCssMixinsStyleNamespacingExtras['default'];
    }
  });
});
define('analytics-dashboard/models/citation', ['exports', 'ember-osf/models/citation'], function (exports, _emberOsfModelsCitation) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsCitation['default'];
    }
  });
});
define('analytics-dashboard/models/collection', ['exports', 'ember-osf/models/collection'], function (exports, _emberOsfModelsCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsCollection['default'];
    }
  });
});
define('analytics-dashboard/models/comment-report', ['exports', 'ember-osf/models/comment-report'], function (exports, _emberOsfModelsCommentReport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsCommentReport['default'];
    }
  });
});
define('analytics-dashboard/models/comment', ['exports', 'ember-osf/models/comment'], function (exports, _emberOsfModelsComment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsComment['default'];
    }
  });
});
define('analytics-dashboard/models/contributor', ['exports', 'ember-osf/models/contributor'], function (exports, _emberOsfModelsContributor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsContributor['default'];
    }
  });
});
define('analytics-dashboard/models/coordinator', ['exports', 'ember', 'analytics-dashboard/models/obj-hash'], function (exports, _ember, _analyticsDashboardModelsObjHash) {
  exports['default'] = _ember['default'].Object.extend(_ember['default'].Evented, {
    objectMap: _ember['default'].computed(function () {
      return _analyticsDashboardModelsObjHash['default'].create();
    }),

    getObject: function getObject(id, ops) {
      ops = ops || {};
      var payload = this.get('objectMap').getObj(id);

      if (payload.ops.source) {
        payload.ops.source.sendAction('action', payload.obj);
      }

      if (payload.ops.target) {
        payload.ops.target.sendAction('action', payload.obj);
      }

      this.trigger("objectMoved", { obj: payload.obj, source: payload.ops.source, target: ops.target });

      return payload.obj;
    },

    setObject: function setObject(obj, ops) {
      ops = ops || {};
      return this.get('objectMap').add({ obj: obj, ops: ops });
    }
  });
});
define('analytics-dashboard/models/dashboard', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({

        name: _emberData['default'].attr('string'),
        q: _emberData['default'].attr('string'),
        gte: _emberData['default'].attr('date'),
        lte: _emberData['default'].attr('date'),
        tsInterval: _emberData['default'].attr('string'),
        sortableObjectList: _emberData['default'].attr(),
        addableList: _emberData['default'].attr()

    });
});
define('analytics-dashboard/models/draft-registration', ['exports', 'ember-osf/models/draft-registration'], function (exports, _emberOsfModelsDraftRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsDraftRegistration['default'];
    }
  });
});
define('analytics-dashboard/models/file-provider', ['exports', 'ember-osf/models/file-provider'], function (exports, _emberOsfModelsFileProvider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsFileProvider['default'];
    }
  });
});
define('analytics-dashboard/models/file-version', ['exports', 'ember-osf/models/file-version'], function (exports, _emberOsfModelsFileVersion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsFileVersion['default'];
    }
  });
});
define('analytics-dashboard/models/file', ['exports', 'ember-osf/models/file'], function (exports, _emberOsfModelsFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsFile['default'];
    }
  });
});
define('analytics-dashboard/models/institution', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({

        name: _emberData['default'].attr('string'),
        dashboards: _emberData['default'].hasMany('dashboard')

    });
});
define('analytics-dashboard/models/license', ['exports', 'ember-osf/models/license'], function (exports, _emberOsfModelsLicense) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsLicense['default'];
    }
  });
});
define('analytics-dashboard/models/log', ['exports', 'ember-osf/models/log'], function (exports, _emberOsfModelsLog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsLog['default'];
    }
  });
});
define('analytics-dashboard/models/metaschema', ['exports', 'ember-osf/models/metaschema'], function (exports, _emberOsfModelsMetaschema) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsMetaschema['default'];
    }
  });
});
define('analytics-dashboard/models/node-link', ['exports', 'ember-osf/models/node-link'], function (exports, _emberOsfModelsNodeLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsNodeLink['default'];
    }
  });
});
define('analytics-dashboard/models/node', ['exports', 'ember-osf/models/node'], function (exports, _emberOsfModelsNode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsNode['default'];
    }
  });
});
define('analytics-dashboard/models/obj-hash', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({
    content: {},
    contentLength: 0,
    length: _ember['default'].computed.alias('contentLength'),

    add: function add(obj) {
      var id = this.generateId();
      this.get('content')[id] = obj;
      this.incrementProperty("contentLength");
      return id;
    },

    getObj: function getObj(key) {
      var res = this.get('content')[key];
      if (!res) {
        throw "no obj for key " + key;
      }
      return res;
    },

    generateId: function generateId() {
      var num = Math.random() * 1000000000000.0;
      num = parseInt(num);
      num = "" + num;
      return num;
    },

    keys: function keys() {
      var res = [];
      for (var key in this.get('content')) {
        res.push(key);
      }
      return _ember['default'].A(res);
    }

  });
});
define('analytics-dashboard/models/osf-model', ['exports', 'ember-osf/models/osf-model'], function (exports, _emberOsfModelsOsfModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsOsfModel['default'];
    }
  });
});
define('analytics-dashboard/models/preprint-provider', ['exports', 'ember-osf/models/preprint-provider'], function (exports, _emberOsfModelsPreprintProvider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsPreprintProvider['default'];
    }
  });
});
define('analytics-dashboard/models/preprint', ['exports', 'ember-osf/models/preprint'], function (exports, _emberOsfModelsPreprint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsPreprint['default'];
    }
  });
});
define('analytics-dashboard/models/registration', ['exports', 'ember-osf/models/registration'], function (exports, _emberOsfModelsRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsRegistration['default'];
    }
  });
});
define('analytics-dashboard/models/taxonomy', ['exports', 'ember-osf/models/taxonomy'], function (exports, _emberOsfModelsTaxonomy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsTaxonomy['default'];
    }
  });
});
define('analytics-dashboard/models/user', ['exports', 'ember-osf/models/user'], function (exports, _emberOsfModelsUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfModelsUser['default'];
    }
  });
});
define('analytics-dashboard/models/widget', ['exports', 'ember-data', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberData, _emberDataAttr, _emberDataRelationships) {
    exports['default'] = _emberData['default'].Model.extend({
        name: (0, _emberDataAttr['default'])('string', { defaultValue: 'Unnamed Widget' }),
        author: (0, _emberDataAttr['default'])('string'),
        width: (0, _emberDataAttr['default'])('number'),
        height: (0, _emberDataAttr['default'])('number'),
        query: (0, _emberDataAttr['default'])({
            aggregations: (0, _emberDataAttr['default'])({
                articles_over_time: (0, _emberDataAttr['default'])({
                    data_histogram: (0, _emberDataAttr['default'])({
                        field: (0, _emberDataAttr['default'])('date'),
                        interval: (0, _emberDataAttr['default'])('string'),
                        format: (0, _emberDataAttr['default'])('string')
                    }),
                    aggregations: (0, _emberDataAttr['default'])({
                        arttype: {
                            term: {
                                field: (0, _emberDataAttr['default'])('string')
                            }
                        }
                    })
                }),
                tags: (0, _emberDataAttr['default'])({
                    terms: (0, _emberDataAttr['default'])({
                        field: (0, _emberDataAttr['default'])('string'),
                        size: (0, _emberDataAttr['default'])('number')
                    })
                }),
                contributors: (0, _emberDataAttr['default'])({
                    terms: (0, _emberDataAttr['default'])({
                        field: (0, _emberDataAttr['default'])('string'),
                        size: (0, _emberDataAttr['default'])('number')
                    })
                }),
                sources: (0, _emberDataAttr['default'])({
                    terms: (0, _emberDataAttr['default'])({
                        field: (0, _emberDataAttr['default'])('string'),
                        size: (0, _emberDataAttr['default'])('number')
                    })
                }) }),
            query: (0, _emberDataAttr['default'])({
                bool: (0, _emberDataAttr['default'])({
                    must: (0, _emberDataAttr['default'])([{
                        query_string: (0, _emberDataAttr['default'])({ query: (0, _emberDataAttr['default'])('string') })
                    }, { range: (0, _emberDataAttr['default'])({
                            date: (0, _emberDataAttr['default'])({
                                gte: (0, _emberDataAttr['default'])('date'),
                                lte: (0, _emberDataAttr['default'])('date'),
                                interval: (0, _emberDataAttr['default'])('string')
                            })
                        })
                    }])
                })
            }),
            from: (0, _emberDataAttr['default'])('number')
        }),

        settings: (0, _emberDataAttr['default'])({
            gte: (0, _emberDataAttr['default'])('date'),
            lte: (0, _emberDataAttr['default'])('date'),
            interval: (0, _emberDataAttr['default'])('string')
        })
    });
});
define('analytics-dashboard/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('analytics-dashboard/router', ['exports', 'ember', 'analytics-dashboard/config/environment'], function (exports, _ember, _analyticsDashboardConfigEnvironment) {

    var Router = _ember['default'].Router.extend({
        location: _analyticsDashboardConfigEnvironment['default'].locationType,
        rootURL: _analyticsDashboardConfigEnvironment['default'].rootURL
    });

    Router.map(function () {
        this.route('dashboards', {
            path: ""
        }, function () {
            this.route('dashboard', {
                path: ':dashboard'
            });
        });
    });

    exports['default'] = Router;
});
define('analytics-dashboard/routes/application', ['exports', 'ember'], function (exports, _ember) {

    //import OsfAgnosticAuthRouteMixin from 'ember-osf/mixins/osf-agnostic-auth-route';

    exports['default'] = _ember['default'].Route.extend({ //OsfAgnosticAuthRouteMixin, {

        store: _ember['default'].inject.service(),
        session: _ember['default'].inject.service(),

        model: function model() {
            //if (this.get('session.isAuthenticated')) {
            //return this.get('store').findRecord('user', 'me');
            //}
        }

    });
});
define('analytics-dashboard/routes/dashboards', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
	exports['default'] = _ember['default'].Route.extend({
		beforeModel: function beforeModel() {
			if (window.location.pathname == "/") {
				this.transitionTo('dashboards.dashboard', 'ucsd');
			}
		}
	});
});
define('analytics-dashboard/routes/dashboards/dashboard', ['exports', 'ember', 'analytics-dashboard/utils/date-interval'], function (exports, _ember, _analyticsDashboardUtilsDateInterval) {

    /* Gets all (as close to all) share records that are published by UCSD. Used with query.bool.should*/
    var ucsd_query = ["UCSD", "UC San Diego", "UC San Diego Library Digital Collections", "Scripps Institution of Oceanography", "Scripps Institute of Oceanography", "University of California San Diego", "Univ of california san diego", "University of CA San Diego", "university of california at san diego", "university california san diego", "univ of california at san diego", "univ california san diego", "univ calif san diego", "california univ san diego", "san diego supercomputer center", "qualcomm institute"].map(function (term) {
        return {
            "multi_match": {
                "fields": ["contributors", "publishers", "affiliations", "funders", "title", "hosts"],
                "type": "phrase",
                "query": term
            }
        };
    }).concat([{
        "match_phrase": {
            "tags": "cdl.ucsd"
        }
    }, {
        "match_phrase": {
            "tags": "Scripps institution of oceanography"
        }
    }, {
        "term": {
            "source": "UC San Diego Library"
        }
    }]);

    /* Tags to be ommited from the search results. Goes into tags aggregation query under 'exclude' */
    var tag_blacklist = ["address", "process", "improved", "base", "goals", "testing", "development", "research", "event", "role", "novel", "work", "text", "cdl", "cdl.ucsd", "dataset", "text/tab-separated-values", "natl_1981_an_37n", "58 geosciences", "natl_1981_an_26n", "date/time", "54 environmental sciences", "36 materials science", "59 basic biological sciences", "unknown", "preprint", "2011)", "extracted from the 2-minute gridded global relief data (etopo2)", "extracted from the world ocean atlas 2005", "fugacity of carbon dioxide (water) at sea surface temperature (wet air)", "recomputed after socat (pfeil et al", "xco2 (water) at sea surface temperature (dry air)", "100036", "extracted from the ncep/ncar 40-year reanalysis project", "extracted from globalview-co2", "document", "indianocean_1976_an_18s", "75 condensed matter physics", "37 inorganic", "book", "29442", "71 classical and quantum mechanics", "information", "project", "data", "application/pdf", "description", "materials", "size", "99 general and miscellaneous//mathematics", "and information science", "& refractories-- physical properties", "1 ancillary/documentation file", "1 data file", "62 radiology and nuclear medicine", "article", "208 data points", "58125", "70 plasma physics and fusion technology", "ands", "centre72", "ascii: ascii text (text/plain)", "72 physics of elementary particles and fields", "getinfo", "multipart/mixed", "s", "u", "comment", "42 engineering", "ca", "ct", "fl", "ga", "md", "nc", "nj", "va", "& thermal phenomena-- (-1987)", "(unk)", "al", "hi", "ma", "ns", "ny", "or", "ri", "sc", "073", "63 radiation", "656102 -- solid state physics-- superconductivity-- acoustic", "and other environ. pollutant effects on living orgs. and biol. mat.", "de", "nitrat", "nitrit", "surface waters 580500* -- oceanography-- (1980-1989)", "036", "46211", "58302", "lternet", "& refractories-- structure & phase studies", "006", "076", "093", "46215", "46231", "580000 -- geosciences", "cfc-11", "cfc-12", "datavers", "ms", "transition element compounds 360204* -- ceramics", "uniform resource locator/link to image", "vertebrates 550201* -- biochemistry-- tracer techniques"];

    /* ucsd ID's to be  ommited from the contributor results. Goes into ucsd aggregation query under 'exclude' */
    var ucsd_blacklist = ["64201-BDE-4D4", //"University of California, San Diego"
    "641C6-0E9-04C", //"University of California [San Diego] (UC San Diego)",
    "640E7-1AA-07C", //"University of California San Diego",
    "6412C-4A8-62C", //"University of California: San Diego",
    //"California Univ., San Diego",
    //"University of California at San Diego",
    "640B7-236-74F", //"Univ. of California",
    "64020-818-87A" //"University of California"
    ];

    exports['default'] = _ember['default'].Route.extend({

        queryParams: { //Ember queryParams, if any of the listed parameters change the page will refresh.
            query: { refreshModel: true },
            tags: { refreshModel: true },
            sources: { refreshModel: true },
            id: { refreshModel: true },
            scholar: { refreshModel: true },
            all: { refreshModel: true },
            contributors: { refreshModel: true },
            publishers: { refreshModel: true },
            type: { refreshModel: true },
            funders: { refreshModel: true },
            start: { refreshModel: true },
            end: { refreshModel: true },
            page: { refreshModel: true }
        },
        gte: "1996-01-01", // Set default begin date
        lte: new Date().toISOString().split('T')[0], // Set default end date
        tsInterval: _ember['default'].computed('gte', 'lte', function () {
            var d1 = new Date(this.get('gte'));
            var d2 = new Date(this.get('lte'));
            return (0, _analyticsDashboardUtilsDateInterval['default'])(d1, d2);
        }),

        /* Resets query parameters to undefined when leaving dashboard route*/
        resetController: function resetController(controller, isExiting, transition) {
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

        model: function model(params, transition, queryParams) {
            var gte = this.get('gte');
            var lte = this.get('lte');
            var dashboards = {
                /* Each top level object is a dashboard view (i.e. a page with widgets) See first object for comments on properties */
                objectDetail: {
                    dashboardName: 'Object Detail Dashboard',
                    /* Each widget goes through widget-adapter that uses the settings and parameters */
                    widgets: [{
                        widgetType: "object-detail-widget", // Corresponds to the Ember component name
                        background_color: "000000",
                        name: "", // Showing a name displays widget title, empty name omits title
                        width: 12, // Widgets are floated left and width is defined in grid columns 0-12
                        post_body: {}, // Raw elastic query to be sent with the request for SHARE
                        postBodyParams: [// List of parameters to add to post_body. Params overrides post_body if there are same parameter paths
                        {
                            parameterName: "id", // the name of the url parameter, the value of this parameter will be used as value of the parameterpath below
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
                            parameterPath: ["query", "bool", "must", 0, "term", "_id"]
                        }]
                    }]
                },
                agentDetail: {
                    dashboardName: 'Agent Detail Dashboard',
                    widgets: [{
                        widgetType: "agent-detail-widget",
                        background_color: "000000",
                        name: "",
                        width: 12,
                        endpoint: "agents",
                        post_body: {},
                        postBodyParams: [{
                            parameterName: "id",
                            parameterPath: ["query", "bool", "must", 0, "term", "_id"]
                        }]
                    }]
                },
                search: {
                    dasboardName: 'Institution Overview Dashboard',
                    widgets: [{
                        widgetType: "query-widget",
                        background_color: "rgba(0,0,0,0.3)",
                        name: "",
                        width: 12,
                        facetDash: "search"
                    }, {
                        widgetType: "filter-plaques",
                        name: "",
                        width: 12,
                        facetDash: "search"
                    }, {
                        widgetType: "results-list",
                        name: "",
                        width: 9,
                        post_body: {},
                        facetDash: "search",
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "term", "sources.exact"],
                            parameterName: "sources"
                        }, {
                            parameterName: "tags",
                            parameterPath: ["query", "bool", "filter", 2, "term", "tags.exact"]
                        }, {
                            parameterName: "publishers",
                            parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                        }, {
                            parameterName: "contributors",
                            parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                        }, {
                            parameterName: "type",
                            parameterPath: ["query", "bool", "filter", 5, "term", "type.exact"]
                        }, {
                            parameterName: "funders",
                            parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parametername: "page",
                            parameterpath: ["from"],
                            defaultvalue: 0
                        }],
                        widgetSettings: {
                            minHeight: 115
                        }
                    }, {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 3,
                        facetDash: null,
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "term", "sources.exact"],
                            parameterName: "sources"
                        }, {
                            parameterName: "tags",
                            parameterPath: ["query", "bool", "filter", 2, "term", "tags.exact"]
                        }, {
                            parameterName: "publishers",
                            parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                        }, {
                            parameterName: "contributors",
                            parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                        }, {
                            parameterName: "type",
                            parameterPath: ["query", "bool", "filter", 5, "term", "type.exact"]
                        }, {
                            parameterName: "funders",
                            parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            fontSize: 2,
                            fontColor: '#F44336',
                            minHeight: 115,
                            isLink: false
                        }
                    }, {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Data Providers',
                        width: 3,
                        mappingType: "OBJECT_TO_ARRAY",
                        facetDash: "search",
                        facetDashParameter: "publishers",
                        hideViewAll: !transition.queryParams.all,
                        widgetSettings: {
                            viewAllRoute: 'providers',
                            showFilter: true,
                            mode: 'search',
                            aggregationTitle: 'publishers'
                        },
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "term", "sources.exact"],
                            parameterName: "sources"
                        }, {
                            parameterName: "tags",
                            parameterPath: ["query", "bool", "filter", 2, "term", "tags.exact"]
                        }, {
                            parameterName: "publishers",
                            parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                        }, {
                            parameterName: "contributors",
                            parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                        }, {
                            parameterName: "type",
                            parameterPath: ["query", "bool", "filter", 5, "term", "type.exact"]
                        }, {
                            parameterName: "funders",
                            parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }, {
                            parameterPath: ["aggregations", "publishers", "terms", "field"],
                            parameterName: "publisher_field",
                            defaultValue: "lists.publishers.id.exact"
                        }, {
                            parameterPath: ["aggregations", "publishers", "terms", "size"],
                            parameterName: "publisher_size",
                            defaultValue: 200
                        }]
                    },
                    /*{
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
                    },*/
                    {
                        // Type dropdown
                        widgetType: 'dropdown-widget',
                        name: 'Types',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "type",
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"],
                            parameterName: "sources"
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterPath: ["aggregations", "dropdownList", "terms", "field"],
                            parameterName: "type_field",
                            defaultValue: "type.exact"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            mode: 'dropdown'
                        }
                    }, {
                        // Tag select
                        widgetType: 'dropdown-widget',
                        name: 'Tags',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "tags",
                        post_body: {
                            "aggregations": {
                                "dropdownList": {
                                    "terms": {
                                        "field": 'tags.exact',
                                        "size": 100,
                                        exclude: tag_blacklist
                                    }
                                }
                            }
                        },
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 0, "bool", "should", "minimum_should_match"],
                            parameterName: "shouldMatch",
                            defaultValue: 1
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "bool", "should"],
                            defaultValue: ucsd_query
                        }, {
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 1, "term", "sources"]
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterName: "tags",
                            parameterPath: ["query", "bool", "filter", 2, "term", "tags"]
                        }, {
                            parameterName: "publishers",
                            parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                        }, {
                            parameterName: "contributors",
                            parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                        }, {
                            parameterName: "type",
                            parameterPath: ["query", "bool", "filter", 5, "term", "type"]
                        }, {
                            parameterName: "funders",
                            parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            mode: 'search'
                        }
                    }, {
                        // Funder select
                        widgetType: 'dropdown-widget',
                        name: 'Funders',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "funders",
                        post_body: {
                            "aggregations": {
                                "dropdownList": {
                                    "terms": {
                                        "field": "lists.funders.id.exact",
                                        "size": 100
                                    },
                                    "aggs": {
                                        "name": {
                                            "terms": {
                                                "field": "lists.funders.name.exact"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should", "minimum_should_match"],
                            parameterName: "shouldMatch",
                            defaultValue: 1
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should"],
                            defaultValue: ucsd_query
                        }, {
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterName: "tags",
                            parameterPath: ["query", "bool", "filter", 1, "term", "tags"]
                        }, {
                            parameterName: "publishers",
                            parameterPath: ["query", "bool", "filter", 2, "term", "lists.publishers.id.exact"]
                        }, {
                            parameterName: "contributors",
                            parameterPath: ["query", "bool", "filter", 3, "term", "lists.contributors.id.exact"]
                        }, {
                            parameterName: "type",
                            parameterPath: ["query", "bool", "filter", 4, "term", "type"]
                        }, {
                            parameterName: "funders",
                            parameterPath: ["query", "bool", "filter", 5, "term", "lists.funders.id.exact"]
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }],
                        widgetSettings: {
                            mode: 'search'
                        }
                    }, {
                        // Daterange select
                        widgetType: 'search-facet-daterange',
                        name: 'Dates',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "",
                        post_body: {}
                    }]
                },
                aboutDash: {
                    dashboardName: "About",
                    widgets: [{
                        widgetType: "text-widget",
                        name: "",
                        width: 12,
                        facetDash: "aboutDash",
                        content: "<h4><b>What is TritonSHARE?</b></h4>" + "<p>TritonSHARE is a tool that harvests and presents information about UC San Diego research outputs, harvested from sources around the world. Research outputs refers to a wide variety of scholarly work, including journal articles and preprints, datasets, ongoing projects, awards and research tools that are publicly findable.</p>" + "<p>TritonSHARE is a tool designed and built by the UC San Diego Library, in conjunction with several partners. It harvests metadata about research - that is, the tool collects information about contemporary research outputs from diverse sources and presents it in a single, unified interface. This allows for the discovery of many pieces of research in one place, rather than needing to search in multiple locations. TritonSHARE displays this information in a simple interface, exposing common elements.</p>" + "<h4><b>How does TritonSHARE work?</b></h4>" + "<p>TritonSHARE is built on top of an international research tool: the SHARE database. SHARE is an <a href=\"http://arl.org\">Association of Research Libraries (ARL)</a> and <a href=\"http://cos.io\">Center for Open Science</a> initiative whose mission is to maximize research impact by making research output widely accessible, discoverable, and reusable. SHARE is a free, open data set about research and scholarly activities across the scholarly life cycle. The SHARE database stores information on over 30 million research items, harvested from <a href=\"https://share.osf.io/sources\">more than 150 international sources</a>. These are presented in a searchable interface on the SHARE site: <a href=\"https://share.osf.io\">https://share.osf.io</a>.</p>" + "<p>TritonSHARE is a <i>custom view</i> into the SHARE database, searching only for UC San Diego-related resources. This is done behind the scenes via an actively-maintained search string that looks for all name variants for our campus, schools and research units. Based on this query, users can search whatever keywords, names, identifiers, resource types, etc. they want to find.</p>" + "<p>Once relevant items are found, TritonSHARE displays them in a consistent format, to allow for ease of comparison. If searchers want to find out more about certain items, or download data, clicking on the relevant link in the record will hand them off directly to the data resource.</p>" + "<h4><b>How do I get my research listed in TritonSHARE?</b></h4>" + "<p>In addition to harvesting information from sources, the Library can manually enter information you provide about your research data into the SHARE database. The Library also hosts a data repository, the <a href=\"https://library.ucsd.edu/dc\">UC San Diego Library Digital Collections</a>, one of the many sources harvested by SHARE. Contact the team at <a href=\"mailto:tritonshare@ucsd.edu\">tritonshare@ucsd.edu</a> if you would like to enter information about your published data into SHARE or deposit your data into the Digital Collections.</p>" + "<h4><b>I’m not finding items that I expect to be in TritonSHARE</b></h4>" + "<p>TritonSHARE undergoes <i>constant updating, revision and improvement</i>. Because it presents data that are hosted in thousands of locations around the world, consistency is a challenge. Sometimes metadata is present in the tool, but phrased in such a way to make discovery difficult. Sometimes data hasn’t been correctly attributed as associated with UC San Diego, or contains errors in the attribution. And sometimes the tool simply doesn’t know about research output that has been posted online but not indexed in one of the international sources from which SHARE currently harvests information.</p>" + "<h4><b>I see a problem or error in TritonSHARE</b></h4>" + "<p>The TritonSHARE team works daily to improve content in the tool, and greatly appreciates your feedback, comments, and requests for updates. You can contact the team directly at <a href=\"mailto:tritonshare@ucsd.edu\">tritonshare@ucsd.edu</a>, and we’ll look into your query and respond as soon as possible.</p>" + "<h4><b>Attributions</b></h4>" + "<p>SHARE is funded by the <a href=\"http://imls.gov\">Institute of Museum and Library Services</a> and the <a href=\"http://sloan.org\">Alfred P. Sloan Foundation</a>. The SHARE initiative was founded in 2013 by <a href=\"http://www.arl.org\">ARL</a>, the <a href=\"http://www.aau.edu\">Association of American Universities (AAU)</a>, and the <a href=\"http://aplu.org\">Association of Public and Land-grant Universities (APLU).</a></p>"
                    }]
                },
                "ucsd": {
                    dasboardName: 'Institution Overview Dashboard',
                    widgets: [{
                        widgetType: "text-widget",
                        name: "",
                        width: 12,
                        facetDash: "aboutDash",
                        content: "TritonSHARE presents information about UC San Diego research outputs, harvested from sources around the world.",
                        showButton: true
                    }, {
                        widgetType: "query-widget",
                        background_color: "000000",
                        name: "",
                        width: 8,
                        facetDashParameter: "query",
                        facetDash: "search"
                    }, {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 4,
                        facetDash: "search",
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                            parameterName: "sources"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            fontSize: 2,
                            fontColor: '#F44336',
                            minHeight: 115
                        }
                    }, {
                        chartType: 'highlightedCollections',
                        widgetType: 'list-widget',
                        name: 'Highlighted Collections',
                        width: 6,
                        facetDash: "objectDetail",
                        facetDashParameter: "id",
                        hideViewAll: true
                    }, {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Data Providers',
                        width: 6,
                        mappingType: "OBJECT_TO_ARRAY",
                        facetDash: "search",
                        facetDashParameter: "publishers",
                        hideViewAll: !transition.queryParams.all,
                        widgetSettings: {
                            viewAllRoute: 'providers',
                            showFilter: true,
                            mode: 'search',
                            aggregationTitle: 'publishers'
                        },
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                            parameterName: "sources"
                        }, {
                            parameterPath: ["query", "bool", "filter", 2, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "filter", 2, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["query", "bool", "filter", 2, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["aggregations", "publishers", "terms", "field"],
                            parameterName: "publisher_field",
                            defaultValue: "lists.publishers.id.exact"
                        }, {
                            parameterPath: ["aggregations", "publishers", "terms", "size"],
                            parameterName: "publisher_size",
                            defaultValue: 200
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }]
                    }, {
                        widgetType: "stacked-bars",
                        name: "Types",
                        width: 12,
                        facetDash: "search",
                        facetDashParameter: "type",
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                            parameterName: "sources"
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterPath: ["aggregations", "stackedData", "terms", "field"],
                            parameterName: "type_field",
                            defaultValue: "type.exact"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }]
                    }, {
                        chartType: 'recentlyAdded',
                        widgetType: 'list-widget',
                        name: 'Recently Added',
                        facetDash: "objectDetail",
                        facetDashParameter: "id",
                        hideViewAll: true,
                        width: 6,
                        post_body: {
                            "sort": { "date": { "order": "desc" } }
                        },
                        postBodyParams: [{
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                        }, {
                            parameterName: "recently_added_sort",
                            parameterPath: ["sort", "date", "order"],
                            defaultValue: "desc"
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }]
                    }, {
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Contributors',
                        width: 6,
                        facetDash: "search",
                        facetDashParameter: "contributors",
                        dataType: 'contributors',
                        post_body: {
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
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"]
                        }]
                    }, {
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
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "minimum_should_match"],
                            parameterName: "shouldMatch",
                            defaultValue: 1
                        }, {
                            parameterPath: ["query", "bool", "should"],
                            defaultValue: ucsd_query
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"],
                            parameterName: "sources"
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }],
                        widgetSettings: {
                            helpText: 'Click on a section to view associated records'
                        }
                    }, {
                        chartType: 'tagsList',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        facetDash: "search",
                        facetDashParameter: "tags",
                        width: 6,
                        dataType: 'tags',
                        post_body: {
                            from: 0,
                            aggregations: {
                                listWidgetData: {
                                    terms: {
                                        field: 'tags.exact',
                                        exclude: tag_blacklist,
                                        size: 10
                                    }
                                }
                            }
                        },
                        postBodyParams: [{
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"]
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }]
                    }]
                },
                contributors: {
                    dashboardName: 'Top Contributors',
                    wrapperClass: 'index-page',
                    widgets: [{
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Contributors',
                        width: 12,
                        facetDash: "search",
                        facetDashParameter: "contributors",
                        dataType: 'contributors',
                        hideViewAll: true,
                        post_body: {
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
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }]
                    }]
                },
                tags: {
                    dashboardName: 'Top Tags',
                    wrapperClass: 'index-page',
                    widgets: [{
                        chartType: 'tagsList',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        width: 12,
                        indexVersion: 3,
                        hideViewAll: true,
                        post_body: {
                            "aggregations": {
                                "listWidgetData": {
                                    "terms": {
                                        "field": 'tags.exact',
                                        "size": 100,
                                        exclude: tag_blacklist
                                    }
                                }
                            }
                        },
                        postBodyParams: [{
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterName: "topic",
                            parameterPath: ["query", "bool", "filter", 0, "term", "tags"]
                        }, {
                            parameterName: "institution",
                            parameterPath: ["query", "bool", "filter", 1, "term", "sources"]
                        }, {
                            parameterName: "scholar",
                            parameterPath: ["query", "bool", "filter", 2, "term", "contributors.exact"]
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        facetDash: "search",
                        facetDashParameter: "tags"
                    }]
                },
                providers: {
                    dashboardName: 'Data providers',
                    wrapperClass: 'index-page',
                    widgets: [{
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Data providers',
                        width: 12,
                        facetDash: "search",
                        facetDashParameter: "publishers",
                        hideViewAll: true,
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should", "minimum_should_match"],
                            parameterName: "shouldMatch",
                            defaultValue: 1
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should"],
                            defaultValue: ucsd_query
                        }, {
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources.raw"],
                            parameterName: "sources"
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["aggregations", "listWidgetData", "terms", "field"],
                            parameterName: "publisher_field",
                            defaultValue: "lists.publishers.id.exact"
                        }, {
                            parameterPath: ["aggregations", "listWidgetData", "terms", "size"],
                            parameterName: "publisher_size",
                            defaultValue: 200
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }]
                    }]
                },
                awards: {
                    "dashboardName": "Awards Dashboard",
                    "widgets": [{
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
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should", "minimum_should_match"],
                            parameterName: "shouldMatch",
                            defaultValue: 1
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should"],
                            defaultValue: ucsd_query
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                            parameterName: "sources"
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            helpText: 'Click on a section to view associated records'
                        }
                    }]
                }
            };

            var dashboard = dashboards[params.dashboard];
            var widgets = dashboard.widgets;
            var array_keys = new Set(["filter", "must", "must_not"]);
            dashboard.widgets = widgets.map(function (widget) {
                if (widget.postBodyParams) {
                    widget.postBodyParams.forEach(function (param) {

                        var parameter_value = undefined;
                        if (param.parameterName in transition.queryParams) {
                            if (param.parameterName === "page") {
                                parameter_value = Number(transition.queryParams[param.parameterName]) * 10 - 10;
                            } else {
                                parameter_value = transition.queryParams[param.parameterName];
                            }
                        } else if ("defaultValue" in param) {
                            parameter_value = param.defaultValue;
                        } else {
                            return;
                        }
                        var path_parts = param.parameterPath.slice(0, -1);
                        var parameter_key = param.parameterPath[param.parameterPath.length - 1];
                        var nested_object = path_parts.reduce(function (nested, pathPart) {
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

        setupController: function setupController(controller, model) {

            this._super(controller, model);

            if (controller.get('query') === undefined) {
                // This will change depending on what default will be in the storage backend.
                controller.set('query', model.dashboard.query);
            }

            controller.set('parameters', model.parameters);

            controller.set('institutionName', "eScholarship @ University of California");
            controller.set('wrapperClass', model.dashboard.wrapperClass);
            controller.set('widgets', model.dashboard.widgets);
        }

    });
});
define('analytics-dashboard/serializers/citation', ['exports', 'ember-osf/serializers/citation'], function (exports, _emberOsfSerializersCitation) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersCitation['default'];
    }
  });
});
define('analytics-dashboard/serializers/collection', ['exports', 'ember-osf/serializers/collection'], function (exports, _emberOsfSerializersCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersCollection['default'];
    }
  });
});
define('analytics-dashboard/serializers/comment-report', ['exports', 'ember-osf/serializers/comment-report'], function (exports, _emberOsfSerializersCommentReport) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersCommentReport['default'];
    }
  });
});
define('analytics-dashboard/serializers/comment', ['exports', 'ember-osf/serializers/comment'], function (exports, _emberOsfSerializersComment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersComment['default'];
    }
  });
});
define('analytics-dashboard/serializers/contributor', ['exports', 'ember-osf/serializers/contributor'], function (exports, _emberOsfSerializersContributor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersContributor['default'];
    }
  });
});
define('analytics-dashboard/serializers/draft-registration', ['exports', 'ember-osf/serializers/draft-registration'], function (exports, _emberOsfSerializersDraftRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersDraftRegistration['default'];
    }
  });
});
define('analytics-dashboard/serializers/file-contents', ['exports', 'ember-osf/serializers/file-contents'], function (exports, _emberOsfSerializersFileContents) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFileContents['default'];
    }
  });
});
define('analytics-dashboard/serializers/file-provider', ['exports', 'ember-osf/serializers/file-provider'], function (exports, _emberOsfSerializersFileProvider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFileProvider['default'];
    }
  });
});
define('analytics-dashboard/serializers/file-version', ['exports', 'ember-osf/serializers/file-version'], function (exports, _emberOsfSerializersFileVersion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFileVersion['default'];
    }
  });
});
define('analytics-dashboard/serializers/file', ['exports', 'ember-osf/serializers/file'], function (exports, _emberOsfSerializersFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersFile['default'];
    }
  });
});
define('analytics-dashboard/serializers/institution', ['exports', 'ember-osf/serializers/institution'], function (exports, _emberOsfSerializersInstitution) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersInstitution['default'];
    }
  });
});
define('analytics-dashboard/serializers/license', ['exports', 'ember-osf/serializers/license'], function (exports, _emberOsfSerializersLicense) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersLicense['default'];
    }
  });
});
define('analytics-dashboard/serializers/linked-node', ['exports', 'ember-osf/serializers/linked-node'], function (exports, _emberOsfSerializersLinkedNode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersLinkedNode['default'];
    }
  });
});
define('analytics-dashboard/serializers/metaschema', ['exports', 'ember-osf/serializers/metaschema'], function (exports, _emberOsfSerializersMetaschema) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersMetaschema['default'];
    }
  });
});
define('analytics-dashboard/serializers/node-link', ['exports', 'ember-osf/serializers/node-link'], function (exports, _emberOsfSerializersNodeLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersNodeLink['default'];
    }
  });
});
define('analytics-dashboard/serializers/node', ['exports', 'ember-osf/serializers/node'], function (exports, _emberOsfSerializersNode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersNode['default'];
    }
  });
});
define('analytics-dashboard/serializers/osf-serializer', ['exports', 'ember-osf/serializers/osf-serializer'], function (exports, _emberOsfSerializersOsfSerializer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersOsfSerializer['default'];
    }
  });
});
define('analytics-dashboard/serializers/preprint', ['exports', 'ember-osf/serializers/preprint'], function (exports, _emberOsfSerializersPreprint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersPreprint['default'];
    }
  });
});
define('analytics-dashboard/serializers/registration', ['exports', 'ember-osf/serializers/registration'], function (exports, _emberOsfSerializersRegistration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersRegistration['default'];
    }
  });
});
define('analytics-dashboard/serializers/taxonomy', ['exports', 'ember-osf/serializers/taxonomy'], function (exports, _emberOsfSerializersTaxonomy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersTaxonomy['default'];
    }
  });
});
define('analytics-dashboard/serializers/user', ['exports', 'ember-osf/serializers/user'], function (exports, _emberOsfSerializersUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfSerializersUser['default'];
    }
  });
});
define('analytics-dashboard/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('analytics-dashboard/services/current-user', ['exports', 'ember-osf/services/current-user'], function (exports, _emberOsfServicesCurrentUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfServicesCurrentUser['default'];
    }
  });
});
define('analytics-dashboard/services/drag-coordinator', ['exports', 'ember-drag-drop/services/drag-coordinator'], function (exports, _emberDragDropServicesDragCoordinator) {
  exports['default'] = _emberDragDropServicesDragCoordinator['default'];
});
define('analytics-dashboard/services/file-manager', ['exports', 'ember-osf/services/file-manager'], function (exports, _emberOsfServicesFileManager) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfServicesFileManager['default'];
    }
  });
});
define('analytics-dashboard/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _emberI18nServicesI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nServicesI18n['default'];
    }
  });
});
define('analytics-dashboard/services/moment', ['exports', 'ember', 'analytics-dashboard/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _analyticsDashboardConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_analyticsDashboardConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('analytics-dashboard/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _emberSimpleAuthServicesSession) {
  exports['default'] = _emberSimpleAuthServicesSession['default'];
});
define('analytics-dashboard/services/toast', ['exports', 'ember-toastr/services/toast'], function (exports, _emberToastrServicesToast) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberToastrServicesToast['default'];
    }
  });
});
define('analytics-dashboard/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define("analytics-dashboard/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "main-application");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "wrapper dashboard");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ucsd_header");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "container");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-xs-6");
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "navbar-brand");
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "style", "color: rgb(255, 205, 0);");
        var el9 = dom.createTextNode("TRITON");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("SHARE");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                   ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-xs-6 text-right");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "/images/logo_UCSD.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "row");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "wrapper related-services");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        var el5 = dom.createTextNode("Related Resources and Services");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "row");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col-md-4 text-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://libraries.ucsd.edu/services/data-curation/");
        dom.setAttribute(el6, "class", "btn btn-lg related-services-button text-center");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "/images/logo-rdcp-white.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col-md-4 text-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "https://share.osf.io/");
        dom.setAttribute(el6, "class", "btn btn-lg related-services-button");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "/images/share-logo.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col-md-4 text-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "https://ucsd.edu/");
        dom.setAttribute(el6, "class", "btn btn-lg related-services-button");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "/images/UCSanDiegoLogo-Blue.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1, 1, 1]);
        var element3 = dom.childAt(element2, [1, 1]);
        var element4 = dom.childAt(element2, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createElementMorph(element3);
        morphs[1] = dom.createElementMorph(element4);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(element0, 5, 5);
        morphs[4] = dom.createMorphAt(element0, 7, 7);
        return morphs;
      },
      statements: [["element", "action", ["transitionToHome"], [], ["loc", [null, [7, 46], [7, 75]]], 0, 0], ["element", "action", ["transitionToHome"], [], ["loc", [null, [9, 25], [9, 54]]], 0, 0], ["content", "outlet", ["loc", [null, [17, 16], [17, 26]]], 0, 0, 0, 0], ["content", "osf-copyright", ["loc", [null, [43, 4], [43, 21]]], 0, 0, 0, 0], ["content", "osf-mode-footer", ["loc", [null, [44, 4], [44, 23]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("analytics-dashboard/templates/components/bs-accordion-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-accordion-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "panel-body");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [10, 8], [10, 17]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-accordion-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "role", "tab");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2, "class", "panel-title");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "#");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["panel-heading ", ["subexpr", "if", [["get", "collapsed", ["loc", [null, [1, 68], [1, 77]]], 0, 0, 0, 0], "collapsed", "expanded"], [], ["loc", [null, [1, 63], [1, 102]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["toggleActive"], [], ["loc", [null, [1, 16], [1, 41]]], 0, 0], ["content", "title", ["loc", [null, [4, 12], [4, 21]]], 0, 0, 0, 0], ["block", "bs-collapse", [], ["collapsed", ["subexpr", "@mut", [["get", "collapsed", ["loc", [null, [8, 25], [8, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "panel-collapse"], 0, null, ["loc", [null, [8, 0], [12, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/bs-alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 0
              }
            },
            "moduleName": "analytics-dashboard/templates/components/bs-alert.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "button");
            dom.setAttribute(el1, "class", "close");
            dom.setAttribute(el1, "aria-label", "Close");
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "aria-hidden", "true");
            var el3 = dom.createTextNode("×");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["dismiss"], [], ["loc", [null, [3, 59], [3, 79]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "dismissible", ["loc", [null, [2, 6], [2, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]], ["content", "yield", ["loc", [null, [5, 0], [5, 9]]], 0, 0, 0, 0]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-alert.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "hidden", ["loc", [null, [1, 10], [1, 16]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [6, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/bs-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 37
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "icon", ["loc", [null, [1, 24], [1, 28]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 61
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon", ["loc", [null, [1, 6], [1, 10]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [1, 44]]]], ["content", "text", ["loc", [null, [1, 44], [1, 52]]], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [1, 52], [1, 61]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/bs-form-element", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 31
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-form-element.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "partial", [["get", "formElementTemplate", ["loc", [null, [1, 10], [1, 29]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 31]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("analytics-dashboard/templates/components/bs-form-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-form-group.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [3, 41], [3, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 7
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-form-group.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0], ["block", "if", [["get", "hasFeedback", ["loc", [null, [2, 6], [2, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/bs-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("analytics-dashboard/templates/components/bs-modal-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 5,
              "column": 8
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-modal-header", [], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [4, 36], [4, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [4, 54], [4, 65]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 12], [4, 67]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 12
              },
              "end": {
                "line": 9,
                "column": 12
              }
            },
            "moduleName": "analytics-dashboard/templates/components/bs-modal-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "yield", ["loc", [null, [8, 16], [8, 25]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "bs-modal-body", [], [], 0, null, ["loc", [null, [7, 12], [9, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 8
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [11, 12], [11, 21]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 16,
              "column": 8
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "bs-modal-footer", ["loc", [null, [15, 12], [15, 31]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-modal-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-content");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 2, 2);
        morphs[3] = dom.createMorphAt(element1, 4, 4);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["modal-dialog ", ["get", "sizeClass", ["loc", [null, [1, 27], [1, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "header", ["loc", [null, [3, 14], [3, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 8], [5, 15]]]], ["block", "if", [["get", "body", ["loc", [null, [6, 14], [6, 18]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [6, 8], [12, 15]]]], ["block", "if", [["get", "footer", ["loc", [null, [14, 14], [14, 20]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [14, 8], [16, 15]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("analytics-dashboard/templates/components/bs-modal-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [2, 12], [2, 16]]], 0, 0, 0, 0]], [], ["loc", [null, [2, 4], [2, 18]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 8
                },
                "end": {
                  "line": 5,
                  "column": 66
                }
              },
              "moduleName": "analytics-dashboard/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [5, 52], [5, 66]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 8
                },
                "end": {
                  "line": 6,
                  "column": 96
                }
              },
              "moduleName": "analytics-dashboard/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "submitTitle", ["loc", [null, [6, 81], [6, 96]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "analytics-dashboard/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "default", "action", "close"], 0, null, ["loc", [null, [5, 8], [5, 80]]]], ["block", "bs-button", [], ["type", "primary", "buttonType", "submit", "disabled", ["subexpr", "@mut", [["get", "submitDisabled", ["loc", [null, [6, 65], [6, 79]]], 0, 0, 0, 0]], [], [], 0, 0]], 1, null, ["loc", [null, [6, 8], [6, 110]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 8,
                  "column": 66
                }
              },
              "moduleName": "analytics-dashboard/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [8, 52], [8, 66]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "analytics-dashboard/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "primary", "action", "close"], 0, null, ["loc", [null, [8, 8], [8, 80]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasSubmitButton", ["loc", [null, [4, 10], [4, 25]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 4], [9, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 7
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-modal-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [10, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("analytics-dashboard/templates/components/bs-modal-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "close");
          dom.setAttribute(el1, "aria-label", "Close");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "aria-hidden", "true");
          var el3 = dom.createTextNode("×");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["close"], [], ["loc", [null, [2, 59], [2, 77]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [5, 12], [5, 16]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 18]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "modal-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [7, 28], [7, 37]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-modal-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "closeButton", ["loc", [null, [1, 6], [1, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("analytics-dashboard/templates/components/bs-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 0
              }
            },
            "moduleName": "analytics-dashboard/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "this", ["loc", [null, [4, 10], [4, 14]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 2], [4, 16]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 0
              },
              "end": {
                "line": 10,
                "column": 0
              }
            },
            "moduleName": "analytics-dashboard/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'id');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["modal-backdrop ", ["subexpr", "if", [["get", "fade", ["loc", [null, [9, 34], [9, 38]]], 0, 0, 0, 0], "fade"], [], ["loc", [null, [9, 29], [9, 47]]], 0, 0], " ", ["subexpr", "if", [["get", "in", ["loc", [null, [9, 53], [9, 55]]], 0, 0, 0, 0], "in"], [], ["loc", [null, [9, 48], [9, 62]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "id", ["concat", [["get", "backdropId", ["loc", [null, [9, 70], [9, 80]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "bs-modal-dialog", [], ["close", ["subexpr", "action", ["close"], [], ["loc", [null, [3, 25], [3, 41]]], 0, 0], "fade", ["subexpr", "@mut", [["get", "fade", ["loc", [null, [3, 47], [3, 51]]], 0, 0, 0, 0]], [], [], 0, 0], "in", ["subexpr", "@mut", [["get", "in", ["loc", [null, [3, 55], [3, 57]]], 0, 0, 0, 0]], [], [], 0, 0], "id", ["subexpr", "@mut", [["get", "modalId", ["loc", [null, [3, 61], [3, 68]]], 0, 0, 0, 0]], [], [], 0, 0], "title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [3, 75], [3, 80]]], 0, 0, 0, 0]], [], [], 0, 0], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [3, 93], [3, 104]]], 0, 0, 0, 0]], [], [], 0, 0], "keyboard", ["subexpr", "@mut", [["get", "keyboard", ["loc", [null, [3, 114], [3, 122]]], 0, 0, 0, 0]], [], [], 0, 0], "header", ["subexpr", "@mut", [["get", "header", ["loc", [null, [3, 130], [3, 136]]], 0, 0, 0, 0]], [], [], 0, 0], "body", ["subexpr", "@mut", [["get", "body", ["loc", [null, [3, 142], [3, 146]]], 0, 0, 0, 0]], [], [], 0, 0], "footer", ["subexpr", "@mut", [["get", "footer", ["loc", [null, [3, 154], [3, 160]]], 0, 0, 0, 0]], [], [], 0, 0], "size", ["subexpr", "@mut", [["get", "size", ["loc", [null, [3, 166], [3, 170]]], 0, 0, 0, 0]], [], [], 0, 0], "backdropClose", ["subexpr", "@mut", [["get", "backdropClose", ["loc", [null, [3, 185], [3, 198]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [3, 0], [5, 20]]]], ["block", "if", [["get", "showBackdrop", ["loc", [null, [8, 6], [8, 18]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [8, 0], [10, 7]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 19
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "ember-wormhole", [], ["to", "ember-bootstrap-modal-container", "renderInPlace", ["subexpr", "@mut", [["get", "_renderInPlace", ["loc", [null, [1, 69], [1, 83]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [1, 0], [13, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/bs-progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "analytics-dashboard/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [4, 16], [4, 30]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 8], [4, 32]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "analytics-dashboard/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("%\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [6, 8], [6, 26]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [3, 10], [3, 18]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 4], [7, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "analytics-dashboard/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [10, 38], [10, 52]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 30], [10, 54]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "analytics-dashboard/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("%");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [12, 30], [12, 48]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [9, 10], [9, 18]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [9, 4], [13, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-progress-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showLabel", ["loc", [null, [2, 6], [2, 15]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 0], [15, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("analytics-dashboard/templates/components/bs-progress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-progress.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("analytics-dashboard/templates/components/bs-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1, "disabled", "");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'selected');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "selected", ["subexpr", "bs-not", [["get", "value", ["loc", [null, [2, 39], [2, 44]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [2, 46]]], 0, 0], 0, 0, 0, 0], ["content", "prompt", ["loc", [null, [3, 8], [3, 18]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "value", ["concat", [["subexpr", "bs-read-path", [["get", "item", ["loc", [null, [8, 34], [8, 38]]], 0, 0, 0, 0], ["get", "optionValuePath", ["loc", [null, [8, 39], [8, 54]]], 0, 0, 0, 0]], [], ["loc", [null, [8, 19], [8, 56]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selected", ["subexpr", "bs-eq", [["get", "item", ["loc", [null, [9, 29], [9, 33]]], 0, 0, 0, 0], ["get", "value", ["loc", [null, [9, 34], [9, 39]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [9, 41]]], 0, 0], 0, 0, 0, 0], ["inline", "bs-read-path", [["get", "item", ["loc", [null, [10, 23], [10, 27]]], 0, 0, 0, 0], ["get", "optionLabelPath", ["loc", [null, [10, 28], [10, 43]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 8], [10, 45]]], 0, 0]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 9
          }
        },
        "moduleName": "analytics-dashboard/templates/components/bs-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "prompt", ["loc", [null, [1, 6], [1, 12]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [5, 7]]]], ["block", "each", [["get", "content", ["loc", [null, [7, 8], [7, 15]]], 0, 0, 0, 0]], ["key", "@identity"], 1, null, ["loc", [null, [7, 0], [12, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("analytics-dashboard/templates/components/draggable-object-target", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/draggable-object-target.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["element", "action", ["acceptForDrop"], [], ["loc", [null, [2, 14], [2, 40]]], 0, 0], ["content", "yield", ["loc", [null, [3, 4], [3, 13]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/draggable-object-target.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [6, 2], [6, 11]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/draggable-object-target.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "enableClicking", ["loc", [null, [1, 6], [1, 20]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("analytics-dashboard/templates/components/draggable-object", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/draggable-object.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["element", "action", ["selectForDrag"], [], ["loc", [null, [2, 14], [2, 40]]], 0, 0], ["content", "yield", ["loc", [null, [3, 4], [3, 13]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/draggable-object.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [6, 2], [6, 11]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 7
          }
        },
        "moduleName": "analytics-dashboard/templates/components/draggable-object.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "enableClicking", ["loc", [null, [1, 6], [1, 20]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/errors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/errors.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "help-block");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "validationMessages.firstObject", ["loc", [null, [2, 29], [2, 63]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/errors.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showValidationMessages", ["loc", [null, [1, 6], [1, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/feedback-icon.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [2, 41], [2, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/feedback-icon.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasFeedback", ["loc", [null, [1, 6], [1, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "checkbox");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [1, 14], [1, 38]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [1, 43], [1, 73]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 25], [4, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 54], [4, 59]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 69], [4, 77]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 87], [4, 95]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 12], [4, 97]]], 0, 0], ["content", "label", ["loc", [null, [4, 98], [4, 107]]], 0, 0, 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [7, 4], [7, 48]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 6,
                "column": 8
              }
            },
            "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 20], [5, 25]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 26], [5, 39]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 40], [5, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 12], [5, 52]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 8,
                "column": 8
              }
            },
            "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 26], [7, 39]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 45], [7, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 55], [7, 66]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 73], [7, 78]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 91], [7, 102]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 113], [7, 122]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 132], [7, 140]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 150], [7, 158]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 12], [7, 160]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 14], [4, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 8], [8, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 8], [9, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 8], [10, 52]]], 0, 0]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 8
              },
              "end": {
                "line": 16,
                "column": 8
              }
            },
            "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [15, 20], [15, 25]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [15, 26], [15, 39]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [15, 40], [15, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [15, 12], [15, 52]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 8
              },
              "end": {
                "line": 18,
                "column": 8
              }
            },
            "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [17, 28], [17, 32]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [17, 38], [17, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [17, 56], [17, 61]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [17, 74], [17, 85]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [17, 96], [17, 105]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [17, 115], [17, 123]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [17, 133], [17, 141]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [17, 12], [17, 143]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [13, 18], [13, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [13, 47], [13, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "hasBlock", ["loc", [null, [14, 14], [14, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [14, 8], [18, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [19, 8], [19, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [20, 8], [20, 52]]], 0, 0]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [22, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/horizontal/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 23], [4, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 42], [4, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 55], [4, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 79], [4, 98]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 115], [4, 134]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 141], [4, 146]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 156], [4, 164]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 174], [4, 182]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 8], [4, 184]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-select", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 25], [10, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [10, 38], [10, 45]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [10, 62], [10, 81]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [10, 98], [10, 117]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 124], [10, 129]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 8], [10, 131]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 25], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 44], [4, 48]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 55], [4, 60]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 73], [4, 84]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 95], [4, 104]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 110], [4, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 120], [4, 124]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 134], [4, 142]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 152], [4, 160]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 8], [4, 162]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-textarea", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 27], [10, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 38], [10, 43]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [10, 56], [10, 67]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [10, 78], [10, 87]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [10, 93], [10, 97]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [10, 103], [10, 107]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [10, 117], [10, 125]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [10, 135], [10, 143]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 8], [10, 145]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/horizontal/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/inline/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 8], [3, 93]]], 0, 0], ["content", "label", ["loc", [null, [3, 94], [3, 103]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/inline/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 32], [5, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 44]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 4], [7, 152]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/inline/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]], 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/inline/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/inline/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/inline/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 176]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/inline/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/inline/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 36], [4, 40]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 47], [4, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 102], [4, 106]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 112], [4, 116]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 126], [4, 134]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 144], [4, 152]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 154]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/vertical/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 8], [3, 93]]], 0, 0], ["content", "label", ["loc", [null, [3, 94], [3, 103]]], 0, 0, 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 32], [5, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 44]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 4], [7, 152]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/vertical/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 0], [10, 44]]], 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/vertical/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/vertical/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/vertical/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 176]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/form-element/vertical/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/form-element/vertical/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 37], [4, 42]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 48], [4, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 106], [4, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 124], [4, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 138], [4, 142]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 148], [4, 152]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 154]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/object-bin", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 4
                },
                "end": {
                  "line": 7,
                  "column": 4
                }
              },
              "moduleName": "analytics-dashboard/templates/components/object-bin.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "yield", [["get", "obj", ["loc", [null, [6, 14], [6, 17]]], 0, 0, 0, 0]], [], ["loc", [null, [6, 6], [6, 19]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 2
              }
            },
            "moduleName": "analytics-dashboard/templates/components/object-bin.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "draggable-object", [], ["action", "handleObjectDragged", "content", ["subexpr", "@mut", [["get", "obj", ["loc", [null, [5, 61], [5, 64]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [5, 4], [7, 25]]]]],
          locals: ["obj"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/components/object-bin.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "object-bin-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["content", "name", ["loc", [null, [2, 32], [2, 40]]], 0, 0, 0, 0], ["block", "each", [["get", "model", ["loc", [null, [4, 10], [4, 15]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 2], [8, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/components/object-bin.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "draggable-object-target", [], ["action", "handleObjectDropped"], 0, null, ["loc", [null, [1, 0], [9, 28]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/components/sortable-objects", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "analytics-dashboard/templates/components/sortable-objects.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("analytics-dashboard/templates/dashboards", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/dashboards.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("analytics-dashboard/templates/dashboards/dashboard", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 4,
              "column": 4
            }
          },
          "moduleName": "analytics-dashboard/templates/dashboards/dashboard.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "widget-adapter", [], ["options", ["subexpr", "@mut", [["get", "addableList", ["loc", [null, [3, 33], [3, 44]]], 0, 0, 0, 0]], [], [], 0, 0], "addChart", ["subexpr", "action", ["addChart"], [], ["loc", [null, [3, 54], [3, 73]]], 0, 0], "removeChart", ["subexpr", "action", ["removeChart"], [], ["loc", [null, [3, 86], [3, 108]]], 0, 0], "item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [3, 114], [3, 118]]], 0, 0, 0, 0]], [], [], 0, 0], "widgets", ["subexpr", "@mut", [["get", "widgets", ["loc", [null, [3, 127], [3, 134]]], 0, 0, 0, 0]], [], [], 0, 0], "dashboardSaveWidget", ["subexpr", "action", ["dashboardSaveWidget"], [], ["loc", [null, [3, 155], [3, 185]]], 0, 0], "parameters", ["subexpr", "@mut", [["get", "parameters", ["loc", [null, [3, 197], [3, 207]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 8], [3, 209]]], 0, 0]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/dashboards/dashboard.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("\n<div class='centered'>\n    <button class='restore-widget-button' onclick = {{action 'restoreWidgets'}} style = 'clear:both;'>{{fa-icon 'folder-open'}}</button>\n    <button class='add-widget-button' onclick={{action 'addChart'}} style='clear:both;'>{{fa-icon 'plus'}}</button>\n</div>\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "wrapperClass", ["loc", [null, [1, 14], [1, 26]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "widgets", ["loc", [null, [2, 12], [2, 19]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 4], [4, 13]]]], ["content", "outlet", ["loc", [null, [14, 0], [14, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("analytics-dashboard/templates/dashboards/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/dashboards/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary");
          var el2 = dom.createTextNode("Curated Data");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "analytics-dashboard/templates/dashboards/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary");
          var el2 = dom.createTextNode("All UC San Diego Data");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "analytics-dashboard/templates/dashboards/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "widget available-dashes");
        var el2 = dom.createTextNode("\n       ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Welcome to TRITONSHARE");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        This project is a collaboration between UC San Diego, SHARE, and the Ceter for Open Science. Be aware that this application is a protoype and is subject to change.\n\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Available Dashboards");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("Primary View");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 9, 9);
        morphs[1] = dom.createMorphAt(element0, 13, 13);
        return morphs;
      },
      statements: [["block", "link-to", ["dashboards.dashboard", "ucsd", ["subexpr", "query-params", [], ["sources", "UC San Diego Library"], ["loc", [null, [11, 41], [11, 86]]], 0, 0]], [], 0, null, ["loc", [null, [11, 0], [13, 12]]]], ["block", "link-to", ["dashboards.dashboard", "ucsd"], [], 1, null, ["loc", [null, [15, 0], [17, 12]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('analytics-dashboard/transforms/embed', ['exports', 'ember-osf/transforms/embed'], function (exports, _emberOsfTransformsEmbed) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfTransformsEmbed['default'];
    }
  });
});
define('analytics-dashboard/transforms/links', ['exports', 'ember-osf/transforms/links'], function (exports, _emberOsfTransformsLinks) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfTransformsLinks['default'];
    }
  });
});
define('analytics-dashboard/utils/ajax-helpers', ['exports', 'ember-osf/utils/ajax-helper'], function (exports, _emberOsfUtilsAjaxHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsAjaxHelper['default'];
    }
  });
  Object.defineProperty(exports, 'authenticatedAJAX', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsAjaxHelper.authenticatedAJAX;
    }
  });
});
define('analytics-dashboard/utils/auth', ['exports', 'ember-osf/utils/auth'], function (exports, _emberOsfUtilsAuth) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsAuth['default'];
    }
  });
});
define("analytics-dashboard/utils/currency-rounder", ["exports"], function (exports) {
    exports["default"] = currencyRounder;
    /*
      Returns letters with currencies to shorten them.
      Taken from: http://stackoverflow.com/questions/36734201/how-to-convert-numbers-to-million-in-javascript
     */

    function currencyRounder(rawValue) {
        if (Math.abs(Number(rawValue)) >= 1.0e+9) {
            return Math.round(Math.abs(Number(rawValue)) / 1.0e+9) + "B";
        }
        if (Math.abs(Number(rawValue)) >= 1.0e+6) {
            return Math.round(Math.abs(Number(rawValue)) / 1.0e+6) + "M";
        }
        if (Math.abs(Number(rawValue)) >= 1.0e+3) {
            return Math.round(Math.abs(Number(rawValue)) / 1.0e+3) + "K";
        }
        return Math.abs(Number(rawValue));
    }
});
define('analytics-dashboard/utils/date-interval', ['exports'], function (exports) {
  exports['default'] = dateInterval;
  /*
    Returns a suitable date interval in string for charting depending on how big the date range is
   */

  function dateInterval(d1, d2) {
    if (d2 - d1 >= 31622400000) {
      // If our dates are more than a year apart
      return 'month'; // We want to increment our TS data by months
    }
    if (7948800000 <= d2 - d1 && d2 - d1 < 31622400000) {
      // If our dates are less than a year apart but more than three months apart
      return 'week'; // We want to increment our TS data by weeks
    }
    if (d2 - d1 < 7948800000) {
      // If our data are less than three months apart
      return 'day'; // We want to increment our TS data by days
    }
  }
});
define('analytics-dashboard/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _emberI18nUtilsI18nCompileTemplate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nCompileTemplate['default'];
    }
  });
});
define('analytics-dashboard/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _emberI18nUtilsI18nMissingMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nMissingMessage['default'];
    }
  });
});
define('analytics-dashboard/utils/load-relationship', ['exports', 'ember-osf/utils/load-relationship'], function (exports, _emberOsfUtilsLoadRelationship) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsLoadRelationship['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('analytics-dashboard/config/environment', ['ember'], function(Ember) {
  var prefix = 'analytics-dashboard';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("analytics-dashboard/app")["default"].create({"LOG_RESOLVER":false,"LOG_ACTIVE_GENERATION":false,"LOG_TRANSITIONS":false,"LOG_TRANSITIONS_INTERNAL":false,"LOG_VIEW_LOOKUPS":false,"GRANTS_BACKEND":"http://127.0.0.1:8000/api","name":"analytics-dashboard","version":"0.0.0+cc50e4f3"});
}

/* jshint ignore:end */
//# sourceMappingURL=analytics-dashboard.map
