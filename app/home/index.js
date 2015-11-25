'use strict';
var app = require('angular').module('app.home', []);

app.controller('HomeCtrl', ['$scope', require('./home')]);
