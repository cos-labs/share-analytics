define('tc3/models/dashboard', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({

        name: _emberData['default'].attr('string'),
        q: _emberData['default'].attr('string'),
        gte: _emberData['default'].attr('date'),
        lte: _emberData['default'].attr('date'),
        tsInterval: _emberData['default'].attr('string'),
        sortableObjectList: _emberData['default'].attr(),
        addableList: _emberData['default'].attr()

    });
});