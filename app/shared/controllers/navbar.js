module.exports = function($scope) {

  $scope.grow = function() {
    $scope.extended = true;
  };

  $scope.shrink = function() {
    $scope.extended = false;
  };

  $scope.grow();

};
