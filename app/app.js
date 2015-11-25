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
  'myApp.home',
  'myApp.project',
  'myApp.view1',
  'myApp.view2',
]);

require("./home");
require("./project");
require("./view1");
require("./view2");
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
