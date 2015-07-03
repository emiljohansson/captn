"use strict";

var test = require('tape');
var addClass = require('./');
var hasClass = require('captn.dom.hasClass');

test('exist', function(t) {
    t.equal(typeof hasClass, 'function');
    t.end();
});

test('do nothing', function(t) {
    t.equal(addClass(), undefined);
    t.equal(addClass({}), undefined);
    t.equal(addClass({
        className: 123
    }), undefined);
    t.equal(addClass(null, 'abc'), undefined);
    t.equal(addClass({
        className: ""
    }), undefined);
    t.end();
});

test('add to the element\'s className property', function(t) {
    var el = {
        className: ''
    };
    runTests(el, t);
    t.end();
});

test('check a real dom element', function(t) {
    var el = document.createElement('div');
    runTests(el, t);
    t.end();
});

function runTests(el, t) {
    t.equal(hasClass(el, 'container'), false);
    addClass(el, 'container');
    t.equal(hasClass(el, 'container'), true);
    addClass(el, 'container');
    t.equal(hasClass(el, 'container'), true);
    t.equal(el.className, 'container');
    addClass(el, 'containers');
    t.equal(hasClass(el, 'containers'), true);
    t.equal(el.className, 'container containers');
}
