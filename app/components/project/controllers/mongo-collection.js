var mongolite = require('mongo-lite-js');

module.exports = function($scope) {

  var client = new mongolite.MongoClient();
  var collection;
  client.connect("hello-world", function(error, db) {
    db.createCollection("test", function(error, col) {
      collection = col;
    });
  });

  $scope.query = {
    text: '',
  };
  $scope.result = {
    docs: [],
  };

  $scope.insertOne = function() {
    var doc = $scope.query.text;
    collection.insertOne(doc, function(error, result) {
      $scope.findCollection();
    });
  };

  $scope.replaceOne = function() {
  };

  $scope.deleteOne = function() {
  };

  $scope.findCollection = function() {
    collection.find().toArray(function(error, docs) {
      $scope.result.docs = docs;
    });
  };

  // http://stackoverflow.com/questions/22532656/ng-mouseover-and-leave-to-toggle-item-using-mouse-in-angularjs
  $scope.hoverIn = function(){
   this.hoverEdit = true;
  };

  $scope.hoverOut = function(){
    this.hoverEdit = false;
  };

};
