define('ember-osf/components/file-version/component', ['exports', 'ember', 'ember-osf/components/file-version/template'], function (exports, _ember, _emberOsfComponentsFileVersionTemplate) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule components
     */

    /**
     * Display information about one revision of a file
     *
     * Sample usage:
     * ```handlebars
     * {{file-version
     * version=version
     * download='download'}}
     * ```
     * @class file-version
     */
    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsFileVersionTemplate['default'],
        classNames: ['file-version'],
        tagName: 'tr',

        actions: {
            downloadVersion: function downloadVersion(version) {
                this.sendAction('download', version);
            }
        }
    });
});