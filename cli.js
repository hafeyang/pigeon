#! /usr/bin/env node

'use strict';

var fepigeon = require('./lib/fepigeon');

var userArgs = process.argv;
var searchParam = userArgs[2];

if (userArgs.indexOf('-h') !== -1 || userArgs.indexOf('--help') !== -1) {
    return console.log('cli help');
}

if (userArgs.indexOf('-v') !== -1 || userArgs.indexOf('--version') !== -1) {
    return console.log(require('./package').version);
}

if(searchParam === undefined){
	fepigeon.init();
}