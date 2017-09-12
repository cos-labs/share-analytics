'use strict';

define('analytics-dashboard/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/adapters/widget.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/widget.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/widget.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/components/agent-detail-widget/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/agent-detail-widget/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/agent-detail-widget/component.js should pass jshint.\ncomponents/agent-detail-widget/component.js: line 2, col 8, \'ENV\' is defined but never used.\n\n1 error');
  });
});
define('analytics-dashboard/tests/components/c3-chart/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/c3-chart/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/c3-chart/component.js should pass jshint.\ncomponents/c3-chart/component.js: line 80, col 74, Missing semicolon.\ncomponents/c3-chart/component.js: line 88, col 24, Expected \'}\' to match \'{\' from line 62 and instead saw \'function\'.\ncomponents/c3-chart/component.js: line 88, col 32, Bad invocation.\ncomponents/c3-chart/component.js: line 88, col 39, Expected \')\' and instead saw \'{\'.\ncomponents/c3-chart/component.js: line 88, col 40, Missing semicolon.\ncomponents/c3-chart/component.js: line 90, col 38, Missing semicolon.\ncomponents/c3-chart/component.js: line 98, col 9, Unrecoverable syntax error. (23% scanned).\n\n7 errors');
  });
});
define('analytics-dashboard/tests/components/dropdown-widget/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/dropdown-widget/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/dropdown-widget/component.js should pass jshint.\ncomponents/dropdown-widget/component.js: line 42, col 54, Missing semicolon.\ncomponents/dropdown-widget/component.js: line 56, col 30, Expected \'}\' to match \'{\' from line 3 and instead saw \'function\'.\ncomponents/dropdown-widget/component.js: line 56, col 38, Bad invocation.\ncomponents/dropdown-widget/component.js: line 56, col 50, Expected \')\' and instead saw \'{\'.\ncomponents/dropdown-widget/component.js: line 56, col 51, Missing semicolon.\ncomponents/dropdown-widget/component.js: line 58, col 34, Missing semicolon.\ncomponents/dropdown-widget/component.js: line 65, col 41, Unrecoverable syntax error. (29% scanned).\n\n7 errors');
  });
});
define('analytics-dashboard/tests/components/filter-plaques/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/filter-plaques/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/filter-plaques/component.js should pass jshint.\ncomponents/filter-plaques/component.js: line 16, col 8, Missing semicolon.\ncomponents/filter-plaques/component.js: line 23, col 34, Missing semicolon.\ncomponents/filter-plaques/component.js: line 33, col 38, Expected \'===\' and instead saw \'==\'.\ncomponents/filter-plaques/component.js: line 33, col 20, Confusing use of \'!\'.\ncomponents/filter-plaques/component.js: line 44, col 34, Missing semicolon.\ncomponents/filter-plaques/component.js: line 47, col 30, Missing semicolon.\ncomponents/filter-plaques/component.js: line 55, col 30, Expected \'}\' to match \'{\' from line 5 and instead saw \'function\'.\ncomponents/filter-plaques/component.js: line 55, col 38, Bad invocation.\ncomponents/filter-plaques/component.js: line 55, col 50, Expected \')\' and instead saw \'{\'.\ncomponents/filter-plaques/component.js: line 55, col 51, Missing semicolon.\ncomponents/filter-plaques/component.js: line 56, col 32, Missing semicolon.\ncomponents/filter-plaques/component.js: line 63, col 39, Unrecoverable syntax error. (75% scanned).\n\n12 errors');
  });
});
define('analytics-dashboard/tests/components/list-widget/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/list-widget/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/list-widget/component.js should pass jshint.\ncomponents/list-widget/component.js: line 13, col 18, Missing semicolon.\ncomponents/list-widget/component.js: line 16, col 44, Expected \'===\' and instead saw \'==\'.\ncomponents/list-widget/component.js: line 17, col 13, \'data\' used out of scope.\ncomponents/list-widget/component.js: line 44, col 30, \'data\' used out of scope.\ncomponents/list-widget/component.js: line 60, col 30, Expected \'}\' to match \'{\' from line 3 and instead saw \'function\'.\ncomponents/list-widget/component.js: line 60, col 38, Bad invocation.\ncomponents/list-widget/component.js: line 60, col 45, Expected \')\' and instead saw \'{\'.\ncomponents/list-widget/component.js: line 60, col 46, Missing semicolon.\ncomponents/list-widget/component.js: line 61, col 34, Missing semicolon.\ncomponents/list-widget/component.js: line 68, col 52, Unrecoverable syntax error. (73% scanned).\n\n10 errors');
  });
});
define('analytics-dashboard/tests/components/number-widget/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/number-widget/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/number-widget/component.js should pass jshint.\ncomponents/number-widget/component.js: line 33, col 17, \'facet\' is defined but never used.\ncomponents/number-widget/component.js: line 35, col 40, \'item\' is not defined.\ncomponents/number-widget/component.js: line 36, col 40, \'item\' is not defined.\n\n3 errors');
  });
});
define('analytics-dashboard/tests/components/object-detail-widget/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/object-detail-widget/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/object-detail-widget/component.js should pass jshint.\ncomponents/object-detail-widget/component.js: line 28, col 12, Expected \'{\' and instead saw \'var\'.\ncomponents/object-detail-widget/component.js: line 37, col 18, Expected \'{\' and instead saw \'r\'.\ncomponents/object-detail-widget/component.js: line 39, col 18, Expected \'{\' and instead saw \'r\'.\ncomponents/object-detail-widget/component.js: line 39, col 37, Expected \'===\' and instead saw \'==\'.\ncomponents/object-detail-widget/component.js: line 27, col 14, \'library\' used out of scope.\ncomponents/object-detail-widget/component.js: line 30, col 9, \'library\' used out of scope.\ncomponents/object-detail-widget/component.js: line 51, col 16, \'library\' used out of scope.\ncomponents/object-detail-widget/component.js: line 102, col 60, Missing semicolon.\ncomponents/object-detail-widget/component.js: line 112, col 33, Missing semicolon.\ncomponents/object-detail-widget/component.js: line 121, col 135, Missing semicolon.\ncomponents/object-detail-widget/component.js: line 124, col 137, Missing semicolon.\ncomponents/object-detail-widget/component.js: line 127, col 133, Missing semicolon.\ncomponents/object-detail-widget/component.js: line 2, col 8, \'ENV\' is defined but never used.\n\n13 errors');
  });
});
define('analytics-dashboard/tests/components/query-widget/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/query-widget/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/query-widget/component.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/components/results-list/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/results-list/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/results-list/component.js should pass jshint.\ncomponents/results-list/component.js: line 14, col 33, Missing semicolon.\ncomponents/results-list/component.js: line 16, col 16, Duplicate key \'pagebackbtn\'.\ncomponents/results-list/component.js: line 18, col 22, Expected \'===\' and instead saw \'==\'.\ncomponents/results-list/component.js: line 24, col 17, Duplicate key \'pagenextbtn\'.\ncomponents/results-list/component.js: line 32, col 57, Missing semicolon.\ncomponents/results-list/component.js: line 33, col 20, Missing semicolon.\ncomponents/results-list/component.js: line 40, col 98, Missing semicolon.\ncomponents/results-list/component.js: line 46, col 133, Missing semicolon.\ncomponents/results-list/component.js: line 49, col 135, Missing semicolon.\ncomponents/results-list/component.js: line 52, col 137, Missing semicolon.\ncomponents/results-list/component.js: line 55, col 133, Missing semicolon.\ncomponents/results-list/component.js: line 58, col 83, Missing semicolon.\ncomponents/results-list/component.js: line 78, col 65, Missing semicolon.\ncomponents/results-list/component.js: line 88, col 65, Missing semicolon.\n\n14 errors');
  });
});
define('analytics-dashboard/tests/components/search-facet-daterange/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/search-facet-daterange/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/search-facet-daterange/component.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/components/stacked-bars/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/stacked-bars/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/stacked-bars/component.js should pass jshint.\ncomponents/stacked-bars/component.js: line 40, col 58, Missing semicolon.\ncomponents/stacked-bars/component.js: line 94, col 11, Missing semicolon.\n\n2 errors');
  });
});
define('analytics-dashboard/tests/components/text-widget/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/text-widget/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/text-widget/component.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/components/widget-adapter/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/widget-adapter/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/widget-adapter/component.js should pass jshint.\ncomponents/widget-adapter/component.js: line 61, col 37, \'value\' is defined but never used.\ncomponents/widget-adapter/component.js: line 89, col 17, A generator function shall contain a yield statement.\ncomponents/widget-adapter/component.js: line 94, col 37, \'value\' is defined but never used.\ncomponents/widget-adapter/component.js: line 120, col 37, \'value\' is defined but never used.\ncomponents/widget-adapter/component.js: line 146, col 37, \'value\' is defined but never used.\ncomponents/widget-adapter/component.js: line 179, col 37, \'value\' is defined but never used.\ncomponents/widget-adapter/component.js: line 212, col 37, \'value\' is defined but never used.\ncomponents/widget-adapter/component.js: line 238, col 37, \'value\' is defined but never used.\ncomponents/widget-adapter/component.js: line 264, col 37, \'value\' is defined but never used.\ncomponents/widget-adapter/component.js: line 328, col 33, Missing semicolon.\ncomponents/widget-adapter/component.js: line 343, col 6, Missing semicolon.\ncomponents/widget-adapter/component.js: line 379, col 46, Missing semicolon.\ncomponents/widget-adapter/component.js: line 427, col 28, Expected \'}\' to match \'{\' from line 349 and instead saw \'function\'.\ncomponents/widget-adapter/component.js: line 427, col 36, Bad invocation.\ncomponents/widget-adapter/component.js: line 427, col 39, Expected \')\' and instead saw \'{\'.\ncomponents/widget-adapter/component.js: line 427, col 40, Missing semicolon.\ncomponents/widget-adapter/component.js: line 444, col 33, Missing semicolon.\ncomponents/widget-adapter/component.js: line 447, col 25, Missing semicolon.\ncomponents/widget-adapter/component.js: line 467, col 9, Unrecoverable syntax error. (74% scanned).\n\n19 errors');
  });
});
define('analytics-dashboard/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/controllers/dashboards/dashboard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/dashboards/dashboard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/dashboards/dashboard.js should pass jshint.\ncontrollers/dashboards/dashboard.js: line 73, col 28, \'widget\' is defined but never used.\ncontrollers/dashboards/dashboard.js: line 85, col 25, \'r\' is defined but never used.\n\n2 errors');
  });
});
define('analytics-dashboard/tests/ember-sinon-qunit/test', ['exports', 'ember', 'sinon', 'qunit', 'ember-qunit'], function (exports, _ember, _sinon, _qunit, _emberQunit) {
  exports['default'] = test;

  _sinon['default'].expectation.fail = _sinon['default'].assert.fail = function (msg) {
    _qunit['default'].ok(false, msg);
  };

  _sinon['default'].assert.pass = function (assertion) {
    _qunit['default'].ok(true, assertion);
  };

  _sinon['default'].config = {
    injectIntoThis: false,
    injectInto: null,
    properties: ['spy', 'stub', 'mock', 'sandbox'],
    useFakeTimers: false,
    useFakeServer: false
  };

  function test(testName, callback) {
    function sinonWrapper() {
      var context = this;
      if (_ember['default'].isBlank(context)) {
        context = {};
      }
      _sinon['default'].config.injectInto = context;

      return _sinon['default'].test(callback).apply(context, arguments);
    }

    return (0, _emberQunit.test)(testName, sinonWrapper);
  }
});
define('analytics-dashboard/tests/helpers/add.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/add.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/add.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('analytics-dashboard/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/helpers/ember-i18n/test-helpers', ['exports', 'ember'], function (exports, _ember) {

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  _ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  _ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof ok === 'function') {
      return function (element, key, text) {
        ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();
});
define('analytics-dashboard/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;
});
define('analytics-dashboard/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'analytics-dashboard/tests/helpers/start-app', 'analytics-dashboard/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _analyticsDashboardTestsHelpersStartApp, _analyticsDashboardTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _analyticsDashboardTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _analyticsDashboardTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('analytics-dashboard/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/helpers/resolver', ['exports', 'analytics-dashboard/resolver', 'analytics-dashboard/config/environment'], function (exports, _analyticsDashboardResolver, _analyticsDashboardConfigEnvironment) {

  var resolver = _analyticsDashboardResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _analyticsDashboardConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _analyticsDashboardConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('analytics-dashboard/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/helpers/start-app', ['exports', 'ember', 'analytics-dashboard/app', 'analytics-dashboard/config/environment'], function (exports, _ember, _analyticsDashboardApp, _analyticsDashboardConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _analyticsDashboardConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _analyticsDashboardApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('analytics-dashboard/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/initializers/component-routes.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/component-routes.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/component-routes.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/initializers/promise.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/promise.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/promise.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/instance-initializers/global.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | instance-initializers/global.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/global.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/integration/components/dropdown-widget/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('dropdown-widget', 'Integration | Component | dropdown widget', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 19
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'dropdown-widget', ['loc', [null, [1, 0], [1, 19]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'dropdown-widget', [], [], 0, null, ['loc', [null, [2, 4], [4, 24]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('analytics-dashboard/tests/integration/components/dropdown-widget/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/dropdown-widget/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/dropdown-widget/component-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/integration/components/list-widget/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('list-widget', 'Integration | Component | list widget', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'list-widget', ['loc', [null, [1, 0], [1, 15]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'list-widget', [], [], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('analytics-dashboard/tests/integration/components/list-widget/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/list-widget/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-widget/component-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/integration/components/number-widget/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('number-widget', 'Integration | Component | number widget', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'number-widget', ['loc', [null, [1, 0], [1, 17]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'number-widget', [], [], 0, null, ['loc', [null, [2, 4], [4, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('analytics-dashboard/tests/integration/components/number-widget/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/number-widget/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/number-widget/component-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/integration/components/search-facet-daterange/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('search-facet-daterange', 'Integration | Component | search facet daterange', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 26
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'search-facet-daterange', ['loc', [null, [1, 0], [1, 26]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'search-facet-daterange', [], [], 0, null, ['loc', [null, [2, 4], [4, 31]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('analytics-dashboard/tests/integration/components/search-facet-daterange/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/search-facet-daterange/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/search-facet-daterange/component-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/integration/components/stacked-bars/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('stacked-bars', 'Integration | Component | stacked bars', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'stacked-bars', ['loc', [null, [1, 0], [1, 16]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'stacked-bars', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('analytics-dashboard/tests/integration/components/stacked-bars/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/stacked-bars/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/stacked-bars/component-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/models/dashboard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/dashboard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/dashboard.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/models/institution.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/institution.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/institution.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/models/widget.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/widget.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/widget.js should pass jshint.\nmodels/widget.js: line 3, col 10, \'belongsTo\' is defined but never used.\n\n1 error');
  });
});
define('analytics-dashboard/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/routes/dashboards.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/dashboards.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/dashboards.js should pass jshint.\nroutes/dashboards.js: line 6, col 41, Expected \'===\' and instead saw \'==\'.\nroutes/dashboards.js: line 2, col 8, \'AuthenticatedRouteMixin\' is defined but never used.\n\n2 errors');
  });
});
define('analytics-dashboard/tests/routes/dashboards/dashboard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/dashboards/dashboard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/dashboards/dashboard.js should pass jshint.\nroutes/dashboards/dashboard.js: line 210, col 54, \'transition\' is defined but never used.\nroutes/dashboards/dashboard.js: line 229, col 41, \'queryParams\' is defined but never used.\n\n2 errors');
  });
});
define('analytics-dashboard/tests/test-helper', ['exports', 'analytics-dashboard/tests/helpers/resolver', 'ember-qunit'], function (exports, _analyticsDashboardTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_analyticsDashboardTestsHelpersResolver['default']);
});
define('analytics-dashboard/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('analytics-dashboard/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/adapters/widget-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:widget', 'Unit | Adapter | widget', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('analytics-dashboard/tests/unit/adapters/widget-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/widget-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/widget-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/controllers/dashboard-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:dashboard', 'Unit | Controller | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('analytics-dashboard/tests/unit/controllers/dashboard-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/dashboard-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/dashboard-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/controllers/widget-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:widget', 'Unit | Controller | widget', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('analytics-dashboard/tests/unit/controllers/widget-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/widget-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/widget-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/helpers/add-test', ['exports', 'tc3/helpers/add', 'qunit'], function (exports, _tc3HelpersAdd, _qunit) {

  (0, _qunit.module)('Unit | Helper | add');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _tc3HelpersAdd.add)([42]);
    assert.ok(result);
  });
});
define('analytics-dashboard/tests/unit/helpers/add-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/add-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/add-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/instance-initializers/global-test', ['exports', 'ember', 'tc3/instance-initializers/global', 'qunit', 'analytics-dashboard/tests/helpers/destroy-app'], function (exports, _ember, _tc3InstanceInitializersGlobal, _qunit, _analyticsDashboardTestsHelpersDestroyApp) {

  (0, _qunit.module)('Unit | Instance Initializer | global', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember['default'].run(function () {
        _this.application = _ember['default'].Application.create();
        _this.appInstance = _this.application.buildInstance();
      });
    },
    afterEach: function afterEach() {
      _ember['default'].run(this.appInstance, 'destroy');
      (0, _analyticsDashboardTestsHelpersDestroyApp['default'])(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _tc3InstanceInitializersGlobal.initialize)(this.appInstance);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('analytics-dashboard/tests/unit/instance-initializers/global-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/instance-initializers/global-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/instance-initializers/global-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/instance-initializers/global.js-test', ['exports', 'ember', 'tc3/instance-initializers/global.js', 'qunit', 'analytics-dashboard/tests/helpers/destroy-app'], function (exports, _ember, _tc3InstanceInitializersGlobalJs, _qunit, _analyticsDashboardTestsHelpersDestroyApp) {

  (0, _qunit.module)('Unit | Instance Initializer | global.js', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember['default'].run(function () {
        _this.application = _ember['default'].Application.create();
        _this.appInstance = _this.application.buildInstance();
      });
    },
    afterEach: function afterEach() {
      _ember['default'].run(this.appInstance, 'destroy');
      (0, _analyticsDashboardTestsHelpersDestroyApp['default'])(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _tc3InstanceInitializersGlobalJs.initialize)(this.appInstance);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('analytics-dashboard/tests/unit/instance-initializers/global.js-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/instance-initializers/global.js-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/instance-initializers/global.js-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/models/dashboard-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('dashboard', 'Unit | Model | dashboard', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('analytics-dashboard/tests/unit/models/dashboard-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/dashboard-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/dashboard-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/models/institution-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('institution', 'Unit | Model | institution', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('analytics-dashboard/tests/unit/models/institution-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/institution-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/institution-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/models/widget-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('widget', 'Unit | Model | widget', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('analytics-dashboard/tests/unit/models/widget-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/widget-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/widget-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/routes/dashboard-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('analytics-dashboard/tests/unit/routes/dashboard-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/dashboard-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dashboard-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/unit/utils/currency-rounder-test', ['exports', 'analytics-dashboard/utils/currency-rounder', 'qunit'], function (exports, _analyticsDashboardUtilsCurrencyRounder, _qunit) {

  // Replace this with your real tests.
  (0, _qunit.test)('works with billions', function (assert) {
    var rawValue = 180000000123;
    var result = (0, _analyticsDashboardUtilsCurrencyRounder['default'])(rawValue);
    assert.equal(result, '180B');
  });
});
define('analytics-dashboard/tests/unit/utils/currency-rounder-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/currency-rounder-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/utils/currency-rounder-test.js should pass jshint.\nunit/utils/currency-rounder-test.js: line 2, col 10, \'module\' is defined but never used.\n\n1 error');
  });
});
define('analytics-dashboard/tests/unit/utils/date-interval-test', ['exports', 'analytics-dashboard/utils/date-interval', 'qunit'], function (exports, _analyticsDashboardUtilsDateInterval, _qunit) {

  (0, _qunit.module)('Unit | Utility | date interval');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _analyticsDashboardUtilsDateInterval['default'])();
    assert.ok(result);
  });
});
define('analytics-dashboard/tests/unit/utils/date-interval-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/date-interval-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/date-interval-test.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/utils/currency-rounder.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/currency-rounder.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/currency-rounder.js should pass jshint.');
  });
});
define('analytics-dashboard/tests/utils/date-interval.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/date-interval.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/date-interval.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('analytics-dashboard/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
