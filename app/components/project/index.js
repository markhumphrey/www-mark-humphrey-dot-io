'use strict';
var app = require('angular').module('app.project', []);
app.constant("project.MODULE_ROOT", "/components/project/");

app.factory('ProjectService', ['$resource', require('./services/project')]);
app.controller('ProjectCtrl', ['$scope', require('./controllers/project')]);

app.controller('ProjectPreviewListCtrl', ['$scope', 'ProjectService', require('./controllers/preview-list')]);
app.directive('myProjectPreviewList', ['project.MODULE_ROOT', require('./directives/preview-list')]);

// mongo-lite-js
app.controller('MongoCollectionCtrl', ['$scope', require('./controllers/mongo-collection')]);
app.directive('myMongoCollection', ['project.MODULE_ROOT', require('./directives/mongo-collection')]);
