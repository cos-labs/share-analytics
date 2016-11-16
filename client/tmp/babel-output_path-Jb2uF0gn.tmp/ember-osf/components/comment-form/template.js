define("ember-osf/components/comment-form/template", ["exports"], function (exports) {
  "use strict";

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
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "modules/ember-osf/components/comment-form/template.hbs"
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
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-success");
        var el3 = dom.createTextNode("\n        Add comment\n    ");
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
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createAttrMorph(element1, 'disabled');
        morphs[2] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "textarea", [], ["class", "form-control", "maxlength", "500", "placeholder", "Add a comment", "value", ["subexpr", "@mut", [["get", "_commentText", ["loc", [null, [2, 86], [2, 98]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [2, 4], [2, 100]]], 0, 0], ["attribute", "disabled", ["subexpr", "if", [["subexpr", "not", [["get", "_commentText", ["loc", [null, [3, 92], [3, 104]]], 0, 0, 0, 0]], [], ["loc", [null, [3, 87], [3, 105]]], 0, 0], true], [], ["loc", [null, [null, null], [3, 112]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["addComment", ["get", "_commentText", ["loc", [null, [3, 34], [3, 46]]], 0, 0, 0, 0]], [], ["loc", [null, [3, 12], [3, 48]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});