define("ember-osf/components/file-widget/template", ["exports"], function (exports) {
  "use strict";

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
                  "line": 11,
                  "column": 20
                },
                "end": {
                  "line": 15,
                  "column": 20
                }
              },
              "moduleName": "modules/ember-osf/components/file-widget/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1, "class", "btn btn-default login-button");
              var el2 = dom.createTextNode("\n                            Login to OSF\n                        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element3 = dom.childAt(fragment, [1]);
              var morphs = new Array(1);
              morphs[0] = dom.createAttrMorph(element3, 'onclick');
              return morphs;
            },
            statements: [["attribute", "onclick", ["subexpr", "action", ["login"], ["target", ["get", "popup", ["loc", [null, [12, 101], [12, 106]]], 0, 0, 0, 0]], ["loc", [null, [null, null], [12, 108]]], 0, 0], 0, 0, 0, 0]],
            locals: ["popup"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 16
              },
              "end": {
                "line": 16,
                "column": 16
              }
            },
            "moduleName": "modules/ember-osf/components/file-widget/template.hbs"
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
          statements: [["block", "oauth-popup", [], ["authUrl", ["subexpr", "@mut", [["get", "authUrl", ["loc", [null, [11, 43], [11, 50]]], 0, 0, 0, 0]], [], [], 0, 0], "loginSuccess", ["subexpr", "action", ["loginSuccess"], [], ["loc", [null, [11, 64], [11, 87]]], 0, 0], "loginFail", ["subexpr", "action", ["loginFail"], [], ["loc", [null, [11, 98], [11, 118]]], 0, 0]], 0, null, ["loc", [null, [11, 20], [15, 36]]]]],
          locals: [],
          templates: [child0]
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
                  "line": 18,
                  "column": 20
                },
                "end": {
                  "line": 20,
                  "column": 20
                }
              },
              "moduleName": "modules/ember-osf/components/file-widget/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("img");
              dom.setAttribute(el1, "class", "icon-flag");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("strong");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element2 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element2, 'src');
              morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
              return morphs;
            },
            statements: [["attribute", "src", ["concat", [["get", "country.flagUrl", ["loc", [null, [19, 36], [19, 51]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "node.title", ["loc", [null, [19, 82], [19, 96]]], 0, 0, 0, 0]],
            locals: ["node"],
            templates: []
          };
        })();
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
                "line": 21,
                "column": 16
              }
            },
            "moduleName": "modules/ember-osf/components/file-widget/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("label");
            var el2 = dom.createTextNode("Choose an OSF project:");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "power-select", [], ["options", ["subexpr", "@mut", [["get", "userNodes", ["loc", [null, [18, 44], [18, 53]]], 0, 0, 0, 0]], [], [], 0, 0], "closeOnSelect", false, "searchField", "title", "selected", ["subexpr", "@mut", [["get", "selectedNode", ["loc", [null, [18, 103], [18, 115]]], 0, 0, 0, 0]], [], [], 0, 0], "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "selectedNode", ["loc", [null, [18, 138], [18, 150]]], 0, 0, 0, 0]], [], ["loc", [null, [18, 133], [18, 151]]], 0, 0]], [], ["loc", [null, [18, 125], [18, 152]]], 0, 0]], 0, null, ["loc", [null, [18, 20], [20, 37]]]]],
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
              "column": 8
            },
            "end": {
              "line": 23,
              "column": 8
            }
          },
          "moduleName": "modules/ember-osf/components/file-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "col-sm-6");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "dropzone-box");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "col-sm-6");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["inline", "dropzone-widget", [], ["preUpload", ["subexpr", "@mut", [["get", "attrs.preUpload", ["loc", [null, [6, 48], [6, 63]]], 0, 0, 0, 0]], [], [], 0, 0], "buildUrl", ["subexpr", "@mut", [["get", "buildUrl", ["loc", [null, [6, 73], [6, 81]]], 0, 0, 0, 0]], [], [], 0, 0], "listeners", ["subexpr", "@mut", [["get", "dropzoneListeners", ["loc", [null, [6, 92], [6, 109]]], 0, 0, 0, 0]], [], [], 0, 0], "options", ["subexpr", "@mut", [["get", "dropzoneOptions", ["loc", [null, [6, 118], [6, 133]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [6, 20], [6, 135]]], 0, 0], ["block", "if", [["subexpr", "not", [["get", "session.isAuthenticated", ["loc", [null, [10, 27], [10, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 22], [10, 51]]], 0, 0]], [], 0, 1, ["loc", [null, [10, 16], [21, 23]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 8
            },
            "end": {
              "line": 28,
              "column": 8
            }
          },
          "moduleName": "modules/ember-osf/components/file-widget/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn btn-default");
          var el3 = dom.createTextNode("Back");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createElementMorph(element1);
          morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["content", "selectedNode.title", ["loc", [null, [24, 16], [24, 38]]], 0, 0, 0, 0], ["element", "action", ["deselectNode"], [], ["loc", [null, [24, 71], [24, 96]]], 0, 0], ["inline", "file-browser", [], ["rootNode", ["subexpr", "@mut", [["get", "selectedNode", ["loc", [null, [25, 36], [25, 48]]], 0, 0, 0, 0]], [], [], 0, 0], "onClickFile", ["subexpr", "action", ["selectNodeFile"], [], ["loc", [null, [26, 24], [26, 49]]], 0, 0]], ["loc", [null, [25, 12], [27, 14]]], 0, 0]],
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
            "line": 31,
            "column": 0
          }
        },
        "moduleName": "modules/ember-osf/components/file-widget/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "eosf-file-widget-box");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
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
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "not", [["get", "selectedNode", ["loc", [null, [3, 19], [3, 31]]], 0, 0, 0, 0]], [], ["loc", [null, [3, 14], [3, 32]]], 0, 0]], [], 0, 1, ["loc", [null, [3, 8], [28, 15]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});