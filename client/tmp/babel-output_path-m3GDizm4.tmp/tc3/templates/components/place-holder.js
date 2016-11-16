define("tc3/templates/components/place-holder", ["exports"], function (exports) {
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
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "tc3/templates/components/place-holder.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "widgetButtons");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "configureButton");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "configureButton");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "configmenu");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("TimeSeries");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("Donut");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("Bar");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
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
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(fragment, [2]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var element6 = dom.childAt(element3, [5]);
        var morphs = new Array(9);
        morphs[0] = dom.createAttrMorph(element1, 'onclick');
        morphs[1] = dom.createMorphAt(element1, 0, 0);
        morphs[2] = dom.createAttrMorph(element2, 'onclick');
        morphs[3] = dom.createMorphAt(element2, 0, 0);
        morphs[4] = dom.createAttrMorph(element4, 'onclick');
        morphs[5] = dom.createAttrMorph(element5, 'onclick');
        morphs[6] = dom.createAttrMorph(element6, 'onclick');
        morphs[7] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[8] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        return morphs;
      },
      statements: [["attribute", "onclick", ["subexpr", "action", ["removeWidget"], [], ["loc", [null, [null, null], [2, 69]]], 0, 0], 0, 0, 0, 0], ["inline", "fa-icon", ["close"], [], ["loc", [null, [2, 70], [2, 89]]], 0, 0], ["attribute", "onclick", ["subexpr", "action", ["showConfig"], [], ["loc", [null, [null, null], [3, 67]]], 0, 0], 0, 0, 0, 0], ["inline", "fa-icon", ["cogs"], [], ["loc", [null, [3, 68], [3, 86]]], 0, 0], ["attribute", "onclick", ["subexpr", "action", ["makeTimeSeries"], [], ["loc", [null, [null, null], [6, 47]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["makeDonut"], [], ["loc", [null, [null, null], [7, 42]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["makeBar"], [], ["loc", [null, [null, null], [8, 40]]], 0, 0], 0, 0, 0, 0], ["inline", "component", [["get", "widgetType", ["loc", [null, [11, 12], [11, 22]]], 0, 0, 0, 0]], ["aggregations", ["subexpr", "@mut", [["get", "aggregations", ["loc", [null, [11, 36], [11, 48]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [11, 0], [11, 50]]], 0, 0], ["content", "yield", ["loc", [null, [13, 0], [13, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});