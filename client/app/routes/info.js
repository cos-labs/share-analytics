import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // TODO: Replace with model loaded from store
    return {
      'id': 'ucsd',
      'name': 'UC San Diego',
      'description': 'Data from the UC San Diego research community in the SHARE catalog.',
      'dashboards': []
    };
  },
  renderTemplate(controller, model) {
    var template = model.id + '-about';
    this.render(template);
  }
});
