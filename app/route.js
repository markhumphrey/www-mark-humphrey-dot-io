'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "components/home/home.html",
    controller: 'HomeCtrl',
  })
  .state('project', {
    url: "/project",
    templateUrl: "components/project/index.html",
    controller: 'ProjectCtrl',
  })
  .state('blog', {
    url: "/blog",
    templateUrl: "components/blog/blog.html",
    controller: 'BlogCtrl',
  })
  .state('about', {
    url: "/about",
    templateUrl: "components/about/about.html",
    controller: 'AboutCtrl',
  });
};
