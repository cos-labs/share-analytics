import Ember from 'ember';

export default Ember.Component.extend({
	showForm: false,
	actions: {		
		toggleForm(){
			this.toggleProperty('showForm');
		}
	}
});
