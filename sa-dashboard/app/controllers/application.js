import Ember from 'ember';

//import OsfAgnosticAuthControllerMixin from 'ember-osf/mixins/osf-agnostic-auth-controller';

//import {
//    getAuthUrl
//} from 'ember-osf/utils/auth';

export default Ember.Controller.extend({//OsfAgnosticAuthControllerMixin,{
    toast: Ember.inject.service(),
    actions: {
        transitionToHome(){  
            this.transitionToRoute("dashboards.dashboard", "ucsd", {
                queryParams: {
                    all: undefined,
                    sources: undefined,
                    id: undefined,
                    contributors: undefined,
                    publishers: undefined,
                    tags: undefined,
                    query: undefined,
                    type: undefined,
                    funders: undefined,
                    start: undefined,
                    end: undefined,
                    page: undefined
                }
            });
        }
    }
});
