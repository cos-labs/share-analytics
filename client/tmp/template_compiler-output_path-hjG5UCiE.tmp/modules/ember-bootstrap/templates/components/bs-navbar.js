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
          "line": 4,
          "column": 0
        }
      },
      "moduleName": "modules/ember-bootstrap/templates/components/bs-navbar.hbs"
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
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(2);
      morphs[0] = dom.createAttrMorph(element0, 'class');
      morphs[1] = dom.createMorphAt(element0,1,1);
      return morphs;
    },
    statements: [
      ["attribute","class",["subexpr","if",[["get","fluid",["loc",[null,[1,16],[1,21]]],0,0,0,0],"container-fluid","container"],[],["loc",[null,[null,null],[1,53]]],0,0],0,0,0,0],
      ["content","yield",["loc",[null,[2,4],[2,13]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));