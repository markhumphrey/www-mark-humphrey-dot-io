'use strict';
var app = require('angular').module('app.project', []);
app.constant("MODULE_ROOT", "/components/project/");

app.factory('ProjectService', ['$resource', require('./services/project')]);

app.controller('ProjectCtrl', ['$scope', require('./controllers/project')]);
app.controller('ProjectTileCtrl', ['$scope', 'ProjectService', require('./controllers/tile')]);

app.directive('myProjectTile', ['MODULE_ROOT', require('./directives/tile')]);
