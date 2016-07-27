"use strict";

app.controller("searchDatabaseCtrl", function($scope, searchDatabaseFactory) {

	$scope.movies = [];

	$scope.searchDatabase = function(movieToSearch) {
		searchDatabaseFactory.movieList(movieToSearch).then(function(movieData) {
			console.log("in the controller, I see movie data...", movieData);
			$scope.movies = movieData.Search;
		})
	}
})
