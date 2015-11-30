'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
  .state('blog.test1', {
    url: "/",
    templateUrl: "home/home.html",
    controller: 'HomeCtrl',
  })
  .state('blog.test', {
    url: "/test",
    template: "IT WORKEED!!!!!!!!!!"
  });
};
