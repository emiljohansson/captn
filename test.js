"use strict";

var find = require('list-files');
var prefix = 'js';

global.document = require("jsdom").jsdom();
global.window = document.defaultView;

find(function(result) {
    var testFiles = result.filter(getTestFileNames)
        .map(removePrefix);
    executeTests(testFiles);
}, {
    name: prefix,
    exclude: 'node_modules'
});

function getTestFileNames(fileName) {
    return fileName.indexOf('test.js') >= 0;
}

function removePrefix(fileName) {
    return fileName.replace('.' + prefix, '');
}

function executeTests(files) {
    files.forEach(executeTest);
}

function executeTest(fileName) {
    require(fileName);
}
