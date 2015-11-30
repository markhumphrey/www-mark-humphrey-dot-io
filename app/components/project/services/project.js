
  module.exports = function($resource) {
    //return $resource('http://192.168.99.100:8080/project/:id');
    return $resource('/api/project/:id');
  };
