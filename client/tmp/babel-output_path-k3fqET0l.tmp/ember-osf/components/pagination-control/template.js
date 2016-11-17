define("ember-osf/components/pagination-control/template", ["exports"], function (exports) {
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
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "modules/ember-osf/components/pagination-control/template.hbs"
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
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-primary");
        var el3 = dom.createTextNode("Previous");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-primary");
        var el3 = dom.createTextNode("Next");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    Page ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" of ");
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
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(fragment, [2]);
        var element4 = dom.childAt(element3, [1]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element1, 'disabled');
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createAttrMorph(element2, 'disabled');
        morphs[3] = dom.createElementMorph(element2);
        morphs[4] = dom.createAttrMorph(element4, 'value');
        morphs[5] = dom.createAttrMorph(element4, 'onchange');
        morphs[6] = dom.createMorphAt(element3, 3, 3);
        return morphs;
      },
      statements: [["attribute", "disabled", ["get", "disablePageReverse", ["loc", [null, [2, 69], [2, 87]]], 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["previous"], [], ["loc", [null, [2, 36], [2, 57]]], 0, 0], ["attribute", "disabled", ["get", "disablePageForward", ["loc", [null, [3, 65], [3, 83]]], 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["next"], [], ["loc", [null, [3, 36], [3, 53]]], 0, 0], ["attribute", "value", ["get", "currentPage", ["loc", [null, [7, 24], [7, 35]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["goToPage"], ["value", "target.value"], ["loc", [null, [null, null], [7, 89]]], 0, 0], 0, 0, 0, 0], ["content", "pageCount", ["loc", [null, [7, 94], [7, 107]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});