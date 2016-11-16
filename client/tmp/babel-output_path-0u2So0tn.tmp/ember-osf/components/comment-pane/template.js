define("ember-osf/components/comment-pane/template", ["exports"], function (exports) {
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
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "modules/ember-osf/components/comment-pane/template.hbs"
        },
        isEmpty: false,
        arity: 1,
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
        statements: [["inline", "comment-detail", [], ["comment", ["subexpr", "@mut", [["get", "comment", ["loc", [null, [4, 12], [4, 19]]], 0, 0, 0, 0]], [], [], 0, 0], "editComment", ["subexpr", "@mut", [["get", "attrs.editComment", ["loc", [null, [5, 16], [5, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "deleteComment", ["subexpr", "@mut", [["get", "attrs.deleteComment", ["loc", [null, [6, 18], [6, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "restoreComment", ["subexpr", "@mut", [["get", "attrs.restoreComment", ["loc", [null, [7, 19], [7, 39]]], 0, 0, 0, 0]], [], [], 0, 0], "reportComment", ["subexpr", "@mut", [["get", "attrs.reportComment", ["loc", [null, [8, 18], [8, 37]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 4], [8, 39]]], 0, 0]],
        locals: ["comment"],
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
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "modules/ember-osf/components/comment-pane/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    (none)\n");
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
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "modules/ember-osf/components/comment-pane/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Comments");
        dom.appendChild(el1, el2);
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
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "comments", ["loc", [null, [2, 8], [2, 16]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 0], [11, 9]]]], ["inline", "comment-form", [], ["addComment", ["subexpr", "@mut", [["get", "attrs.addComment", ["loc", [null, [13, 26], [13, 42]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [13, 0], [13, 44]]], 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});