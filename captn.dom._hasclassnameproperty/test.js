"use strict";

var test = require('tape');
var hasClassNameProperty = require('./');

test('exist', function(t) {
    t.equal(typeof hasClassNameProperty, 'function');
    t.end();
});

test('to be falsy', function(t) {
    t.equal(hasClassNameProperty(), false);
    t.equal(hasClassNameProperty({}), false);
    t.equal(hasClassNameProperty({
        className: 123
    }), false);
    t.equal(hasClassNameProperty(null), false);
    t.end();
});

test('to be truthly', function(t) {
    t.equal(hasClassNameProperty({
        className: ""
    }), true);
    t.end();
});
