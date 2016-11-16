define('ember-osf/components/osf-mode-footer/component', ['exports', 'ember', 'ember-osf/components/osf-mode-footer/template', 'ember-get-config'], function (exports, _ember, _emberOsfComponentsOsfModeFooterTemplate, _emberGetConfig) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule components
   */

  /**
   * If development mode, display a red banner in the footer
   * @class osf-mode-footer
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberOsfComponentsOsfModeFooterTemplate['default'],
    isDevMode: _emberGetConfig['default'].OSF.backend !== 'prod'
  });
});