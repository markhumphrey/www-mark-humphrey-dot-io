'use strict';

var angular = require("angular");
require("angular-loader");
require("angular-mocks");
//require("modernizr");
require("normalize-css");

var app = angular.module('myApp', [
  require("angular-ui-bootstrap"),
  require("angular-route"),
  require("angular-ui-router"),
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);

require("./view1");
require("./view2");
app.config(require("./route"));
