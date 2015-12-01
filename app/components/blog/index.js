'use strict';
var app = require('angular').module('app.blog', []);
app.constant("blog.MODULE_ROOT", "/components/blog/");

app.factory('BlogService', ['$resource', require('./services/blog')]);

app.controller('BlogCtrl', ['$scope', require('./controllers/blog')]);

app.controller('BlogPreviewListCtrl', ['$scope', 'BlogService', require('./controllers/preview-list')]);
app.directive('myBlogPreviewList', ['blog.MODULE_ROOT', require('./directives/preview-list')]);
