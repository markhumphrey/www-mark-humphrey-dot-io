'use strict';
var app = require('angular').module('app.project', []);

app.controller('ProjectCtrl', ['$scope', require('./project')]);
