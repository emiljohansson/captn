"use strict";

var exec = require('child_process').exec;
var commands = 'ls -d */';

function puts(error, stdout, stderr) {
    if (stdout) {console.log(stdout);}
    if (stderr) {console.log(stderr);}
    stdout.split('\n').filter(function(str) {
        return str.indexOf('captn.') > -1;
    })
    .forEach(function(dir) {
        exec('cd '+dir+' && npm install');
    });
}

exec(commands, puts);
