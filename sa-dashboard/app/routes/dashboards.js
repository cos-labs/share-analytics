import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
	  beforeModel: function() {
		  if(window.location.pathname == "/"){
		  	this.transitionTo('dashboards.dashboard' , 'ucsd');
		  }
    },
});
