define("ember-osf/components/file-renderer/template", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
          "moduleName": "modules/ember-osf/components/file-renderer/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("iframe");
          dom.setAttribute(el1, "scrolling", "yes");
          dom.setAttribute(el1, "marginheight", "0");
          dom.setAttribute(el1, "frameborder", "0");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'src');
          morphs[1] = dom.createAttrMorph(element0, 'width');
          morphs[2] = dom.createAttrMorph(element0, 'height');
          morphs[3] = dom.createAttrMorph(element0, 'allowfullscreen');
          return morphs;
        },
        statements: [["attribute", "src", ["get", "mfrUrl", ["loc", [null, [2, 18], [2, 24]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "width", ["get", "width", ["loc", [null, [2, 35], [2, 40]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "height", ["get", "height", ["loc", [null, [2, 52], [2, 58]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "allowfullscreen", ["get", "allowfullscreen", ["loc", [null, [2, 128], [2, 143]]], 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
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
        "moduleName": "modules/ember-osf/components/file-renderer/template.hbs"
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
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "download", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [4, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});