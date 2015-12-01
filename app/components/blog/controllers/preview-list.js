module.exports = function($scope, blogService) {

  $scope.posts = [];

  blogService.query(function(posts) {
    $scope.posts = posts;
    console.log(posts);
  });


};
