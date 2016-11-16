define('tc3/models/institution', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({

        name: _emberData['default'].attr('string'),
        dashboards: _emberData['default'].hasMany('dashboard')

    });
});