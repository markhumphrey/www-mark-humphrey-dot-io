'use strict';

var angular = require("angular");
require("angular-loader");
require("angular-mocks");
//require("modernizr");

var app = angular.module('app', [
  require("angular-ui-bootstrap"),
  require("angular-route"),
  require("angular-ui-router"),
  require("angular-resource"),
  'app.home',
  'app.project',
  //'app.blog',
  'app.about',
]);

require("./shared");
require("./components/home");
require("./components/project");
//require("./components/blog");
require("./components/about");
app.config(require("./route"));

app.config(function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
});

app.run(["$rootScope", "NavbarService", function($rootScope, navbarService) {
  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams) {
      if (toState.data) {
        navbarService.pageTitle = toState.data.pageTitle || "";
        navbarService.pageSubtitle = toState.data.pageSubtitle || "";
      }
    });
}]);
