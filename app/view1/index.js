'use strict';
var app = require('angular').module('myApp.view1', []);

app.controller('View1Ctrl', ['$scope', require('./view1')]);
