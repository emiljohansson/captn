"use strict";

var test = require('tape');
var removeClass = require('./');

test('exist', function(t) {
    t.equal(typeof removeClass, 'function');
    t.end();
});

test('do nothing', function(t) {
    t.equal(removeClass(), undefined);
    t.equal(removeClass({}), undefined);
    t.equal(removeClass({
        className: 123
    }), undefined);
    t.equal(removeClass(null, 'abc'), undefined);
    t.equal(removeClass({
        className: ""
    }), undefined);
    t.end();
});

test('remove a string from the element\'s className property', function(t) {
    var el = {
        className: 'container'
    };
    removeClass(el, 'container');
    t.equal(el.className, '');
    t.end();
});

test('remove a string from multiple names', function(t) {
    var el = {
        className: 'container wrapper'
    };
    removeClass(el, 'container');
    t.equal(el.className, 'wrapper');
    el.className = 'container wrapper block';
    removeClass(el, 'wrapper');
    t.equal(el.className, 'container block');
    t.end();
});

test('check a real dom element', function(t) {
    var el = document.createElement('div');
    el.className = 'container';
    removeClass(el, 'container');
    t.equal(el.className, '');
    t.end();
});
