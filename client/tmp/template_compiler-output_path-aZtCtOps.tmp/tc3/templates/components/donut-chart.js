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
          "line": 5,
          "column": 0
        }
      },
      "moduleName": "tc3/templates/components/donut-chart.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      var el2 = dom.createElement("button");
      var el3 = dom.createTextNode("Click to remove");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","donut");
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
      var element0 = dom.childAt(fragment, [0, 0]);
      var morphs = new Array(2);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
      return morphs;
    },
    statements: [
      ["element","action",["removeChart"],[],["loc",[null,[1,13],[1,37]]],0,0],
      ["content","yield",["loc",[null,[4,0],[4,9]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));