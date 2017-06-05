import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('parent', function() {
    // this.route('child');
  });
  this.route('parent.child', { path: 'parent/child' });
  this.route('people', function() {
    this.route('show', {path: '/:id'});
  });
  this.route('elseif');
});

export default Router;
