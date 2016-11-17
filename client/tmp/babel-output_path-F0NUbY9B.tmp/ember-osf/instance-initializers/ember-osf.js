define('ember-osf/instance-initializers/ember-osf', ['exports', 'ember-osf/locales/en-us/translations'], function (exports, _emberOsfLocalesEnUsTranslations) {
    'use strict';

    exports.initialize = initialize;

    /*
    Automatically expose translations for addon in a way that can be merged in with app
        https://github.com/jamesarosen/ember-i18n/issues/255
     */

    function initialize(appInstance) {
        var i18n = appInstance.lookup('service:i18n');
        i18n.addTranslations('en-US', _emberOsfLocalesEnUsTranslations['default']);
    }

    exports['default'] = {
        name: 'ember-osf',
        initialize: initialize
    };
});