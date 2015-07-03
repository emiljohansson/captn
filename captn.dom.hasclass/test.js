"use strict";

var test = require('tape');
var hasClass = require('./');

test('exist', function(t) {
    t.equal(typeof hasClass, 'function');
    t.end();
});

test('do nothing', function(t) {
    t.equal(hasClass(), false);
    t.equal(hasClass({}), false);
    t.equal(hasClass({
        className: 123
    }), false);
    t.equal(hasClass(null, 'abc'), false);
    t.equal(hasClass({
        className: ""
    }), false);
    t.end();
});

test('look in the element\'s className property', function(t) {
    t.equal(hasClass({
        className: 'container'
    }, 'container'), true);
    t.equal(hasClass({
        className: 'container other class name'
    }, 'container'), true);
    t.equal(hasClass({
        className: 'other class container name'
    }, 'container'), true);
    t.equal(hasClass({
        className: 'container'
    }, 'containers'), false);
    t.equal(hasClass({
        className: 'other class container name'
    }, 'conta'), false);
    t.end();
});

test('check a real dom element', function(t) {
    var el = document.createElement('div');
    t.equal(hasClass(el, 'container'), false);
    el.className = 'container';
    t.equal(hasClass(el, 'container'), true);
    t.end();
});
