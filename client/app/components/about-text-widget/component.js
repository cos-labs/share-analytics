import Ember from 'ember';

export default Ember.Component.extend({
  institution: Ember.computed(function() {
      var id = this.get('widgetSettings').institution_id;
      // look up institution model
      return {
         'id': id,
         'name': 'UC San Diego',
         'description': 'Data from the UC San Diego research community in the SHARE catalog.',
         'dashboards': []
      }
  })
});
