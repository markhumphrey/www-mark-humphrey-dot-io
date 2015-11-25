'use strict';
var app = require('angular').module('myApp.blog', []);

app.controller('BlogCtrl', ['$scope', require('./blog')]);
