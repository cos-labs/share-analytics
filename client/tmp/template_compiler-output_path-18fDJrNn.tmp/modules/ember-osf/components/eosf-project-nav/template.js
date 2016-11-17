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
              "column": 28
            },
            "end": {
              "line": 23,
              "column": 28
            }
          },
          "moduleName": "modules/ember-osf/components/eosf-project-nav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n                                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"data-toggle","tooltip");
          dom.setAttribute(el2,"data-placement","bottom");
          dom.setAttribute(el2,"class","eosf-project-nav-parent");
          var el3 = dom.createTextNode("\n                                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3,"class","fa fa-level-down fa-rotate-180");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                                    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element7, 'href');
          morphs[1] = dom.createAttrMorph(element7, 'title');
          return morphs;
        },
        statements: [
          ["attribute","href",["concat",[["get","node.parent.links.html",["loc",[null,[19,47],[19,69]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
          ["attribute","title",["concat",[["get","node.parent.title",["loc",[null,[19,104],[19,121]]],0,0,0,0]],0,0,0,0,0],0,0,0,0]
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
              "line": 23,
              "column": 28
            },
            "end": {
              "line": 26,
              "column": 28
            }
          },
          "moduleName": "modules/ember-osf/components/eosf-project-nav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"data-toggle","tooltip");
          dom.setAttribute(el2,"title","Parent project is private");
          dom.setAttribute(el2,"data-placement","bottom");
          dom.setAttribute(el2,"class","eosf-project-nav-private-parent");
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3,"class","fa fa-level-down fa-rotate-180 text-muted");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

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
            "line": 16,
            "column": 24
          },
          "end": {
            "line": 27,
            "column": 24
          }
        },
        "moduleName": "modules/ember-osf/components/eosf-project-nav/template.hbs"
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
        ["block","if",[["get","showParentProjectLink",["loc",[null,[17,34],[17,55]]],0,0,0,0]],[],0,1,["loc",[null,[17,28],[26,35]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 42,
              "column": 28
            },
            "end": {
              "line": 44,
              "column": 28
            }
          },
          "moduleName": "modules/ember-osf/components/eosf-project-nav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("Analytics");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element4, 'href');
          return morphs;
        },
        statements: [
          ["attribute","href",["concat",[["get","node.links.html",["loc",[null,[43,47],[43,62]]],0,0,0,0],"analytics/"],0,0,0,0,0],0,0,0,0]
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
              "line": 45,
              "column": 28
            },
            "end": {
              "line": 47,
              "column": 28
            }
          },
          "moduleName": "modules/ember-osf/components/eosf-project-nav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("Registrations");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element3, 'href');
          return morphs;
        },
        statements: [
          ["attribute","href",["concat",[["get","node.links.html",["loc",[null,[46,47],[46,62]]],0,0,0,0],"registrations/"],0,0,0,0,0],0,0,0,0]
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
              "line": 48,
              "column": 28
            },
            "end": {
              "line": 50,
              "column": 28
            }
          },
          "moduleName": "modules/ember-osf/components/eosf-project-nav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("Forks");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element2, 'href');
          return morphs;
        },
        statements: [
          ["attribute","href",["concat",[["get","node.links.html",["loc",[null,[49,47],[49,62]]],0,0,0,0],"forks/"],0,0,0,0,0],0,0,0,0]
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
              "line": 52,
              "column": 28
            },
            "end": {
              "line": 54,
              "column": 28
            }
          },
          "moduleName": "modules/ember-osf/components/eosf-project-nav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("Contributors");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element1, 'href');
          return morphs;
        },
        statements: [
          ["attribute","href",["concat",[["get","node.links.html",["loc",[null,[53,47],[53,62]]],0,0,0,0],"contributors/"],0,0,0,0,0],0,0,0,0]
        ],
        locals: [],
        templates: []
      };
    }());
    var child4 = (function() {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 56,
              "column": 28
            },
            "end": {
              "line": 58,
              "column": 28
            }
          },
          "moduleName": "modules/ember-osf/components/eosf-project-nav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("Settings");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'href');
          return morphs;
        },
        statements: [
          ["attribute","href",["concat",[["get","node.links.html",["loc",[null,[57,47],[57,62]]],0,0,0,0],"settings/"],0,0,0,0,0],0,0,0,0]
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
            "line": 33,
            "column": 24
          },
          "end": {
            "line": 59,
            "column": 24
          }
        },
        "moduleName": "modules/ember-osf/components/eosf-project-nav/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"id","projectNavFiles");
        var el2 = dom.createTextNode("\n                                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("\n                                    Files\n                                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n                            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createTextNode("\n                                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("Wiki");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [1, 1]);
        var element6 = dom.childAt(fragment, [3, 1]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element5, 'href');
        morphs[1] = dom.createAttrMorph(element6, 'href');
        morphs[2] = dom.createMorphAt(fragment,5,5,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,6,6,contextualElement);
        morphs[4] = dom.createMorphAt(fragment,7,7,contextualElement);
        morphs[5] = dom.createMorphAt(fragment,9,9,contextualElement);
        morphs[6] = dom.createMorphAt(fragment,11,11,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["attribute","href",["concat",[["get","node.links.html",["loc",[null,[35,43],[35,58]]],0,0,0,0],"files/"],0,0,0,0,0],0,0,0,0],
        ["attribute","href",["concat",[["get","node.links.html",["loc",[null,[40,43],[40,58]]],0,0,0,0],"wiki/"],0,0,0,0,0],0,0,0,0],
        ["block","if",[["get","showAnalyticsTab",["loc",[null,[42,34],[42,50]]],0,0,0,0]],[],0,null,["loc",[null,[42,28],[44,35]]]],
        ["block","if",[["get","showRegistrationsTab",["loc",[null,[45,34],[45,54]]],0,0,0,0]],[],1,null,["loc",[null,[45,28],[47,35]]]],
        ["block","if",[["get","showForksTab",["loc",[null,[48,34],[48,46]]],0,0,0,0]],[],2,null,["loc",[null,[48,28],[50,35]]]],
        ["block","if",[["get","showContributorsTab",["loc",[null,[52,34],[52,53]]],0,0,0,0]],[],3,null,["loc",[null,[52,28],[54,35]]]],
        ["block","if",[["get","showSettingsTab",["loc",[null,[56,34],[56,49]]],0,0,0,0]],[],4,null,["loc",[null,[56,28],[58,35]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 60,
            "column": 24
          },
          "end": {
            "line": 70,
            "column": 24
          }
        },
        "moduleName": "modules/ember-osf/components/eosf-project-nav/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"id","commentsLink");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("                                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","");
        dom.setAttribute(el2,"class","visible-xs cp-handle");
        dom.setAttribute(el2,"data-bind","click:removeCount");
        dom.setAttribute(el2,"data-toggle","collapse");
        dom.setAttribute(el2,"data-target","#projectSubnav .navbar-collapse");
        var el3 = dom.createTextNode("\n                                    Comments\n                                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"data-bind","if: unreadComments() !== 0");
        var el4 = dom.createTextNode("\n                                        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"data-bind","text: displayCount");
        dom.setAttribute(el4,"class","badge");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                                    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

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
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 77,
          "column": 0
        }
      },
      "moduleName": "modules/ember-osf/components/eosf-project-nav/template.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","projectBanner");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("header");
      dom.setAttribute(el2,"class","subhead");
      dom.setAttribute(el2,"id","overview");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("nav");
      dom.setAttribute(el3,"id","projectSubnav");
      dom.setAttribute(el3,"class","navbar osf-project-navbar");
      dom.setAttribute(el3,"role","navigation");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","container");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","navbar-header");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      dom.setAttribute(el6,"type","button");
      dom.setAttribute(el6,"class","navbar-toggle collapsed");
      dom.setAttribute(el6,"data-toggle","collapse");
      dom.setAttribute(el6,"data-target",".project-nav");
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("span");
      dom.setAttribute(el7,"class","sr-only");
      var el8 = dom.createTextNode("Toggle navigation");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("span");
      dom.setAttribute(el7,"class","fa fa-bars fa-lg");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"class","navbar-brand visible-xs");
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" Navigation\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","collapse navbar-collapse project-nav");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("ul");
      dom.setAttribute(el6,"class","nav navbar-nav");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("li");
      var el8 = dom.createTextNode("\n                            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("a");
      dom.setAttribute(el8,"class","project-title");
      var el9 = dom.createTextNode("\n                                ");
      dom.appendChild(el8, el9);
      var el9 = dom.createComment("");
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n                            ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                        ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("                    ");
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
      var element8 = dom.childAt(fragment, [0, 1, 1, 1]);
      var element9 = dom.childAt(element8, [1, 3]);
      var element10 = dom.childAt(element8, [3, 1]);
      var element11 = dom.childAt(element10, [3, 1]);
      var morphs = new Array(7);
      morphs[0] = dom.createAttrMorph(element9, 'href');
      morphs[1] = dom.createMorphAt(element9,1,1);
      morphs[2] = dom.createMorphAt(element10,1,1);
      morphs[3] = dom.createAttrMorph(element11, 'href');
      morphs[4] = dom.createMorphAt(element11,1,1);
      morphs[5] = dom.createMorphAt(element10,5,5);
      morphs[6] = dom.createMorphAt(element10,6,6);
      return morphs;
    },
    statements: [
      ["attribute","href",["concat",[["get","node.links.html",["loc",[null,[10,63],[10,78]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
      ["content","projectLabel",["loc",[null,[11,24],[11,40]]],0,0,0,0],
      ["block","if",[["get","parentExists",["loc",[null,[16,30],[16,42]]],0,0,0,0]],[],0,null,["loc",[null,[16,24],[27,31]]]],
      ["attribute","href",["concat",[["get","node.links.html",["loc",[null,[29,39],[29,54]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
      ["content","node.title",["loc",[null,[30,32],[30,46]]],0,0,0,0],
      ["block","unless",[["get","isWithdrawnRegistration",["loc",[null,[33,34],[33,57]]],0,0,0,0]],[],1,null,["loc",[null,[33,24],[59,35]]]],
      ["block","if",[["get","showCommentsButton",["loc",[null,[60,30],[60,48]]],0,0,0,0]],[],2,null,["loc",[null,[60,24],[70,31]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));