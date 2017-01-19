import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('dashboards', function() {
        this.route('dashboard', {path: ':dashboard'});
    });
    this.route('info', {path: 'info/:institution_id'});
});

export default Router;
