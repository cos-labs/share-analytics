import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend(DS.BuildURLMixin, {
    namespace: 'api',
    host: 'http://localhost:8000',
    ajax(url, method, hash) {
        hash = hash || {};
        hash.crossDomain = true;
        hash.xhrFields = { withCredentials: true };
        return this._super(url, method, hash);
    },
    pathForType(type) {
        var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);
        return Ember.String.underscore(inflector.pluralize(type));
    },
    buildURL: function(type, id, record) {
        return this._super(type, id, record) + '/';
    }
});
