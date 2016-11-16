define("ember-osf/components/file-browser/template", ["exports"], function (exports) {
  "use strict";

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
              "line": 9,
              "column": 4
            }
          },
          "moduleName": "modules/ember-osf/components/file-browser/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
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
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["navigateToItem", ["get", "item", ["loc", [null, [4, 41], [4, 45]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 15], [4, 47]]], 0, 0], ["inline", "file-browser-icon", [], ["item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [5, 41], [5, 45]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [5, 16], [5, 47]]], 0, 0], ["content", "item.itemName", ["loc", [null, [6, 16], [6, 33]]], 0, 0, 0, 0]],
        locals: ["item"],
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
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "modules/ember-osf/components/file-browser/template.hbs"
        },
        isEmpty: true,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
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
              "line": 17,
              "column": 4
            },
            "end": {
              "line": 25,
              "column": 4
            }
          },
          "moduleName": "modules/ember-osf/components/file-browser/template.hbs"
        },
        isEmpty: false,
        arity: 2,
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
        statements: [["inline", "file-browser-item", [], ["item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [20, 33], [20, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "navigateToItem", ["subexpr", "action", ["navigateToItem"], [], ["loc", [null, [21, 23], [21, 48]]], 0, 0], "selectItem", ["subexpr", "action", ["selectItem"], [], ["loc", [null, [22, 19], [22, 40]]], 0, 0], "openItem", ["subexpr", "action", ["openItem"], [], ["loc", [null, [23, 17], [23, 36]]], 0, 0]], ["loc", [null, [20, 8], [24, 10]]], 0, 0]],
        locals: ["item", "index"],
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
              "line": 26,
              "column": 4
            },
            "end": {
              "line": 28,
              "column": 4
            }
          },
          "moduleName": "modules/ember-osf/components/file-browser/template.hbs"
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
        statements: [["inline", "fa-icon", ["spinner"], ["size", 3, "pulse", true], ["loc", [null, [27, 8], [27, 47]]], 0, 0]],
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
            "line": 30,
            "column": 0
          }
        },
        "moduleName": "modules/ember-osf/components/file-browser/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ol");
        dom.setAttribute(el1, "class", "breadcrumb");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "file-browser-list");
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
        var element1 = dom.childAt(fragment, [4]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        morphs[3] = dom.createMorphAt(element1, 2, 2);
        return morphs;
      },
      statements: [["block", "each", [["get", "breadcrumbs", ["loc", [null, [2, 12], [2, 23]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 4], [9, 13]]]], ["block", "if", [["get", "selectedItems", ["loc", [null, [12, 6], [12, 19]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [12, 0], [14, 7]]]], ["block", "ember-collection", [], ["items", ["subexpr", "@mut", [["get", "items", ["loc", [null, [17, 30], [17, 35]]], 0, 0, 0, 0]], [], [], 0, 0], "cell-layout", ["subexpr", "fixed-grid-layout", [["get", "itemWidth", ["loc", [null, [18, 39], [18, 48]]], 0, 0, 0, 0], ["get", "itemHeight", ["loc", [null, [18, 49], [18, 59]]], 0, 0, 0, 0]], [], ["loc", [null, [18, 20], [18, 60]]], 0, 0]], 2, null, ["loc", [null, [17, 4], [25, 25]]]], ["block", "unless", [["get", "itemsLoaded", ["loc", [null, [26, 14], [26, 25]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [26, 4], [28, 15]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});