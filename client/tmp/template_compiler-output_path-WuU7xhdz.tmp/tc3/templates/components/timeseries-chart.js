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
          "line": 12,
          "column": 0
        }
      },
      "moduleName": "tc3/templates/components/timeseries-chart.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","ts");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      dom.setAttribute(el1,"style","padding-bottom: 40px;");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      dom.setAttribute(el2,"style","display: inline; float: left; margin-right: 3em;");
      var el3 = dom.createElement("strong");
      var el4 = dom.createTextNode("Filter articles by type: ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      dom.setAttribute(el2,"style","display: inline; float: left; margin-right: 3em;");
      var el3 = dom.createTextNode("Publication: ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      dom.setAttribute(el2,"style","display: inline; float: left; margin-right: 3em;");
      var el3 = dom.createTextNode("Preprint: ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      dom.setAttribute(el2,"style","display: inline; float: left; margin-right: 3em;");
      var el3 = dom.createTextNode("Creativework: ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      dom.setAttribute(el2,"style","display: inline; float: left; margin-right: 3em;");
      var el3 = dom.createTextNode("Project: ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
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
      var morphs = new Array(5);
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element0, [7]),1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element0, [9]),1,1);
      morphs[4] = dom.createMorphAt(fragment,4,4,contextualElement);
      return morphs;
    },
    statements: [
      ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","tPub",["loc",[null,[5,110],[5,114]]],0,0,0,0]],[],[],0,0]],["loc",[null,[5,78],[5,116]]],0,0],
      ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","tPre",["loc",[null,[6,107],[6,111]]],0,0,0,0]],[],[],0,0]],["loc",[null,[6,75],[6,113]]],0,0],
      ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","tCre",["loc",[null,[7,111],[7,115]]],0,0,0,0]],[],[],0,0]],["loc",[null,[7,79],[7,117]]],0,0],
      ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","tPro",["loc",[null,[8,106],[8,110]]],0,0,0,0]],[],[],0,0]],["loc",[null,[8,74],[8,112]]],0,0],
      ["content","yield",["loc",[null,[11,0],[11,9]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));