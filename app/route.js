'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

  $stateProvider
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
