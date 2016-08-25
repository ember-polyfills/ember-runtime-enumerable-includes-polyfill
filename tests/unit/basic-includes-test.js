import Ember from 'ember';
import { module, test } from 'qunit';

module('ember-runtime-enumerable-includes', {
  afterEach(assert) {
    let obj = this.obj;
    assert.ok(obj.includes('b'), 'can find a simple value');

    let complexObject = {};
    obj.pushObject(complexObject);

    assert.ok(obj.includes(complexObject), 'can find an object');
  }
});

test('works for an Ember.A', function() {
  this.obj = Ember.A(['a', 'b', 'c']);
});

test('works for ArrayProxy', function() {
  this.obj = Ember.ArrayProxy.create({ content: Ember.A(['a', 'b', 'c']) });
});
