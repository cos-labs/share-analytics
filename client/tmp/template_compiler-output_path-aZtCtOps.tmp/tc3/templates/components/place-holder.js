export default Ember.HTMLBars.template((function() {
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
      "moduleName": "tc3/templates/components/place-holder.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("This is a placeholder");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("button");
      var el2 = dom.createTextNode("Configure");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","configmenu");
      var el2 = dom.createTextNode("Cofig Menu");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
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
      var element0 = dom.childAt(fragment, [2]);
      var morphs = new Array(3);
      morphs[0] = dom.createAttrMorph(element0, 'onclick');
      morphs[1] = dom.createMorphAt(fragment,6,6,contextualElement);
      morphs[2] = dom.createMorphAt(fragment,8,8,contextualElement);
      return morphs;
    },
    statements: [
      ["attribute","onclick",["subexpr","action",["showConfig"],[],["loc",[null,[null,null],[2,39]]],0,0],0,0,0,0],
      ["inline","component",[["get","widgetConfig.type",["loc",[null,[4,12],[4,29]]],0,0,0,0]],["aggregations",["subexpr","@mut",[["get","widgetConfig.aggregations",["loc",[null,[4,43],[4,68]]],0,0,0,0]],[],[],0,0]],["loc",[null,[4,0],[4,70]]],0,0],
      ["content","yield",["loc",[null,[6,0],[6,9]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));