define("ember-osf/components/file-browser-item/template", ["exports"], function (exports) {
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
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "modules/ember-osf/components/file-browser-item/template.hbs"
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
        var el1 = dom.createElement("a");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(element0, 0, 0);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "file-browser-icon", [], ["item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [2, 25], [2, 29]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [2, 0], [2, 31]]], 0, 0], ["element", "action", ["open"], [], ["loc", [null, [3, 3], [3, 20]]], 0, 0], ["content", "item.itemName", ["loc", [null, [3, 21], [3, 38]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});