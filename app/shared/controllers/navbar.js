module.exports = function($scope, navbarService) {

  $scope.grow = function() {
    $scope.extended = true;
  };

  $scope.shrink = function() {
    $scope.extended = false;
  };

  $scope.isGrown = function() {
    return $scope.extended;
  };

  $scope.grow();

};
