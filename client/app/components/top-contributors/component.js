import Ember from 'ember';

export default Ember.Component.extend({
  contributors: Ember.computed(function() {
      return this.get('aggregations.contributors.buckets').map(({ key, doc_count }) => [key]);
  })
});
