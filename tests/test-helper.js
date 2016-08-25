import resolver from './helpers/resolver';
import Ember from 'ember';
import {
  setResolver
} from 'ember-qunit';

setResolver(resolver);

// support testing against Ember < 2.1
if (Ember.Debug && Ember.Debug.registerDeprecationHandler) {
  Ember.Debug.registerDeprecationHandler((message, options, next) => {
    if (message.indexOf('includes') !== -1 || message.indexOf('contains')) {
      throw new Error(`Deprecation message for includes/contains: ${message}`);
    } else {
      // defer to whatever handler was registered before this one
      next(message, options);
    }
  });
}
