module.exports = function(MODULE_ROOT, $window) {

  function link(scope, element, attrs) {
    angular.element($window).on('scroll', function() {
      if ($window.pageYOffset > 100) {
        scope.shrink();
      } else {
        scope.grow();
      }

      scope.$apply();
    });
  }

  return {
    templateUrl: MODULE_ROOT + 'views/navbar.html',
    link : link,
  };
};
