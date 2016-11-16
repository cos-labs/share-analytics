define('tc3/routes/application', ['exports', 'ember', 'ember-osf/mixins/osf-agnostic-auth-route'], function (exports, _ember, _emberOsfMixinsOsfAgnosticAuthRoute) {
    exports['default'] = _ember['default'].Route.extend(_emberOsfMixinsOsfAgnosticAuthRoute['default'], {

        store: _ember['default'].inject.service(),
        session: _ember['default'].inject.service(),
        model: function model() {
            if (this.get('session.isAuthenticated')) {
                return this.get('store').findRecord('user', 'me');
            }
            return null;
        }
    });
});