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
      "moduleName": "modules/ember-font-awesome/templates/components/fa-stack.hbs"
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
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","yield",[["subexpr","hash",[],["stack-1x",["subexpr","component",["fa-icon"],["stack","1"],["loc",[null,[2,11],[2,42]]],0,0],"stack-2x",["subexpr","component",["fa-icon"],["stack","2"],["loc",[null,[3,11],[3,42]]],0,0]],["loc",[null,[1,8],[4,1]]],0,0]],[],["loc",[null,[1,0],[4,3]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));