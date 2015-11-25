'use strict';
var app = require('angular').module('myApp.about', []);

app.controller('AboutCtrl', ['$scope', require('./about')]);
