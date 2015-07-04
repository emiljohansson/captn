"use strict";

var test = require('tape');
var show = require('./');

test('exist', function(t) {
    t.equal(typeof show, 'function');
    t.end();
});

test('do nothing', function(t) {
    t.equal(show(), undefined);
    t.equal(show(null), undefined);
    t.equal(show({}), undefined);
    t.equal(show({
        style: {}
    }), undefined);
    t.end();
});

test('clear display from element\'s style', function(t) {
    var el = {
        style: {
            display: "none"
        }
    };
    show(el);
    t.equal(el.style.display, "");
    t.end();
});

test('modify a real dom element', function(t) {
    var el = document.createElement('div');
    el.style.display = "none";
    show(el);
    t.equal(el.style.display, "");
    t.end();
});
