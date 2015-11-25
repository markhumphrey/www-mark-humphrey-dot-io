'use strict';
var app = require('angular').module('app.blog', []);

app.controller('BlogCtrl', ['$scope', require('./blog')]);
