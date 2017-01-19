import Ember from 'ember';

export default Ember.Component.extend({
  text: Ember.computed(function() {
      return this.get('widgetSettings').text;
  }),
  institution: Ember.computed(function() {
      var id = this.get('widgetSettings').institution_id;
      // look up institution model
      return {
         'id': id,
         'name': 'UC San Diego',
         'about': 'This is some info',
         'dashboards': []
      }
  })
});
