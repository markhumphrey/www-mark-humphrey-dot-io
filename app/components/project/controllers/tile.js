
module.exports = function($scope, projectService) {

  $scope.projects = [];
  /*
 $scope.project = {
   name: 'Naomi',
   id: "www-mark-humphrey-dot-io",
   description: "",
 };
 */


 projectService.query(function(projects) {
   $scope.projects = projects;
 });


};
