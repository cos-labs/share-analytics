define('ember-osf/adapters/file-provider', ['exports', 'ember-osf/adapters/osf-adapter', 'ember-osf/mixins/file-cache-bypass'], function (exports, _emberOsfAdaptersOsfAdapter, _emberOsfMixinsFileCacheBypass) {
    'use strict';

    exports['default'] = _emberOsfAdaptersOsfAdapter['default'].extend(_emberOsfMixinsFileCacheBypass['default'], {
        pathForType: function pathForType() {
            return 'files';
        }
    });
});