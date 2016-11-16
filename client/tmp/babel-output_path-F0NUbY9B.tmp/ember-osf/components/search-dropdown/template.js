define("ember-osf/components/search-dropdown/template", ["exports"], function (exports) {
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
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "modules/ember-osf/components/search-dropdown/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "osf-search");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-12");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("form");
        dom.setAttribute(el5, "class", "input-group");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "id", "searchPageFullBar");
        dom.setAttribute(el6, "name", "search-placeholder");
        dom.setAttribute(el6, "type", "text");
        dom.setAttribute(el6, "class", "osf-search-input form-control");
        dom.setAttribute(el6, "placeholder", "Search");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "id", "searchBarLabel");
        dom.setAttribute(el6, "class", "search-label-placeholder");
        dom.setAttribute(el6, "for", "search-placeholder");
        var el7 = dom.createTextNode("Search");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "input-group-btn");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("button");
        dom.setAttribute(el7, "type", "submit");
        dom.setAttribute(el7, "class", "btn osf-search-btn");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "fa fa-arrow-circle-right fa-lg");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("button");
        dom.setAttribute(el7, "type", "button");
        dom.setAttribute(el7, "class", "btn osf-search-btn");
        dom.setAttribute(el7, "data-toggle", "modal");
        dom.setAttribute(el7, "data-target", "#search-help-modal");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "fa fa-question fa-lg");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("button");
        dom.setAttribute(el7, "type", "button");
        dom.setAttribute(el7, "class", "btn osf-search-btn");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "fa fa-times fa-lg");
        dom.appendChild(el7, el8);
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
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [5, 5]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createAttrMorph(element1, 'onchange');
        morphs[2] = dom.createAttrMorph(element2, 'onclick');
        return morphs;
      },
      statements: [["element", "action", ["search"], ["on", "submit"], ["loc", [null, [5, 42], [5, 73]]], 0, 0], ["attribute", "onchange", ["subexpr", "action", ["updateQuery"], ["value", "target.value"], ["loc", [null, [null, null], [6, 104]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["toggleSearch"], [], ["loc", [null, [null, null], [11, 106]]], 0, 0], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});