'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "components/home/index.html",
    controller: 'HomeCtrl',
  })
  .state('project', {
    url: "/project",
    templateUrl: "components/project/index.html",
    controller: 'ProjectCtrl',
  })
  .state('project-detail', {
    url: "/project/:id",
    templateUrl: "components/project/views/detail.html",
    controller: 'ProjectCtrl',
  })
  /*
  .state('blog', {
    url: "/blog",
    templateUrl: "components/blog/index.html",
    controller: 'BlogCtrl',
  })
  .state('blog-page', {
    url: "/blog/page/{page:int}",
    templateUrl: "components/blog/index.html",
    controller: 'BlogCtrl',
  })
  .state('blog-detail', {
    url: "/blog/{year:int}/{month:int}/:name/",
    templateUrl: "components/blog/index.html",
    controller: 'BlogCtrl',
  })
  */
  .state('about', {
    url: "/about",
    templateUrl: "components/about/index.html",
    controller: 'AboutCtrl',
  });
};
