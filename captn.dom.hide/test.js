"use strict";

var test = require('tape');
var hide = require('./');

test('exist', function(t) {
    t.equal(typeof hide, 'function');
    t.end();
});

test('do nothing', function(t) {
    t.equal(hide(), undefined);
    t.equal(hide(null), undefined);
    t.equal(hide({}), undefined);
    t.equal(hide({
        style: {}
    }), undefined);
    t.end();
});

test('add display none to element\'s style', function(t) {
    var el = {
        style: {
            display: ""
        }
    };
    hide(el);
    t.equal(el.style.display, "none");
    t.end();
});

test('modify a real dom element', function(t) {
    var el = document.createElement('div');
    t.equal(el.style.display, "");
    hide(el);
    t.equal(el.style.display, "none");
    t.end();
});
