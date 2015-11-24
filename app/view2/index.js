'use strict';
var app = require('angular').module('myApp.view2', []);

app.controller('View2Ctrl', ['$scope', require('./view2')]);
