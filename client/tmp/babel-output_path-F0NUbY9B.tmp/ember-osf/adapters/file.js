define('ember-osf/adapters/file', ['exports', 'ember-osf/adapters/osf-adapter', 'ember-osf/mixins/file-cache-bypass'], function (exports, _emberOsfAdaptersOsfAdapter, _emberOsfMixinsFileCacheBypass) {
  'use strict';

  exports['default'] = _emberOsfAdaptersOsfAdapter['default'].extend(_emberOsfMixinsFileCacheBypass['default'], {});
});