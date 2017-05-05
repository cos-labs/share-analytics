import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    keyForAttribute(key) {
        return Ember.String.underscore(key);
    },
    keyForRelationship(key) {
        return Ember.String.underscore(key);
    }
});
