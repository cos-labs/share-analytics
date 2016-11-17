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
          "line": 8,
          "column": 6
        }
      },
      "moduleName": "tc3/templates/components/form-element/horizontal/checkbox.hbs"
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
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","checkbox");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1, 1]);
      var morphs = new Array(4);
      morphs[0] = dom.createAttrMorph(element0, 'class');
      morphs[1] = dom.createMorphAt(element1,1,1);
      morphs[2] = dom.createMorphAt(element1,3,3);
      morphs[3] = dom.createMorphAt(element0,3,3);
      return morphs;
    },
    statements: [
      ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[1,14],[1,38]]],0,0,0,0]," ",["get","horizontalInputOffsetGridClass",["loc",[null,[1,43],[1,73]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
      ["inline","input",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[4,25],[4,29]]],0,0,0,0]],[],[],0,0],"type","checkbox","checked",["subexpr","@mut",[["get","value",["loc",[null,[4,54],[4,59]]],0,0,0,0]],[],[],0,0],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,69],[4,77]]],0,0,0,0]],[],[],0,0],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,87],[4,95]]],0,0,0,0]],[],[],0,0]],["loc",[null,[4,12],[4,97]]],0,0],
      ["content","label",["loc",[null,[4,98],[4,107]]],0,0,0,0],
      ["inline","partial",["components/form-element/errors"],[],["loc",[null,[7,4],[7,48]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));