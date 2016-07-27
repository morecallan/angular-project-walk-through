"use strict";

app.controller("searchDatabaseCtrl", function($scope, SearchDatabaseFactory) {

  $scope.movies = [];

  $scope.searchDatabase = function(movieToSearch) {
    SearchDatabaseFactory.movieList(movieToSearch).then(function(movieData){
      console.log("in the controller, I see movie data...", movieData);
      $scope.movies = movieData.Search;
    })
  }
})
