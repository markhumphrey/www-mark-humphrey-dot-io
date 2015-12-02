'use strict';
var app = require('angular').module('app');
app.constant("MODULE_ROOT", "/shared/");

app.controller('NavbarCtrl', ['$scope', require('./controllers/navbar')]);
app.directive('myNavbar', ['MODULE_ROOT', '$window', require('./directives/navbar')]);
