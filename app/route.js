'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "home/home.html",
    controller: 'HomeCtrl',
  })
  .state('project', {
    url: "/project",
    templateUrl: "project/project.html",
    controller: 'ProjectCtrl',
  })
  .state('blog', {
    url: "/blog",
    templateUrl: "blog/blog.html",
    controller: 'BlogCtrl',
  })
  .state('about', {
    url: "/about",
    templateUrl: "about/about.html",
    controller: 'AboutCtrl',
  });
};
