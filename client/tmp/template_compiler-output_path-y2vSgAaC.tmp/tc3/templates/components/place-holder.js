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
          "line": 48,
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
      dom.setAttribute(el1,"class","widgetButtons");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","configureButton");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","configureButton");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","configmenu");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("form");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-xs-4");
      var el4 = dom.createTextNode("JS Engine:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-xs-8");
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("select");
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("option");
      dom.setAttribute(el5,"value","c3");
      var el6 = dom.createTextNode("C3");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("option");
      dom.setAttribute(el5,"value","dimple");
      var el6 = dom.createTextNode("Dimple");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("hr");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-xs-4");
      var el4 = dom.createTextNode("Chart");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-xs-8");
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("select");
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("option");
      dom.setAttribute(el5,"value","donut");
      var el6 = dom.createTextNode("Donut");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("option");
      dom.setAttribute(el5,"value","timeseries");
      var el6 = dom.createTextNode("Time-Series");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("option");
      dom.setAttribute(el5,"value","bar");
      var el6 = dom.createTextNode("Bar");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("hr");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-xs-4");
      var el4 = dom.createTextNode("Width:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-xs-8");
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("hr");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-xs-4");
      var el4 = dom.createTextNode("Height:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-xs-8");
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("hr");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-xs-4");
      var el4 = dom.createTextNode("Query:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-xs-12");
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("hr");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-xs-12");
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("button");
      dom.setAttribute(el4,"class","btn btn-primary");
      dom.setAttribute(el4,"style","margin-right:10px");
      dom.setAttribute(el4,"type","submit");
      var el5 = dom.createTextNode("OK");
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
      var element3 = dom.childAt(fragment, [2, 1]);
      var element4 = dom.childAt(element3, [3, 1]);
      var element5 = dom.childAt(element3, [9, 1]);
      var morphs = new Array(12);
      morphs[0] = dom.createAttrMorph(element1, 'onclick');
      morphs[1] = dom.createMorphAt(element1,0,0);
      morphs[2] = dom.createAttrMorph(element2, 'onclick');
      morphs[3] = dom.createMorphAt(element2,0,0);
      morphs[4] = dom.createElementMorph(element3);
      morphs[5] = dom.createAttrMorph(element4, 'onchange');
      morphs[6] = dom.createAttrMorph(element5, 'onchange');
      morphs[7] = dom.createMorphAt(dom.childAt(element3, [15]),1,1);
      morphs[8] = dom.createMorphAt(dom.childAt(element3, [21]),1,1);
      morphs[9] = dom.createMorphAt(dom.childAt(element3, [27]),1,1);
      morphs[10] = dom.createMorphAt(fragment,4,4,contextualElement);
      morphs[11] = dom.createMorphAt(fragment,6,6,contextualElement);
      return morphs;
    },
    statements: [
      ["attribute","onclick",["subexpr","action",["removeWidget"],[],["loc",[null,[null,null],[2,69]]],0,0],0,0,0,0],
      ["inline","fa-icon",["close"],[],["loc",[null,[2,70],[2,89]]],0,0],
      ["attribute","onclick",["subexpr","action",["showConfig"],[],["loc",[null,[null,null],[3,67]]],0,0],0,0,0,0],
      ["inline","fa-icon",["cogs"],[],["loc",[null,[3,68],[3,86]]],0,0],
      ["element","action",["configChanged"],["on","submit"],["loc",[null,[6,10],[6,48]]],0,0],
      ["attribute","onchange",["subexpr","action",["changeEngine"],["value","target.value"],["loc",[null,[null,null],[9,73]]],0,0],0,0,0,0],
      ["attribute","onchange",["subexpr","action",["changeChart"],["value","target.value"],["loc",[null,[null,null],[17,72]]],0,0],0,0,0,0],
      ["inline","input",[],["type","text","size","10","value",["subexpr","@mut",[["get","widthSetting",["loc",[null,[26,46],[26,58]]],0,0,0,0]],[],[],0,0]],["loc",[null,[26,10],[26,60]]],0,0],
      ["inline","input",[],["type","text","size","10","value",["subexpr","@mut",[["get","heightSetting",["loc",[null,[31,46],[31,59]]],0,0,0,0]],[],[],0,0]],["loc",[null,[31,10],[31,61]]],0,0],
      ["inline","textarea",[],["value",["subexpr","@mut",[["get","query",["loc",[null,[36,27],[36,32]]],0,0,0,0]],[],[],0,0],"cols","36","rows","5"],["loc",[null,[36,10],[36,53]]],0,0],
      ["inline","component",[["get","widgetType",["loc",[null,[45,12],[45,22]]],0,0,0,0]],["chartType",["subexpr","@mut",[["get","chartType",["loc",[null,[45,33],[45,42]]],0,0,0,0]],[],[],0,0],"aggregations",["subexpr","@mut",[["get","aggregations",["loc",[null,[45,56],[45,68]]],0,0,0,0]],[],[],0,0],"width",["subexpr","@mut",[["get","widthSetting",["loc",[null,[45,75],[45,87]]],0,0,0,0]],[],[],0,0],"height",["subexpr","@mut",[["get","heightSetting",["loc",[null,[45,95],[45,108]]],0,0,0,0]],[],[],0,0],"interval",["subexpr","@mut",[["get","tsInterval",["loc",[null,[45,118],[45,128]]],0,0,0,0]],[],[],0,0],"resizedSignal",["subexpr","@mut",[["get","resizedSignal",["loc",[null,[45,143],[45,156]]],0,0,0,0]],[],[],0,0]],["loc",[null,[45,0],[45,158]]],0,0],
      ["content","yield",["loc",[null,[47,0],[47,9]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));