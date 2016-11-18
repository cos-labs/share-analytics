define('ember-osf/const/permissions', ['exports'], function (exports) {
    'use strict';

    var ADMIN = 'admin';
    var READ = 'read';
    var WRITE = 'write';

    /**
     * Provide human-readable labels for permissions fields. Useful in dropdown UI.
     * @property permissionSelector
     * @final
     * @type {*[]}
     */
    // TODO: Document constants in YUIDoc format
    var permissionSelector = [{ value: READ, text: 'Read' }, { value: WRITE, text: 'Read + Write' }, { value: ADMIN, text: 'Administrator' }];

    exports['default'] = {
        ADMIN: ADMIN,
        READ: READ,
        WRITE: WRITE,
        PERMISSIONS: [READ, WRITE, ADMIN],
        CREATOR_PERMISSIONS: [READ, WRITE, ADMIN],
        DEFAULT_CONTRIBUTOR_PERMISSIONS: [READ, WRITE]
    };
    exports.permissionSelector = permissionSelector;
});