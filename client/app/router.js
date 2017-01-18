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
  this.route('gridtest');
  this.route('top-contributors');
  this.route('top-tags');
});

export default Router;
