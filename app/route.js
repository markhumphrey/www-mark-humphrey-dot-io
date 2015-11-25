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
  .state('view2', {
    url: "/view2",
    templateUrl: "view2/view2.html",
    controller: 'View2Ctrl',
  })
  .state('view1', {
    url: "/view1",
    templateUrl: "view1/view1.html",
    controller: 'View1Ctrl',
  });
};
