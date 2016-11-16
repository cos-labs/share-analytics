export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 20
            },
            "end": {
              "line": 19,
              "column": 20
            }
          },
          "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","visible-xs");
          dom.setAttribute(el1,"data-bind","click : toggleSearch, css: searchCSS");
          var el2 = dom.createTextNode("\n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"class","osf-xs-search pull-right");
          dom.setAttribute(el2,"style","padding-top: 12px");
          var el3 = dom.createTextNode("\n                                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3,"rel","tooltip");
          dom.setAttribute(el3,"data-placement","bottom");
          dom.setAttribute(el3,"title","Search OSF");
          dom.setAttribute(el3,"class","fa fa-search fa-lg fa-inverse");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                            ");
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
          var element15 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element15);
          return morphs;
        },
        statements: [
          ["element","action",["toggleSearch"],[],["loc",[null,[15,64],[15,89]]],0,0]
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
            "line": 11,
            "column": 16
          },
          "end": {
            "line": 20,
            "column": 16
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
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
        ["block","unless",[["get","onSearchPage",["loc",[null,[12,31],[12,43]]],0,0,0,0]],[],0,null,["loc",[null,[12,20],[19,31]]]]
      ],
      locals: [],
      templates: [child0]
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
            "column": 16
          },
          "end": {
            "line": 25,
            "column": 16
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"class","navbar-brand navbar-service");
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element14 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element14, 'href');
        morphs[1] = dom.createMorphAt(element14,1,1);
        return morphs;
      },
      statements: [
        ["attribute","href",["concat",[["get","serviceUrl",["loc",[null,[24,67],[24,77]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["content","service",["loc",[null,[24,82],[24,93]]],0,0,0,0]
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
            "line": 29,
            "column": 20
          },
          "end": {
            "line": 32,
            "column": 20
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"id","osfNavDashboard");
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("Dashboard");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"id","osfNavMyProjects");
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("My Projects");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element12 = dom.childAt(fragment, [1, 0]);
        var element13 = dom.childAt(fragment, [3, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element12, 'href');
        morphs[1] = dom.createAttrMorph(element13, 'href');
        return morphs;
      },
      statements: [
        ["attribute","href",["get","host",["loc",[null,[30,59],[30,63]]],0,0,0,0],0,0,0,0],
        ["attribute","href",["concat",[["get","host",["loc",[null,[31,61],[31,65]]],0,0,0,0],"myprojects/"],0,0,0,0,0],0,0,0,0]
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
            "line": 42,
            "column": 20
          },
          "end": {
            "line": 46,
            "column": 20
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"class","dropdown");
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","/support/");
        var el3 = dom.createTextNode("Support");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                        ");
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
  var child4 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 24
            },
            "end": {
              "line": 54,
              "column": 24
            }
          },
          "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
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
          dom.setAttribute(el1,"class","hidden-xs");
          var el2 = dom.createTextNode("\n                                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("\n                                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3,"rel","tooltip");
          dom.setAttribute(el3,"data-placement","bottom");
          dom.setAttribute(el3,"title","Search OSF");
          dom.setAttribute(el3,"class","fa fa-search fa-lg");
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
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element11 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element11, 'onclick');
          return morphs;
        },
        statements: [
          ["attribute","onclick",["subexpr","action",["toggleSearch"],[],["loc",[null,[null,null],[50,68]]],0,0],0,0,0,0]
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
            "line": 47,
            "column": 20
          },
          "end": {
            "line": 55,
            "column": 20
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
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
        ["block","unless",[["get","onSearchPage",["loc",[null,[48,35],[48,47]]],0,0,0,0]],[],0,null,["loc",[null,[48,24],[54,35]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child5 = (function() {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 56,
            "column": 20
          },
          "end": {
            "line": 82,
            "column": 20
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"class","dropdown");
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","#");
        dom.setAttribute(el2,"class","dropdown-toggle nav-user-dropdown");
        dom.setAttribute(el2,"data-toggle","dropdown");
        dom.setAttribute(el2,"role","button");
        dom.setAttribute(el2,"aria-expanded","false");
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","osf-gravatar");
        var el4 = dom.createTextNode("\n                                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"alt","User gravatar");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","caret");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2,"class","dropdown-menu");
        dom.setAttribute(el2,"role","menu");
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n                                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-user fa-lg p-r-xs");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" My Profile");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n                                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-life-ring fa-lg p-r-xs");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" Support");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n                                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-cog fa-lg p-r-xs");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" Settings");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n                                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-sign-out fa-lg p-r-xs");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" Log out");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n                            ");
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
        var element3 = dom.childAt(fragment, [1]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element4, [1, 1]);
        var element6 = dom.childAt(element3, [3]);
        var element7 = dom.childAt(element6, [1, 1]);
        var element8 = dom.childAt(element6, [3, 1]);
        var element9 = dom.childAt(element6, [5, 1]);
        var element10 = dom.childAt(element6, [7, 1]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element5, 'src');
        morphs[1] = dom.createMorphAt(element4,3,3);
        morphs[2] = dom.createAttrMorph(element7, 'href');
        morphs[3] = dom.createAttrMorph(element8, 'href');
        morphs[4] = dom.createAttrMorph(element9, 'href');
        morphs[5] = dom.createAttrMorph(element10, 'onclick');
        return morphs;
      },
      statements: [
        ["attribute","src",["concat",[["get","gravatarUrl",["loc",[null,[61,48],[61,59]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["content","user.fullName",["loc",[null,[62,40],[62,57]]],0,0,0,0],
        ["attribute","href",["concat",[["get","host",["loc",[null,[67,47],[67,51]]],0,0,0,0],"profile/"],0,0,0,0,0],0,0,0,0],
        ["attribute","href",["concat",[["get","host",["loc",[null,[70,47],[70,51]]],0,0,0,0],"support/"],0,0,0,0,0],0,0,0,0],
        ["attribute","href",["concat",[["get","host",["loc",[null,[74,47],[74,51]]],0,0,0,0],"settings/"],0,0,0,0,0],0,0,0,0],
        ["attribute","onclick",["subexpr","action",["logout"],[],["loc",[null,[null,null],[77,66]]],0,0],0,0,0,0]
      ],
      locals: [],
      templates: []
    };
  }());
  var child6 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 83,
                "column": 24
              },
              "end": {
                "line": 91,
                "column": 24
              }
            },
            "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1,"class","dropdown sign-in");
            dom.setAttribute(el1,"data-bind","with: $root.signIn");
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","btn-group");
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3,"href","${domain}login/?campaign=institution&redirect_url=${redirect_url}");
            dom.setAttribute(el3,"class","btn btn-info btn-top-login");
            var el4 = dom.createTextNode("\n                                        Sign in ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4,"class","hidden-xs");
            var el5 = dom.createElement("i");
            dom.setAttribute(el5,"class","fa fa-arrow-right");
            dom.appendChild(el4, el5);
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
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 91,
                "column": 24
              },
              "end": {
                "line": 98,
                "column": 24
              }
            },
            "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
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
            dom.setAttribute(el1,"class","dropdown sign-in");
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col-sm-12");
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3,"class","btn btn-success btn-top-signup m-r-xs");
            var el4 = dom.createTextNode("Sign Up");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3,"class","btn btn-info btn-top-login m-r-xs");
            var el4 = dom.createTextNode("Sign in");
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
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1]);
            var element1 = dom.childAt(element0, [1]);
            var element2 = dom.childAt(element0, [3]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element1, 'href');
            morphs[1] = dom.createElementMorph(element2);
            return morphs;
          },
          statements: [
            ["attribute","href",["concat",[["get","signupUrl",["loc",[null,[94,47],[94,56]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
            ["element","action",[["get","loginAction",["loc",[null,[95,48],[95,59]]],0,0,0,0]],[],["loc",[null,[95,39],[95,61]]],0,0]
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
              "line": 82,
              "column": 20
            },
            "end": {
              "line": 99,
              "column": 20
            }
          },
          "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["block","if",[["get","institution",["loc",[null,[83,30],[83,41]]],0,0,0,0]],[],0,1,["loc",[null,[83,24],[98,31]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 82,
            "column": 20
          },
          "end": {
            "line": 99,
            "column": 20
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
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
        ["block","if",[["get","allowLogin",["loc",[null,[82,30],[82,40]]],0,0,0,0]],[],0,null,["loc",[null,[82,20],[99,20]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child7 = (function() {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 104,
            "column": 4
          },
          "end": {
            "line": 106,
            "column": 4
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
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
        ["inline","search-dropdown",[],["action","toggleSearch"],["loc",[null,[105,8],[105,49]]],0,0]
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
          "line": 108,
          "column": 0
        }
      },
      "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","osf-nav-wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("nav");
      dom.setAttribute(el2,"class","navbar navbar-inverse navbar-fixed-top");
      dom.setAttribute(el2,"id","navbarScope");
      dom.setAttribute(el2,"role","navigation");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","container");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","navbar-header");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("button");
      dom.setAttribute(el5,"type","button");
      dom.setAttribute(el5,"class","navbar-toggle collapsed");
      dom.setAttribute(el5,"data-toggle","collapse");
      dom.setAttribute(el5,"data-target","#navbar");
      dom.setAttribute(el5,"aria-expanded","false");
      dom.setAttribute(el5,"aria-controls","navbar");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","sr-only");
      var el7 = dom.createTextNode("Toggle navigation");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","icon-bar");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","icon-bar");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","icon-bar");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"class","navbar-brand hidden-sm hidden-xs");
      dom.setAttribute(el5,"href","/");
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","osf-navbar-logo");
      dom.setAttribute(el6,"width","27");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" Open Science Framework");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"class","navbar-brand visible-sm visible-xs");
      dom.setAttribute(el5,"href","/");
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","osf-navbar-logo");
      dom.setAttribute(el6,"width","27");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" OSF");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"id","navbar");
      dom.setAttribute(el4,"class","navbar-collapse collapse navbar-right");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      dom.setAttribute(el5,"class","nav navbar-nav");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      dom.setAttribute(el6,"class","dropdown");
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("a");
      dom.setAttribute(el7,"href","#");
      dom.setAttribute(el7,"class","dropdown-toggle");
      dom.setAttribute(el7,"data-toggle","dropdown");
      dom.setAttribute(el7,"role","button");
      dom.setAttribute(el7,"aria-expanded","false");
      var el8 = dom.createTextNode("Browse ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","caret");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("ul");
      dom.setAttribute(el7,"class","dropdown-menu");
      dom.setAttribute(el7,"role","menu");
      var el8 = dom.createTextNode("\n                            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("li");
      var el9 = dom.createElement("a");
      var el10 = dom.createTextNode("New Projects");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("li");
      var el9 = dom.createElement("a");
      var el10 = dom.createTextNode("Registry");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("li");
      var el9 = dom.createElement("a");
      var el10 = dom.createTextNode("Meetings");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("li");
      var el9 = dom.createElement("a");
      var el10 = dom.createTextNode("Preprints");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                        ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("                ");
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
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element16 = dom.childAt(fragment, [0]);
      var element17 = dom.childAt(element16, [1, 1]);
      var element18 = dom.childAt(element17, [1]);
      var element19 = dom.childAt(element17, [3, 1]);
      var element20 = dom.childAt(element19, [3, 3]);
      var element21 = dom.childAt(element20, [1, 0]);
      var element22 = dom.childAt(element20, [3, 0]);
      var element23 = dom.childAt(element20, [5, 0]);
      var element24 = dom.childAt(element20, [7, 0]);
      var morphs = new Array(11);
      morphs[0] = dom.createMorphAt(element18,3,3);
      morphs[1] = dom.createMorphAt(element18,9,9);
      morphs[2] = dom.createMorphAt(element19,1,1);
      morphs[3] = dom.createAttrMorph(element21, 'href');
      morphs[4] = dom.createAttrMorph(element22, 'href');
      morphs[5] = dom.createAttrMorph(element23, 'href');
      morphs[6] = dom.createAttrMorph(element24, 'href');
      morphs[7] = dom.createMorphAt(element19,5,5);
      morphs[8] = dom.createMorphAt(element19,6,6);
      morphs[9] = dom.createMorphAt(element19,7,7);
      morphs[10] = dom.createMorphAt(element16,3,3);
      return morphs;
    },
    statements: [
      ["block","unless",[["get","hideSearch",["loc",[null,[11,27],[11,37]]],0,0,0,0]],[],0,null,["loc",[null,[11,16],[20,27]]]],
      ["block","if",[["get","service",["loc",[null,[23,22],[23,29]]],0,0,0,0]],[],1,null,["loc",[null,[23,16],[25,23]]]],
      ["block","if",[["get","session.isAuthenticated",["loc",[null,[29,26],[29,49]]],0,0,0,0]],[],2,null,["loc",[null,[29,20],[32,27]]]],
      ["attribute","href",["concat",[["get","host",["loc",[null,[36,43],[36,47]]],0,0,0,0],"explore/activity/"],0,0,0,0,0],0,0,0,0],
      ["attribute","href",["concat",[["get","host",["loc",[null,[37,43],[37,47]]],0,0,0,0],"search/?q=*&filter=registration"],0,0,0,0,0],0,0,0,0],
      ["attribute","href",["concat",[["get","host",["loc",[null,[38,43],[38,47]]],0,0,0,0],"meetings/"],0,0,0,0,0],0,0,0,0],
      ["attribute","href",["concat",[["get","host",["loc",[null,[39,43],[39,47]]],0,0,0,0],"preprints/"],0,0,0,0,0],0,0,0,0],
      ["block","unless",[["get","session.isAuthenticated",["loc",[null,[42,31],[42,54]]],0,0,0,0]],[],3,null,["loc",[null,[42,20],[46,31]]]],
      ["block","unless",[["get","hideSearch",["loc",[null,[47,31],[47,41]]],0,0,0,0]],[],4,null,["loc",[null,[47,20],[55,31]]]],
      ["block","if",[["get","session.isAuthenticated",["loc",[null,[56,27],[56,50]]],0,0,0,0]],[],5,6,["loc",[null,[56,20],[99,27]]]],
      ["block","if",[["get","showSearch",["loc",[null,[104,10],[104,20]]],0,0,0,0]],[],7,null,["loc",[null,[104,4],[106,11]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4, child5, child6, child7]
  };
}()));