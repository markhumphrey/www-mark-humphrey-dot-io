'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "components/home/index.html",
    controller: 'HomeCtrl',
    data : {
      pageTitle: "MARK HUMPHREY",
      pageSubtitle: "Software Developer & Leader",
    }
  })
  .state('project', {
    url: "/project",
    templateUrl: "components/project/index.html",
    data : {
      pageTitle: "PROJECTS",
      pageSubtitle: "Take a moment to view some",
    }
  })
  .state('project-detail', {
    url: "/project/:projectId",
    templateUrl: function ($stateParams) {
        return 'components/project/'+ $stateParams.projectId + '.html';
    },
    data : {
      pageTitle: "PROJECT DETAILS",
      pageSubtitle: "Subtitle",
    }
  })
  .state('project-detail.demo', {
    url: "/demo",
    templateUrl: function ($stateParams) {
        return 'components/project/'+ $stateParams.projectId + '.demo.html';
    },
    data : {
      pageTitle: "PROJECT DEMO",
      pageSubtitle: "Subtitle",
    }
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
    data : {
      pageTitle: "WHO I AM",
      pageSubtitle: "Subtitle",
    }
  });

};
