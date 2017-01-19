import Ember from 'ember';

export default Ember.Component.extend({
  id: Ember.computed(function() {
      return this.get('widgetSettings').institution_id;
  }),
  institution: Ember.computed(function() {
      var id = this.get('institution_id');
      // look up institution model
      return {
         'id': id,
         'name': 'UC San Diego',
         'description': 'Data from the UC San Diego research community in the SHARE catalog.',
         'dashboards': []
      }
  })
});
