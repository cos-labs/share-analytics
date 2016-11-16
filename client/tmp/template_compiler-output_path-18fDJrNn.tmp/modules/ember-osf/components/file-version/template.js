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
      "moduleName": "modules/ember-osf/components/file-version/template.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("td");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("td");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("td");
      var el2 = dom.createElement("button");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [4, 0]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
      morphs[2] = dom.createElementMorph(element0);
      morphs[3] = dom.createMorphAt(element0,0,0);
      return morphs;
    },
    statements: [
      ["content","version.id",["loc",[null,[1,4],[1,18]]],0,0,0,0],
      ["content","version.size",["loc",[null,[2,4],[2,20]]],0,0,0,0],
      ["element","action",["downloadVersion",["get","version.id",["loc",[null,[3,39],[3,49]]],0,0,0,0]],[],["loc",[null,[3,12],[3,51]]],0,0],
      ["inline","fa-icon",["download"],[],["loc",[null,[3,52],[3,74]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));