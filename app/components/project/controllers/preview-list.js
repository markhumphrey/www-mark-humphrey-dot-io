module.exports = function($scope, projectService) {

  $scope.projects = [];

  projectService.query(function(projects) {
    $scope.projects = projects;
  });


};
