module.exports = function($scope, projectService) {

  $scope.projects = [];

  projectService.query(function(projects) {
    console.log(projects);
    $scope.projects = projects;
  });


};
