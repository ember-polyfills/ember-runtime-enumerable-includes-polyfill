/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-runtime-enumerable-includes-polyfill',

  included: function(app) {
    this._super.included.apply(this, arguments);

    var importContext;

    if (this.import) {  // support for ember-cli >= 2.7
      importContext = this;
    } else { // addon support for ember-cli < 2.7
      importContext = this._findHostForLegacyEmberCLI();
    }

    var VersionChecker = require('ember-cli-version-checker');
    var checker = new VersionChecker(this);
    var dep = checker.for('ember', 'bower');

    if (dep.lt('2.8.0-beta.1')) {
      importContext.import('vendor/enumerable-includes-polyfill/index.js');
    }
  },

  // included from https://git.io/v6F7n
  // not needed for ember-cli > 2.7
  _findHostForLegacyEmberCLI: function() {
    var current = this;
    var app;

    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    return app;
  }
};
