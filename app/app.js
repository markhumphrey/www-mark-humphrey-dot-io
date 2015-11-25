'use strict';

var angular = require("angular");
require("angular-loader");
require("angular-mocks");
//require("modernizr");

var app = angular.module('app', [
  require("angular-ui-bootstrap"),
  require("angular-route"),
  require("angular-ui-router"),
  'app.home',
  'app.project',
  'app.blog',
  'app.about',
]);

require("./home");
require("./project");
require("./blog");
require("./about");
app.config(require("./route"));

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
