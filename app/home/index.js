'use strict';
var app = require('angular').module('myApp.home', []);

app.controller('HomeCtrl', ['$scope', require('./home')]);
