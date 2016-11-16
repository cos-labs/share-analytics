define('ember-osf/components/sign-up/component', ['exports', 'ember', 'ember-osf/components/sign-up/template'], function (exports, _ember, _emberOsfComponentsSignUpTemplate) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule components
   */

  /**
   * Display a simple signup form
   * @class sign-up
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberOsfComponentsSignUpTemplate['default']
  });
});