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
  'app.blog',
  'app.about',
]);

require("./shared");
require("./components/home");
require("./components/project");
require("./components/blog");
require("./components/about");
app.config(require("./route"));

app.config(function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
});


global.twttr = function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0],
     p = /^http:/.test(d.location) ? 'http' : 'https';
   if (!d.getElementById(id)) {
     js = d.createElement(s);
     js.id = id;
     js.src = p + "://platform.twitter.com/widgets.js";
     fjs.parentNode.insertBefore(js, fjs);
   }
 }(document, "script", "twitter-wjs");
