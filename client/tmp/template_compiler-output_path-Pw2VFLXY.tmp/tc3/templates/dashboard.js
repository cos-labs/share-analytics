export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 21
            },
            "end": {
              "line": 19,
              "column": 21
            }
          },
          "moduleName": "tc3/templates/dashboard.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Search for new institution: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["inline","input",[],["value",["subexpr","@mut",[["get","query",["loc",[null,[18,69],[18,74]]],0,0,0,0]],[],[],0,0],"enter","changeQ"],["loc",[null,[18,55],[18,92]]],0,0]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 21
            },
            "end": {
              "line": 23,
              "column": 21
            }
          },
          "moduleName": "tc3/templates/dashboard.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Start date for institutional data: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Update end date for institutional data: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]),1,1);
          return morphs;
        },
        statements: [
          ["inline","bootstrap-datepicker",[],["value",["subexpr","@mut",[["get","g",["loc",[null,[21,91],[21,92]]],0,0,0,0]],[],[],0,0],"autoclose",true,"changeDate","changeGte"],["loc",[null,[21,62],[21,132]]],0,0],
          ["inline","bootstrap-datepicker",[],["value",["subexpr","@mut",[["get","l",["loc",[null,[22,96],[22,97]]],0,0,0,0]],[],[],0,0],"autoclose",true,"changeDate","changeLte"],["loc",[null,[22,67],[22,137]]],0,0]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 28,
                "column": 32
              },
              "end": {
                "line": 30,
                "column": 32
              }
            },
            "moduleName": "tc3/templates/dashboard.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createElement("a");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1, 0]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element1);
            morphs[1] = dom.createMorphAt(element1,0,0);
            return morphs;
          },
          statements: [
            ["element","action",["restoreDash",["get","sd",["loc",[null,[29,62],[29,64]]],0,0,0,0]],[],["loc",[null,[29,39],[29,66]]],0,0],
            ["content","sd.name",["loc",[null,[29,67],[29,78]]],0,0,0,0]
          ],
          locals: ["sd"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 21
            },
            "end": {
              "line": 33,
              "column": 21
            }
          },
          "moduleName": "tc3/templates/dashboard.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Save current dashboard: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Saved dashboards: \n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("                            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 1]),1,1);
          return morphs;
        },
        statements: [
          ["inline","input",[],["value",["subexpr","@mut",[["get","n",["loc",[null,[25,65],[25,66]]],0,0,0,0]],[],[],0,0],"enter","persistDashboard","placeholder","Dashboard Name"],["loc",[null,[25,51],[25,122]]],0,0],
          ["block","each",[["get","storedDashboards",["loc",[null,[28,40],[28,56]]],0,0,0,0]],[],0,null,["loc",[null,[28,32],[30,41]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 16,
            "column": 16
          },
          "end": {
            "line": 34,
            "column": 16
          }
        },
        "moduleName": "tc3/templates/dashboard.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","bs-accordion-item",[],["value","1","title","Institution (PoC only)"],0,null,["loc",[null,[17,21],[19,43]]]],
        ["block","bs-accordion-item",[],["value","2","title","Dates"],1,null,["loc",[null,[20,21],[23,43]]]],
        ["block","bs-accordion-item",[],["value","3","title","Saved Dashboards"],2,null,["loc",[null,[24,21],[33,43]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 57,
                  "column": 28
                },
                "end": {
                  "line": 59,
                  "column": 28
                }
              },
              "moduleName": "tc3/templates/dashboard.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","donut-chart",[],["aggregations",["subexpr","@mut",[["get","model.aggregations",["loc",[null,[58,59],[58,77]]],0,0,0,0]],[],[],0,0]],["loc",[null,[58,32],[58,79]]],0,0]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 60,
                  "column": 28
                },
                "end": {
                  "line": 62,
                  "column": 28
                }
              },
              "moduleName": "tc3/templates/dashboard.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","bar-chart",[],["aggregations",["subexpr","@mut",[["get","model.aggregations",["loc",[null,[61,57],[61,75]]],0,0,0,0]],[],[],0,0],"querystring",["subexpr","@mut",[["get","q",["loc",[null,[61,88],[61,89]]],0,0,0,0]],[],[],0,0],"g",["subexpr","@mut",[["get","gte",["loc",[null,[61,92],[61,95]]],0,0,0,0]],[],[],0,0],"l",["subexpr","@mut",[["get","lte",["loc",[null,[61,98],[61,101]]],0,0,0,0]],[],[],0,0],"removeChart",["subexpr","action",["removeChart"],[],["loc",[null,[61,114],[61,136]]],0,0]],["loc",[null,[61,32],[61,138]]],0,0]
            ],
            locals: [],
            templates: []
          };
        }());
        var child2 = (function() {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 63,
                  "column": 28
                },
                "end": {
                  "line": 65,
                  "column": 28
                }
              },
              "moduleName": "tc3/templates/dashboard.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              dom.setAttribute(el1,"style","height: 290px;");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
              return morphs;
            },
            statements: [
              ["inline","wild-card",[],["removeChart",["subexpr","action",["removeChart"],[],["loc",[null,[64,82],[64,104]]],0,0]],["loc",[null,[64,58],[64,106]]],0,0]
            ],
            locals: [],
            templates: []
          };
        }());
        var child3 = (function() {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 66,
                  "column": 28
                },
                "end": {
                  "line": 68,
                  "column": 28
                }
              },
              "moduleName": "tc3/templates/dashboard.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              dom.setAttribute(el1,"style","height: 290px;");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
              return morphs;
            },
            statements: [
              ["inline","place-holder",[],["aggregations",["subexpr","@mut",[["get","model.aggregations",["loc",[null,[67,86],[67,104]]],0,0,0,0]],[],[],0,0],"options",["subexpr","@mut",[["get","addableList",["loc",[null,[67,113],[67,124]]],0,0,0,0]],[],[],0,0],"addChart",["subexpr","action",["addChart"],[],["loc",[null,[67,134],[67,153]]],0,0],"removeChart",["subexpr","action",["removeChart"],[],["loc",[null,[67,166],[67,188]]],0,0],"item",["subexpr","@mut",[["get","item",["loc",[null,[67,194],[67,198]]],0,0,0,0]],[],[],0,0]],["loc",[null,[67,58],[67,200]]],0,0]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 55,
                "column": 20
              },
              "end": {
                "line": 70,
                "column": 20
              }
            },
            "moduleName": "tc3/templates/dashboard.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","col-lg-4 col-md-4 col-sm-12 col-xs-12");
            dom.setAttribute(el1,"style","border: solid 1px #efefef;");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("                        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(element0,1,1);
            morphs[1] = dom.createMorphAt(element0,2,2);
            morphs[2] = dom.createMorphAt(element0,3,3);
            morphs[3] = dom.createMorphAt(element0,4,4);
            return morphs;
          },
          statements: [
            ["block","if",[["get","item.isDonut",["loc",[null,[57,34],[57,46]]],0,0,0,0]],[],0,null,["loc",[null,[57,28],[59,35]]]],
            ["block","if",[["get","item.isBar",["loc",[null,[60,34],[60,44]]],0,0,0,0]],[],1,null,["loc",[null,[60,28],[62,35]]]],
            ["block","if",[["get","item.isWildcard",["loc",[null,[63,34],[63,49]]],0,0,0,0]],[],2,null,["loc",[null,[63,28],[65,35]]]],
            ["block","if",[["get","item.isPlaceholder",["loc",[null,[66,34],[66,52]]],0,0,0,0]],[],3,null,["loc",[null,[66,28],[68,35]]]]
          ],
          locals: [],
          templates: [child0, child1, child2, child3]
        };
      }());
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 54,
              "column": 16
            },
            "end": {
              "line": 71,
              "column": 16
            }
          },
          "moduleName": "tc3/templates/dashboard.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","draggable-object",[],["content",["subexpr","@mut",[["get","item",["loc",[null,[55,48],[55,52]]],0,0,0,0]],[],[],0,0],"overrideClass","sortObject","isSortable",true],0,null,["loc",[null,[55,20],[70,41]]]]
        ],
        locals: ["item"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 53,
            "column": 12
          },
          "end": {
            "line": 72,
            "column": 12
          }
        },
        "moduleName": "tc3/templates/dashboard.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","each",[["get","sortableObjectList",["loc",[null,[54,24],[54,42]]],0,0,0,0]],[],0,null,["loc",[null,[54,16],[71,25]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
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
          "line": 80,
          "column": 0
        }
      },
      "moduleName": "tc3/templates/dashboard.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container-fluid");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-12");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h2");
      var el6 = dom.createTextNode("Dashboard");
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
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container-fluid");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-12");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h3");
      var el6 = dom.createTextNode("Control Panel:");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("            ");
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
      var el1 = dom.createComment("\n<div class='container-fluid'>\n    <div class='container'>\n        <div class='row'>\n            <div class='col-md-12' style='border: solid 1px #efefef;'>\n                {{timeseries-chart aggregations=model.aggregations interval=tsInterval}}\n            </div>\n        </div>\n    </div>\n</div>\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container-fluid");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("        ");
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
      var el1 = dom.createElement("button");
      var el2 = dom.createTextNode("Add a Widget");
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
      var element2 = dom.childAt(fragment, [8]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 1, 1]),3,3);
      morphs[1] = dom.createMorphAt(dom.childAt(fragment, [6, 1, 1]),1,1);
      morphs[2] = dom.createAttrMorph(element2, 'onclick');
      morphs[3] = dom.createMorphAt(fragment,10,10,contextualElement);
      return morphs;
    },
    statements: [
      ["block","bs-accordion",[],["selected",["subexpr","@mut",[["get","selected",["loc",[null,[16,41],[16,49]]],0,0,0,0]],[],[],0,0]],0,null,["loc",[null,[16,16],[34,33]]]],
      ["block","sortable-objects",[],["sortableObjectList",["subexpr","@mut",[["get","sortableObjectList",["loc",[null,[53,51],[53,69]]],0,0,0,0]],[],[],0,0],"sortEndAction","sortEndAction"],1,null,["loc",[null,[53,12],[72,33]]]],
      ["attribute","onclick",["subexpr","action",["addChart"],[],["loc",[null,[null,null],[77,37]]],0,0],0,0,0,0],
      ["content","outlet",["loc",[null,[79,0],[79,10]]],0,0,0,0]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));