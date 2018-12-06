'use strict';

define('sa-dashboard/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n8:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n19:16 - Use import { underscore } from \'@ember/string\'; instead of using Ember.String.underscore (ember/new-module-imports)');
  });

  QUnit.test('adapters/widget.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/widget.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass ESLint\n\n9:11 - Use import Application from \'@ember/application\'; instead of using Ember.Application (ember/new-module-imports)');
  });

  QUnit.test('components/agent-detail-widget/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/agent-detail-widget/component.js should pass ESLint\n\n2:8 - \'ENV\' is defined but never used. (no-unused-vars)\n5:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n7:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n10:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n25:22 - Do not use this.attrs (ember/no-attrs-in-components)\n32:18 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('components/c3-chart/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/c3-chart/component.js should pass ESLint\n\n3:8 - \'ENV\' is defined but never used. (no-unused-vars)\n63:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n68:18 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n72:19 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n76:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n93:39 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n104:18 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n110:21 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n141:17 - \'_data\' is assigned a value but never used. (no-unused-vars)\n157:17 - \'columns\' is already defined. (no-redeclare)\n157:55 - \'number\' is defined but never used. (no-unused-vars)\n162:41 - \'percentage\' is defined but never used. (no-unused-vars)\n163:73 - \'arr\' is defined but never used. (no-unused-vars)\n190:17 - \'columns\' is already defined. (no-redeclare)\n207:40 - \'tooltip\' is not defined. (no-undef)\n214:17 - \'columns\' is already defined. (no-redeclare)\n266:17 - \'columns\' is already defined. (no-redeclare)\n296:55 - \'a\' is defined but never used. (no-unused-vars)\n324:17 - \'labels\' is assigned a value but never used. (no-unused-vars)\n330:64 - \'arr\' is defined but never used. (no-unused-vars)\n347:32 - \'d\' is defined but never used. (no-unused-vars)\n378:18 - Do not use this.attrs (ember/no-attrs-in-components)\n384:52 - \'arr\' is defined but never used. (no-unused-vars)\n397:22 - Do not use this.attrs (ember/no-attrs-in-components)\n409:22 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('components/dropdown-widget/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/dropdown-widget/component.js should pass ESLint\n\n5:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n14:18 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n27:30 - Use import { A } from \'@ember/array\'; instead of using Ember.A (ember/new-module-imports)\n28:34 - Use import { A } from \'@ember/array\'; instead of using Ember.A (ember/new-module-imports)\n56:35 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n68:23 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n68:23 - \'$\' is not defined. (no-undef)\n77:9 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n82:9 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n158:22 - Do not use this.attrs (ember/no-attrs-in-components)\n164:18 - Do not use this.attrs (ember/no-attrs-in-components)\n211:37 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)');
  });

  QUnit.test('components/filter-plaques/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/filter-plaques/component.js should pass ESLint\n\n9:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n37:23 - Use import { Promise } from \'rsvp\'; instead of using Ember.RSVP.Promise (ember/new-module-imports)\n65:9 - \'$\' is not defined. (no-undef)\n66:11 - \'$\' is not defined. (no-undef)\n67:13 - Unexpected console statement. (no-console)\n80:33 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n101:14 - Do not use this.attrs (ember/no-attrs-in-components)\n107:14 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('components/list-widget/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/list-widget/component.js should pass ESLint\n\n3:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n4:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n65:35 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n89:18 - Do not use this.attrs (ember/no-attrs-in-components)\n93:14 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('components/number-widget/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/number-widget/component.js should pass ESLint\n\n3:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n5:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n16:34 - Use import { assign } from \'@ember/polyfills\'; instead of using Ember.assign (ember/new-module-imports)\n33:17 - \'facet\' is assigned a value but never used. (no-unused-vars)\n35:40 - \'item\' is not defined. (no-undef)\n36:40 - \'item\' is not defined. (no-undef)\n40:22 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('components/object-detail-widget/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/object-detail-widget/component.js should pass ESLint\n\n2:8 - \'ENV\' is defined but never used. (no-unused-vars)\n10:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n16:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n20:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n24:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n55:21 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n61:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n77:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n91:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n99:20 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n138:18 - Do not use this.attrs (ember/no-attrs-in-components)\n146:18 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('components/query-widget/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/query-widget/component.js should pass ESLint\n\n3:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n16:18 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('components/results-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/results-list/component.js should pass ESLint\n\n4:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n6:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n19:9 - \'$\' is not defined. (no-undef)\n19:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n20:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n20:13 - \'$\' is not defined. (no-undef)\n23:9 - \'$\' is not defined. (no-undef)\n23:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n24:13 - Don\'t use jQuery without Ember Run Loop (ember/jquery-ember-run)\n25:13 - Don\'t use jQuery without Ember Run Loop (ember/jquery-ember-run)\n45:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n45:21 - \'$\' is not defined. (no-undef)\n46:39 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n46:39 - \'$\' is not defined. (no-undef)\n55:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n55:13 - \'$\' is not defined. (no-undef)\n56:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n56:13 - \'$\' is not defined. (no-undef)\n59:5 - Duplicate key \'pagebackbtn\'. (no-dupe-keys)\n59:18 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n68:5 - Duplicate key \'pagenextbtn\'. (no-dupe-keys)\n68:18 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n75:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n118:17 - Unexpected console statement. (no-console)\n122:22 - Do not use this.attrs (ember/no-attrs-in-components)\n130:18 - Do not use this.attrs (ember/no-attrs-in-components)\n134:13 - Unexpected console statement. (no-console)\n141:18 - Do not use this.attrs (ember/no-attrs-in-components)\n144:30 - \'$\' is not defined. (no-undef)\n144:30 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n146:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n146:13 - \'$\' is not defined. (no-undef)\n147:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n147:13 - \'$\' is not defined. (no-undef)\n150:17 - Unexpected console statement. (no-console)\n151:22 - Do not use this.attrs (ember/no-attrs-in-components)\n153:17 - Unexpected console statement. (no-console)\n156:22 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('components/search-facet-daterange/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/search-facet-daterange/component.js should pass ESLint\n\n6:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n7:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n35:13 - Use import { run } from \'@ember/runloop\'; instead of using Ember.run (ember/new-module-imports)\n43:13 - Use import { run } from \'@ember/runloop\'; instead of using Ember.run (ember/new-module-imports)\n48:9 - Use import { scheduleOnce } from \'@ember/runloop\'; instead of using Ember.run.scheduleOnce (ember/new-module-imports)\n53:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n54:14 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n63:20 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n95:18 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('components/stacked-bars/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/stacked-bars/component.js should pass ESLint\n\n6:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n8:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n9:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n118:20 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('components/text-widget/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/text-widget/component.js should pass ESLint\n\n3:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n8:18 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('components/user-feedback-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/user-feedback-form/component.js should pass ESLint\n\n3:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n9:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n9:5 - \'$\' is not defined. (no-undef)\n11:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n11:5 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('components/widget-adapter/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/widget-adapter/component.js should pass ESLint\n\n19:7 - \'agg_types\' is assigned a value but never used. (no-unused-vars)\n73:37 - \'value\' is defined but never used. (no-unused-vars)\n99:28 - This generator function does not have \'yield\'. (require-yield)\n106:37 - \'value\' is defined but never used. (no-unused-vars)\n132:37 - \'value\' is defined but never used. (no-unused-vars)\n158:37 - \'value\' is defined but never used. (no-unused-vars)\n191:37 - \'value\' is defined but never used. (no-unused-vars)\n224:37 - \'value\' is defined but never used. (no-unused-vars)\n250:37 - \'value\' is defined but never used. (no-unused-vars)\n276:37 - \'value\' is defined but never used. (no-unused-vars)\n361:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n366:18 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n377:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n380:12 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n401:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n409:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n446:9 - \'MathJax\' is not defined. (no-undef)\n446:38 - \'MathJax\' is not defined. (no-undef)\n454:13 - \'query\' is assigned a value but never used. (no-unused-vars)\n455:13 - \'gte\' is assigned a value but never used. (no-unused-vars)\n456:13 - \'lte\' is assigned a value but never used. (no-unused-vars)\n457:13 - \'interval\' is assigned a value but never used. (no-unused-vars)\n470:26 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n517:13 - Use closure actions, unless you need bubbling (ember/closure-actions)\n531:13 - Unexpected console statement. (no-console)\n541:13 - Unexpected console statement. (no-console)\n548:13 - Use closure actions, unless you need bubbling (ember/closure-actions)\n552:17 - \'name\' is assigned a value but never used. (no-unused-vars)\n559:17 - \'self\' is assigned a value but never used. (no-unused-vars)\n560:82 - \'arr\' is defined but never used. (no-unused-vars)\n566:30 - \'route\' is defined but never used. (no-unused-vars)\n579:13 - Unexpected console statement. (no-console)\n580:17 - \'widgetType\' is assigned a value but never used. (no-unused-vars)\n584:17 - \'author\' is assigned a value but never used. (no-unused-vars)\n645:13 - Use closure actions, unless you need bubbling (ember/closure-actions)');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n9:16 - Use import Controller from \'@ember/controller\'; instead of using Ember.Controller (ember/new-module-imports)\n10:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)');
  });

  QUnit.test('controllers/dashboards/dashboard.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/dashboards/dashboard.js should pass ESLint\n\n3:16 - Use import Controller from \'@ember/controller\'; instead of using Ember.Controller (ember/new-module-imports)\n24:19 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n32:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n35:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n38:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n39:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n41:21 - Don\'t use Ember\'s function prototype extensions (ember/no-function-prototype-extensions)\n44:5 - Call this._super(...arguments) in init hook (ember/require-super-in-init)\n75:28 - \'widget\' is defined but never used. (no-unused-vars)\n87:25 - \'r\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('helpers/add.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/add.js should pass ESLint\n\n7:16 - Use import { helper } from \'@ember/component/helper\'; instead of using Ember.Helper.helper (ember/new-module-imports)');
  });

  QUnit.test('initializers/component-routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/component-routes.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/promise.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/promise.js should pass ESLint\n\n4:20 - Use import { Promise } from \'rsvp\'; instead of using Ember.RSVP.Promise (ember/new-module-imports)');
  });

  QUnit.test('instance-initializers/global.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/global.js should pass ESLint\n\n');
  });

  QUnit.test('models/dashboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/dashboard.js should pass ESLint\n\n');
  });

  QUnit.test('models/institution.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/institution.js should pass ESLint\n\n');
  });

  QUnit.test('models/widget.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/widget.js should pass ESLint\n\n3:10 - \'belongsTo\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass ESLint\n\n4:16 - Use import EmberRouter from \'@ember/routing/router\'; instead of using Ember.Router (ember/new-module-imports)');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass ESLint\n\n5:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)\n7:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n8:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)');
  });

  QUnit.test('routes/dashboards.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/dashboards.js should pass ESLint\n\n2:8 - \'AuthenticatedRouteMixin\' is defined but never used. (no-unused-vars)\n4:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/dashboards/dashboard.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/dashboards/dashboard.js should pass ESLint\n\n184:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)\n204:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n211:54 - \'transition\' is defined but never used. (no-unused-vars)\n251:37 - Unnecessary escape character: \\". (no-useless-escape)\n251:53 - Unnecessary escape character: \\". (no-useless-escape)\n252:29 - Unnecessary escape character: \\". (no-useless-escape)\n252:44 - Unnecessary escape character: \\". (no-useless-escape)\n257:25 - Unnecessary escape character: \\". (no-useless-escape)\n257:55 - Unnecessary escape character: \\". (no-useless-escape)\n259:25 - Unnecessary escape character: \\". (no-useless-escape)\n259:47 - Unnecessary escape character: \\". (no-useless-escape)\n279:25 - Unnecessary escape character: \\". (no-useless-escape)\n279:54 - Unnecessary escape character: \\". (no-useless-escape)\n281:25 - Unnecessary escape character: \\". (no-useless-escape)\n281:54 - Unnecessary escape character: \\". (no-useless-escape)\n300:46 - Unnecessary escape character: \\". (no-useless-escape)\n300:75 - Unnecessary escape character: \\". (no-useless-escape)\n305:48 - Unnecessary escape character: \\". (no-useless-escape)\n305:65 - Unnecessary escape character: \\". (no-useless-escape)\n306:46 - Unnecessary escape character: \\". (no-useless-escape)\n306:64 - Unnecessary escape character: \\". (no-useless-escape)\n307:69 - Unnecessary escape character: \\". (no-useless-escape)\n307:89 - Unnecessary escape character: \\". (no-useless-escape)\n308:29 - Unnecessary escape character: \\". (no-useless-escape)\n308:49 - Unnecessary escape character: \\". (no-useless-escape)\n309:33 - Unnecessary escape character: \\". (no-useless-escape)\n309:50 - Unnecessary escape character: \\". (no-useless-escape)\n313:41 - \'queryParams\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('utils/currency-rounder.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/currency-rounder.js should pass ESLint\n\n');
  });

  QUnit.test('utils/date-interval.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/date-interval.js should pass ESLint\n\n');
  });
});
define('sa-dashboard/tests/components/ember-ace', ['exports', 'ember-ace/test-support/components/ember-ace'], function (exports, _emberAce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberAce.default;
    }
  });
});
define("sa-dashboard/tests/ember-sinon-qunit/test", ["exports", "ember-sinon-qunit/test-support/test"], function (exports, _test) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    console.warn("Using deprecated import path for ember-sinon-qunit; use `import test from 'ember-sinon-qunit/test-support/test';` instead.");
    return _test.default.apply(this, arguments);
  };
});
define('sa-dashboard/tests/factories/citation', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('citation', {
        default: {
            citation: () => _faker.default.lorem.words(10)
        }
    });
});
define('sa-dashboard/tests/factories/collection', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('collection', {
        default: {
            title: () => _faker.default.lorem.words(3),
            dateCreated: () => _faker.default.date.past(1),
            dateModified: () => _faker.default.date.recent(1),
            bookmarks: false
        },
        traits: {
            hasNodes: {
                linkedNodes: _emberDataFactoryGuy.default.hasMany('node', 3)
            },
            hasRegistrations: {
                linkedRegistrations: _emberDataFactoryGuy.default.hasMany('registration', 3)
            },
            isBookmark: {
                bookmarks: true
            }
        }
    });
});
define('sa-dashboard/tests/factories/comment-report', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('comment-report', {
        default: {
            category: () => _faker.default.random.arrayElement(['hate', 'spam', 'violence']),
            text: _emberDataFactoryGuy.default.belongsTo('comment')
        }
    });
});
define('sa-dashboard/tests/factories/comment', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('comment', {
        default: {
            content: () => _faker.default.lorem.sentence(),

            dateCreated: () => _faker.default.date.past(1),
            dateModified: () => _faker.default.date.recent(1),

            modified: true,
            deleted: false,

            isAbuse: false,
            hasChildren: false,

            canEdit: true
        },
        traits: {
            // List of possible "page" values h/t Saman- must be one of these values. Mutually exclusive.
            isWiki: {
                page: 'wiki'
            },
            isNode: {
                page: 'node'
            },
            isFile: {
                page: 'files'
            },
            // TODO: Add a hasReplies trait in the future to support replies- can we make reply page type match the specified parent type?
            // Not sure if reply needs to have same page type for hasReplies to be useful. Can always make manual replies with relevant type
            hasReplies: {
                replies: _emberDataFactoryGuy.default.hasMany('comment', 3)
            }
        }
    });
});
define('sa-dashboard/tests/factories/contributor', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('contributor', {
        default: {
            bibliographic: () => _faker.default.random.boolean(),
            permission: () => _faker.default.random.arrayElement(['read', 'write', 'admin']),
            // nodeID: // TODO: Field not defined in serializer. Find out meaning and add to factory.
            users: _emberDataFactoryGuy.default.belongsTo('user'),
            index: () => _faker.default.random.number(),
            fullName: () => _faker.default.lorem.words(2),
            email: () => _faker.default.internet.email(),
            node: _emberDataFactoryGuy.default.belongsTo('node')
        }
    });
});
define('sa-dashboard/tests/factories/draft-registration', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('draft-registration', {
        default: {
            registrationSupplement: () => _faker.default.lorem.words(1),
            datetimeInitiated: () => _faker.default.date.past(1),
            datetimeUpdated: () => _faker.default.date.recent(),
            branchedFrom: _emberDataFactoryGuy.default.belongsTo('node'),
            initiator: _emberDataFactoryGuy.default.belongsTo('user'),
            registrationSchema: _emberDataFactoryGuy.default.belongsTo('metaschema')
        }
    });
});
define('sa-dashboard/tests/factories/file-provider', ['ember-data-factory-guy'], function (_emberDataFactoryGuy) {
    'use strict';

    _emberDataFactoryGuy.default.define('file-provider', {
        default: {
            name: 'osfstorage',
            kind: 'folder',
            path: '/',
            provider: 'osfstorage',
            node: _emberDataFactoryGuy.default.belongsTo('node')
        },
        traits: {
            hasFiles: {
                files: () => _emberDataFactoryGuy.default.hasMany('file', 3)
            }
        }
    });
});
define('sa-dashboard/tests/factories/file-version', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('file-version', {
        default: {
            size: () => _faker.default.random.number(),
            contentType: 'text/plain' // faker.system may not come with older versions of lib
        }
    });
});
define('sa-dashboard/tests/factories/file', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('file', {
        default: {
            name: () => _faker.default.lorem.words(1) + '.txt',
            kind: 'file',
            path: '/1234567890', // Faker.system.filePath may not yet be implemented
            size: () => _faker.default.random.number(),
            provider: 'osfstorage',
            materializedPath: () => '/' + _faker.default.lorem.words(1) + '.png',
            lastTouched: null,

            dateModified: () => _faker.default.date.recent(1),
            dateCreated: () => _faker.default.date.past(1),

            isProvider: false,
            checkout: null,

            links: {
                upload: '/this/is/an/upload/url',
                download: '/this/is/a/download/url',
                move: '/this/is/a/move/url',
                delete: '/this/is/a/delete/url',
                new_folder: '/this/is/a/new_folder/url'
            }
        },
        traits: {
            // Folder specific
            isFolder: {
                kind: 'folder',
                materializedPath: () => '/' + _faker.default.lorem.words(1),
                files: () => _emberDataFactoryGuy.default.hasMany('file', 3)
            },
            // File specific
            hasVersions: {
                kind: 'file',
                versions: () => _emberDataFactoryGuy.default.hasMany('file-version', 3)
            },
            hasComments: {
                kind: 'file',
                comments: () => _emberDataFactoryGuy.default.hasMany('comment', 3)
            },
            hasTags: {
                kind: 'file',
                tags: () => [_faker.default.lorem.words(1), _faker.default.lorem.words(1), _faker.default.lorem.words(1)]
            }
        }
    });
});
define('sa-dashboard/tests/factories/institution', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('institution', {
        default: {
            name: () => _faker.default.lorem.words(3),
            description: () => _faker.default.lorem.sentences(3),
            logoPath: '/img.jpg',
            authUrl: () => _faker.default.internet.url()
        },
        traits: {
            // TODO: Add children relations, if that field turns out to be needed after all (henrique)
            hasNodes: {
                nodes: () => _emberDataFactoryGuy.default.hasMany('node', 3)
            },
            hasRegistrations: {
                registrations: () => _emberDataFactoryGuy.default.hasMany('registration', 3)
            }
        }
    });
});
define('sa-dashboard/tests/factories/license', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('license', {
        default: {
            name: () => _faker.default.lorem.words(1),
            text: () => _faker.default.lorem.words(15)
        }
    });
});
define('sa-dashboard/tests/factories/log', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('log', {
        default: {
            date: () => _faker.default.date.past(1),
            // Extracted from Nodelog.actions as of May 24, 2016
            action: () => _faker.default.random.arrayElement(['checked_in', 'checked_out', 'file_tag_removed', 'file_tag_added', 'created_from', 'project_created', 'project_registered', 'project_deleted', 'node_created', 'node_forked', 'node_removed', 'pointer_created', 'pointer_forked', 'pointer_removed', 'wiki_updated', 'wiki_deleted', 'wiki_renamed', 'made_wiki_public', 'made_wiki_private', 'contributor_added', 'contributor_removed', 'contributors_reordered', 'permissions_updated', 'made_private', 'made_public', 'tag_added', 'tag_removed', 'edit_title', 'edit_description', 'updated_fields', 'addon_file_moved', 'addon_file_copied', 'folder_created', 'file_added', 'file_updated', 'file_removed', 'file_restored', 'addon_added', 'addon_removed', 'comment_added', 'comment_removed', 'comment_updated', 'made_contributor_visible', 'made_contributor_invisible', 'external_ids_added', 'embargo_approved', 'embargo_cancelled', 'embargo_completed', 'embargo_initiated', 'retraction_approved', 'retraction_cancelled', 'retraction_initiated', 'registration_cancelled', 'registration_initiated', 'registration_approved', 'prereg_registration_initiated', 'citation_added', 'citation_edited', 'citation_removed', 'primary_institution_changed', 'primary_institution_removed']),
            params: {} // Correct info from this field will depend on the log type
            // TODO: Figure out node vs originalnode vs linkedNode vs templateNode, and add sample traits with correct values
        }
    });
});
define('sa-dashboard/tests/factories/metaschema', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('metaschema', {
        default: {
            name: () => _faker.default.lorem.words(1),
            schemaVersion: () => _faker.default.random.number(),
            schema: {}
        }
    });
});
define('sa-dashboard/tests/factories/node-link', ['ember-data-factory-guy'], function (_emberDataFactoryGuy) {
    'use strict';

    _emberDataFactoryGuy.default.define('node-link', {
        default: {
            targetNode: _emberDataFactoryGuy.default.belongsTo('node')
        }
    });
});
define('sa-dashboard/tests/factories/node', ['ember-data-factory-guy', 'faker', 'ember-osf/const/permissions'], function (_emberDataFactoryGuy, _faker, _permissions) {
    'use strict';

    _emberDataFactoryGuy.default.define('node', {
        default: {
            title: () => _faker.default.lorem.words(4),
            description: () => _faker.default.lorem.paragraphs(2, '\n'),
            // Extracted from Node model CATEGORY_MAP as of May 24, 2016
            category: () => _faker.default.random.arrayElement(['analysis', 'communication', 'data', 'hypothesis', 'instrumentation', 'methods and measures', 'procedure', 'project', 'software', 'other', '']),

            currentUserPermissions: () => _faker.default.random.arrayElement([_permissions.default.READ, _permissions.default.WRITE, _permissions.default.ADMIN]),

            fork: false,
            collection: false,
            registration: false,
            public: () => _faker.default.random.boolean(),

            dateCreated: () => _faker.default.date.past(1),
            dateModified: () => _faker.default.date.recent(1)
        },
        traits: {
            hasParent: { // Is a child of a public node
                parent: () => _emberDataFactoryGuy.default.belongsTo('node')
            },
            hasChildren: { // Has one layer of child projects
                children: _emberDataFactoryGuy.default.hasMany('node', 3)
            },
            hasInstitution: {
                affiliatedInstitutions: _emberDataFactoryGuy.default.hasMany('institution', 1)
            },
            hasComments: {
                comments: _emberDataFactoryGuy.default.hasMany('comment', 3)
            },
            hasContributors: {
                contributors: _emberDataFactoryGuy.default.hasMany('contributor', 3)
            },
            hasFiles: {
                files: _emberDataFactoryGuy.default.hasMany('file-provider', 3, 'hasFiles')
            },
            hasRegistrations: {
                registrations: _emberDataFactoryGuy.default.hasMany('registration', 1)
            },
            hasLogs: {
                logs: _emberDataFactoryGuy.default.hasMany('log', 5)
            },
            hasTags: {
                tags: () => [_faker.default.lorem.words(1), _faker.default.lorem.words(1), _faker.default.lorem.words(1)]
            }
        }
    });
});
define('sa-dashboard/tests/factories/preprint-provider', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('preprint-provider', {
        default: {
            name: () => _faker.default.lorem.words(1),
            logoPath: () => '/static/img/preprint_providers/' + _faker.default.lorem.words(1) + '.png',
            bannerPath: () => '/static/img/preprint_providers/' + _faker.default.lorem.words(1) + '.png',
            description: () => _faker.default.lorem.words(3),
            advisoryBoard: () => _faker.default.lorem.paragraphs(2),
            emailContact: 'contact+fake@osf.io',
            emailSupport: 'support+fake@osf.io',
            headerText: () => _faker.default.lorem.words(3),
            taxonomy: _emberDataFactoryGuy.default.hasMany('taxonomy', 20)
        },
        traits: {
            isOSF: {
                id: 'osf'
            },
            hasPreprints: {
                preprints: _emberDataFactoryGuy.default.hasMany('preprint', 5)
            },
            hasLicenses: {
                licensesAcceptable: _emberDataFactoryGuy.default.hasMany('license', 3)
            }
        }
    });
});
define('sa-dashboard/tests/factories/preprint', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('preprint', {
        default: {
            dateCreated: () => _faker.default.date.past(2),
            datePublished: () => _faker.default.date.past(1),
            dateModified: () => _faker.default.date.recent(),
            doi: () => '10.1000/' + String(_faker.default.random.number()),
            node: _emberDataFactoryGuy.default.belongsTo('node'),
            license: _emberDataFactoryGuy.default.belongsTo('license'),
            primaryFile: _emberDataFactoryGuy.default.belongsTo('file'),
            provider: _emberDataFactoryGuy.default.belongsTo('preprint-provider'),
            isPublished: false,
            isPreprintOrphan: false
        },
        traits: {
            hasBeenPublished: {
                isPublished: true
            }
        }
    });
});
define('sa-dashboard/tests/factories/registration', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('registration', {
        default: {
            dateRegistered: () => _faker.default.date.past(1),
            pendingRegistrationApproval: false,

            embargoEndDate: () => _faker.default.date.future(1),
            pendingEmbargoApproval: false,

            withdrawn: false,
            pendingWithdrawal: false,

            // TODO: Implement with sample data for faker, possibly traits for different reg types
            registrationSupplement: null,
            registeredMeta: null,

            registeredFrom: () => _emberDataFactoryGuy.default.belongsTo('node'),
            registeredBy: () => _emberDataFactoryGuy.default.belongsTo('user'),

            contributors: () => _emberDataFactoryGuy.default.hasMany('contributor', 3)
        },
        traits: {
            hasComments: {
                comments: () => _emberDataFactoryGuy.default.hasMany('comment', 3)
            }
        }
    });
});
define('sa-dashboard/tests/factories/taxonomy', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('taxonomy', {
        default: {
            text: () => _faker.default.lorem.words(2),
            child_count: () => _faker.default.random.number(),
            parents: null
        },
        traits: {
            hasParents: {
                parents: () => [String(_faker.default.random.number())]
            }
        }
    });
});
define('sa-dashboard/tests/factories/user', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('user', {
        default: {
            fullName: () => _faker.default.name.findName(),
            givenName: () => _faker.default.name.firstName(),
            familyName: () => _faker.default.name.lastName(),
            dateRegistered: () => _faker.default.date.past(1)
        },
        traits: {
            // TODO: Consider writing tests that would force pagination of relationships (!)
            hasProjects: {
                nodes: () => _emberDataFactoryGuy.default.hasMany('node', 3)
            },
            hasRegistrations: {
                registrations: () => _emberDataFactoryGuy.default.hasMany('registration', 3)
            },
            hasInstitutions: {
                affiliatedInstitutions: () => _emberDataFactoryGuy.default.hasMany('institution', 2)
            }
        }
    });
});
define('sa-dashboard/tests/factories/wiki', ['ember-data-factory-guy', 'faker'], function (_emberDataFactoryGuy, _faker) {
    'use strict';

    _emberDataFactoryGuy.default.define('wiki', {
        defaults: {
            kind: 'file',
            name: () => _faker.default.lorem.words(2),
            dateModified: () => _faker.default.date.recent(),
            contentType: 'text/markdown',
            path: () => '/' + _faker.default.lorem.words(1),
            currentUserCanComment: () => _faker.default.random.boolean(),
            materializedPath: () => '/' + _faker.default.lorem.words(1),
            size: () => _faker.default.random.number(),
            node: _emberDataFactoryGuy.default.belongsTo('node')
        }
    });
});
define('sa-dashboard/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('sa-dashboard/tests/helpers/ember-cli-clipboard', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.triggerSuccess = triggerSuccess;
  exports.triggerError = triggerError;

  exports.default = function () {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'success');
    });

    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'error');
    });
  };

  /* === Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerSuccess(context, selector) {
    fireComponentAction(context, selector, 'success');
  }

  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerError(context, selector) {
    fireComponentAction(context, selector, 'error');
  }

  /* === Acceptance Test Helpers === */

  /**
   * Default export is a function that registers acceptance test helpers
   */


  /* === Private Functions === */

  /**
   * Fires named action for an instance of a copy-button component in an app
   * @function fireComponentActionFromApp
   * @param {Object} app - Ember application
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireComponentActionFromApp(app, selector, actionName) {
    fireComponentAction({
      container: app.__container__,
      $: app.$
    }, selector, actionName);
  }

  /**
   * Fires named action for an instance of a copy-button component
   * @function fireComponentAction
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireComponentAction(context, selector, actionName) {
    let component = getComponentBySelector(context, selector);
    fireActionByName(component, actionName);
  }

  /**
   * Fetches component reference for a given context and selector
   * @function getComponentBySelector
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Object} component object
   */
  function getComponentBySelector(context, selector = '.copy-btn') {
    let emberId = context.$(selector).attr('id');
    return context.container.lookup('-view-registry:main')[emberId];
  }

  /**
   * Fires a component's action given an action name
   * @function fireActionByName
   * @param {Ember.Component} component - component to fire action from
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireActionByName(component, actionName) {
    let action = component[actionName];

    Ember.run(() => {
      if (typeof action === 'string') {
        component.sendAction(action);
      } else {
        action();
      }
    });
  }
});
define('sa-dashboard/tests/helpers/ember-i18n/test-helpers', [], function () {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    const i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    const text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  const assertTranslation = function () {
    if (typeof QUnit !== 'undefined' && typeof QUnit.assert.ok === 'function') {
      return function (element, key, text) {
        QUnit.assert.ok(find(`${element}:contains(${text})`).length, `Found translation key ${key} in ${element}`);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        const found = !!find(`${element}:contains(${text})`).length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  }();
});
define('sa-dashboard/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, { until: '1.11.0', id: `ember-power-select-test-support-${name}` }));

      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('sa-dashboard/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  const TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    const authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    const { __container__: container } = app;
    const session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return app.testHelpers.wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    const session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return app.testHelpers.wait();
  }
});
define('sa-dashboard/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'sa-dashboard/tests/helpers/start-app', 'sa-dashboard/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name, options = {}) {
    (0, _qunit.module)(name, {
      beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach() {
        let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(() => (0, _destroyApp.default)(this.application));
      }
    });
  };

  const { RSVP: { Promise } } = Ember;
});
define('sa-dashboard/tests/helpers/resolver', ['exports', 'sa-dashboard/resolver', 'sa-dashboard/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('sa-dashboard/tests/helpers/start-app', ['exports', 'sa-dashboard/app', 'sa-dashboard/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    let application;

    let attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    Ember.run(() => {
      application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('sa-dashboard/tests/integration/components/dropdown-widget/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('dropdown-widget', 'Integration | Component | dropdown widget', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Zx2iw6ky",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"dropdown-widget\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "CQA3uNvF",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"dropdown-widget\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sa-dashboard/tests/integration/components/list-widget/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('list-widget', 'Integration | Component | list widget', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Ie2vnriM",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"list-widget\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "PCaUaotl",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"list-widget\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sa-dashboard/tests/integration/components/number-widget/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('number-widget', 'Integration | Component | number widget', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "+EF4F04R",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"number-widget\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "avyA3ORz",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"number-widget\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sa-dashboard/tests/integration/components/search-facet-daterange/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('search-facet-daterange', 'Integration | Component | search facet daterange', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "G8WhguPw",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"search-facet-daterange\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "8MFfJiCP",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"search-facet-daterange\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sa-dashboard/tests/integration/components/stacked-bars/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('stacked-bars', 'Integration | Component | stacked bars', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "H88VzVs5",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"stacked-bars\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "VzKgoZJe",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"stacked-bars\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sa-dashboard/tests/integration/components/user-feedback-form/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('user-feedback-form', 'Integration | Component | user feedback form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "ymj+tGTC",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"user-feedback-form\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "MtpaSfAV",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"user-feedback-form\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sa-dashboard/tests/test-helper', ['sa-dashboard/tests/helpers/resolver', 'ember-qunit'], function (_resolver, _emberQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
});
define('sa-dashboard/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/destroy-app.js should pass ESLint\n\n4:3 - Use import { run } from \'@ember/runloop\'; instead of using Ember.run (ember/new-module-imports)');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/module-for-acceptance.js should pass ESLint\n\n6:17 - Use import { Promise } from \'rsvp\'; instead of using Ember destructuring (ember/new-module-imports)');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/start-app.js should pass ESLint\n\n8:20 - Use import { merge } from \'@ember/polyfills\'; instead of using Ember.merge (ember/new-module-imports)\n9:16 - Use import { merge } from \'@ember/polyfills\'; instead of using Ember.merge (ember/new-module-imports)\n11:3 - Use import { run } from \'@ember/runloop\'; instead of using Ember.run (ember/new-module-imports)');
  });

  QUnit.test('integration/components/dropdown-widget/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/dropdown-widget/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/list-widget/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-widget/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/number-widget/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/number-widget/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/search-facet-daterange/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/search-facet-daterange/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/stacked-bars/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/stacked-bars/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/user-feedback-form/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/user-feedback-form/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/widget-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/widget-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/dashboard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/dashboard-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/widget-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/widget-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/add-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/add-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/instance-initializers/global-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/instance-initializers/global-test.js should pass ESLint\n\n8:5 - Use import { run } from \'@ember/runloop\'; instead of using Ember.run (ember/new-module-imports)\n9:26 - Use import Application from \'@ember/application\'; instead of using Ember.Application (ember/new-module-imports)\n14:5 - Use import { run } from \'@ember/runloop\'; instead of using Ember.run (ember/new-module-imports)');
  });

  QUnit.test('unit/instance-initializers/global.js-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/instance-initializers/global.js-test.js should pass ESLint\n\n8:5 - Use import { run } from \'@ember/runloop\'; instead of using Ember.run (ember/new-module-imports)\n9:26 - Use import Application from \'@ember/application\'; instead of using Ember.Application (ember/new-module-imports)\n14:5 - Use import { run } from \'@ember/runloop\'; instead of using Ember.run (ember/new-module-imports)');
  });

  QUnit.test('unit/models/dashboard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/dashboard-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/institution-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/institution-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/widget-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/widget-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/dashboard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dashboard-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/currency-rounder-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/utils/currency-rounder-test.js should pass ESLint\n\n2:10 - \'module\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('unit/utils/date-interval-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/date-interval-test.js should pass ESLint\n\n');
  });
});
define('sa-dashboard/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let adapter = this.subject();
    assert.ok(adapter);
  });
});
define('sa-dashboard/tests/unit/adapters/widget-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:widget', 'Unit | Adapter | widget', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let adapter = this.subject();
    assert.ok(adapter);
  });
});
define('sa-dashboard/tests/unit/controllers/dashboard-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:dashboard', 'Unit | Controller | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('sa-dashboard/tests/unit/controllers/widget-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:widget', 'Unit | Controller | widget', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let controller = this.subject();
    assert.ok(controller);
  });
});
define('sa-dashboard/tests/unit/helpers/add-test', ['tc3/helpers/add', 'qunit'], function (_add, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | add');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    let result = (0, _add.add)([42]);
    assert.ok(result);
  });
});
define('sa-dashboard/tests/unit/instance-initializers/global-test', ['tc3/instance-initializers/global', 'qunit', 'sa-dashboard/tests/helpers/destroy-app'], function (_global, _qunit, _destroyApp) {
  'use strict';

  (0, _qunit.module)('Unit | Instance Initializer | global', {
    beforeEach: function () {
      Ember.run(() => {
        this.application = Ember.Application.create();
        this.appInstance = this.application.buildInstance();
      });
    },
    afterEach: function () {
      Ember.run(this.appInstance, 'destroy');
      (0, _destroyApp.default)(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _global.initialize)(this.appInstance);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('sa-dashboard/tests/unit/instance-initializers/global.js-test', ['tc3/instance-initializers/global.js', 'qunit', 'sa-dashboard/tests/helpers/destroy-app'], function (_global, _qunit, _destroyApp) {
  'use strict';

  (0, _qunit.module)('Unit | Instance Initializer | global.js', {
    beforeEach: function () {
      Ember.run(() => {
        this.application = Ember.Application.create();
        this.appInstance = this.application.buildInstance();
      });
    },
    afterEach: function () {
      Ember.run(this.appInstance, 'destroy');
      (0, _destroyApp.default)(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _global.initialize)(this.appInstance);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('sa-dashboard/tests/unit/models/dashboard-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('dashboard', 'Unit | Model | dashboard', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('sa-dashboard/tests/unit/models/institution-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('institution', 'Unit | Model | institution', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('sa-dashboard/tests/unit/models/widget-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('widget', 'Unit | Model | widget', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('sa-dashboard/tests/unit/routes/dashboard-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('sa-dashboard/tests/unit/utils/currency-rounder-test', ['analytics-dashboard/utils/currency-rounder', 'qunit'], function (_currencyRounder, _qunit) {
  'use strict';

  // Replace this with your real tests.
  (0, _qunit.test)('works with billions', function (assert) {
    let rawValue = 180000000123;
    let result = (0, _currencyRounder.default)(rawValue);
    assert.equal(result, '180B');
  });
});
define('sa-dashboard/tests/unit/utils/date-interval-test', ['analytics-dashboard/utils/date-interval', 'qunit'], function (_dateInterval, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Utility | date interval');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    let result = (0, _dateInterval.default)();
    assert.ok(result);
  });
});
define('sa-dashboard/config/environment', [], function() {
  var prefix = 'sa-dashboard';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('sa-dashboard/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
