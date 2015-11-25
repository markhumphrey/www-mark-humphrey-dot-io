'use strict';
var app = require('angular').module('app.about', []);

app.controller('AboutCtrl', ['$scope', require('./about')]);
