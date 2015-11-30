'use strict';
var app = require('angular').module('app.blog', []);
app.config(require("./route"));

app.controller('BlogCtrl', ['$scope', require('./blog')]);
