
module.exports = function($resource) {
  return $resource('/api/blog/:year/:month/:name', {
    limit: '@limit',
    offset: '@offset'
  });
};
