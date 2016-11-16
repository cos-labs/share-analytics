define('ember-osf/components/osf-copyright/component', ['exports', 'ember', 'ember-osf/components/osf-copyright/template'], function (exports, _ember, _emberOsfComponentsOsfCopyrightTemplate) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule components
   */

  /**
   * Display copyright information as a footer
   * @class osf-copyright
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberOsfComponentsOsfCopyrightTemplate['default']
  });
});