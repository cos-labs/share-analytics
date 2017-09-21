import Ember from 'ember';

export default Ember.Component.extend({
	showForm: false,
	actions: {		
		toggleForm(){
			this.toggleProperty('showForm');
			if(this.get('showForm')){
				$("body").css("overflow", "hidden");
			}else{
				$("body").css("overflow", "auto");
			}


		}
	}
});
