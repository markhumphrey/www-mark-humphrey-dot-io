'use strict';
var app = require('angular').module('myApp.project', []);

app.controller('ProjectCtrl', ['$scope', require('./project')]);
