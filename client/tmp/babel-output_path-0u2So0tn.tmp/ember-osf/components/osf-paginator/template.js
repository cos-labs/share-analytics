define("ember-osf/components/osf-paginator/template", ["exports"], function (exports) {
  "use strict";

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
                "column": 8
              },
              "end": {
                "line": 5,
                "column": 8
              }
            },
            "moduleName": "modules/ember-osf/components/osf-paginator/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "href", "#");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var element5 = dom.childAt(element4, [0]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element4, 'class');
            morphs[1] = dom.createElementMorph(element5);
            morphs[2] = dom.createMorphAt(element5, 0, 0);
            return morphs;
          },
          statements: [["attribute", "class", ["subexpr", "if", [["subexpr", "eq", [["get", "currentPage", ["loc", [null, [4, 31], [4, 42]]], 0, 0, 0, 0], 1], [], ["loc", [null, [4, 27], [4, 45]]], 0, 0], "disabled"], [], ["loc", [null, [null, null], [4, 58]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["previousPage", ["get", "query", ["loc", [null, [4, 95], [4, 100]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 71], [4, 102]]], 0, 0], ["content", "page", ["loc", [null, [4, 104], [4, 112]]], 0, 0, 0, 0]],
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
                  "line": 5,
                  "column": 8
                },
                "end": {
                  "line": 7,
                  "column": 8
                }
              },
              "moduleName": "modules/ember-osf/components/osf-paginator/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createElement("a");
              dom.setAttribute(el2, "href", "#");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element2 = dom.childAt(fragment, [1]);
              var element3 = dom.childAt(element2, [0]);
              var morphs = new Array(3);
              morphs[0] = dom.createAttrMorph(element2, 'class');
              morphs[1] = dom.createElementMorph(element3);
              morphs[2] = dom.createMorphAt(element3, 0, 0);
              return morphs;
            },
            statements: [["attribute", "class", ["subexpr", "if", [["subexpr", "eq", [["get", "currentPage", ["loc", [null, [6, 31], [6, 42]]], 0, 0, 0, 0], ["get", "pages", ["loc", [null, [6, 43], [6, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [6, 27], [6, 49]]], 0, 0], "disabled"], [], ["loc", [null, [null, null], [6, 62]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["nextPage", ["get", "query", ["loc", [null, [6, 96], [6, 101]]], 0, 0, 0, 0]], [], ["loc", [null, [6, 76], [6, 103]]], 0, 0], ["content", "page", ["loc", [null, [6, 105], [6, 113]]], 0, 0, 0, 0]],
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
                    "column": 8
                  },
                  "end": {
                    "line": 9,
                    "column": 8
                  }
                },
                "moduleName": "modules/ember-osf/components/osf-paginator/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("li");
                dom.setAttribute(el1, "class", "disabled");
                var el2 = dom.createElement("a");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 0]), 0, 0);
                return morphs;
              },
              statements: [["content", "page", ["loc", [null, [8, 36], [8, 44]]], 0, 0, 0, 0]],
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
                    "column": 8
                  },
                  "end": {
                    "line": 11,
                    "column": 8
                  }
                },
                "moduleName": "modules/ember-osf/components/osf-paginator/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("li");
                var el2 = dom.createElement("a");
                dom.setAttribute(el2, "href", "#");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n        ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var element1 = dom.childAt(element0, [0]);
                var morphs = new Array(3);
                morphs[0] = dom.createAttrMorph(element0, 'class');
                morphs[1] = dom.createElementMorph(element1);
                morphs[2] = dom.createMorphAt(element1, 0, 0);
                return morphs;
              },
              statements: [["attribute", "class", ["subexpr", "if", [["subexpr", "eq", [["get", "page", ["loc", [null, [10, 31], [10, 35]]], 0, 0, 0, 0], ["get", "currentPage", ["loc", [null, [10, 36], [10, 47]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 27], [10, 48]]], 0, 0], "active"], [], ["loc", [null, [null, null], [10, 59]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["findResults", ["get", "query", ["loc", [null, [10, 96], [10, 101]]], 0, 0, 0, 0], ["get", "page", ["loc", [null, [10, 102], [10, 106]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 73], [10, 108]]], 0, 0], ["content", "page", ["loc", [null, [10, 110], [10, 118]]], 0, 0, 0, 0]],
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
                  "column": 8
                },
                "end": {
                  "line": 11,
                  "column": 8
                }
              },
              "moduleName": "modules/ember-osf/components/osf-paginator/template.hbs"
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
            statements: [["block", "if", [["subexpr", "eq", [["get", "page", ["loc", [null, [7, 22], [7, 26]]], 0, 0, 0, 0], "..."], [], ["loc", [null, [7, 18], [7, 33]]], 0, 0]], [], 0, 1, ["loc", [null, [7, 8], [11, 8]]]]],
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
                "line": 5,
                "column": 8
              },
              "end": {
                "line": 11,
                "column": 8
              }
            },
            "moduleName": "modules/ember-osf/components/osf-paginator/template.hbs"
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
          statements: [["block", "if", [["subexpr", "eq", [["get", "page", ["loc", [null, [5, 22], [5, 26]]], 0, 0, 0, 0], ">"], [], ["loc", [null, [5, 18], [5, 31]]], 0, 0]], [], 0, 1, ["loc", [null, [5, 8], [11, 8]]]]],
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
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 12,
              "column": 4
            }
          },
          "moduleName": "modules/ember-osf/components/osf-paginator/template.hbs"
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
        statements: [["block", "if", [["subexpr", "eq", [["get", "page", ["loc", [null, [3, 18], [3, 22]]], 0, 0, 0, 0], "<"], [], ["loc", [null, [3, 14], [3, 27]]], 0, 0]], [], 0, 1, ["loc", [null, [3, 8], [11, 15]]]]],
        locals: ["page"],
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
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "modules/ember-osf/components/osf-paginator/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "pagination pull-right");
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
      statements: [["block", "each", [["get", "paginators", ["loc", [null, [2, 12], [2, 22]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 4], [12, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});