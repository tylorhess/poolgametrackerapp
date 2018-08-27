// file: app.routes.js
(function() {/* closure */
    'use strict';
	
	angular
		.module('app')
		.config(routes);
	
	routes.$inject = ['$routeProvider'];
	function routes(   $routeProvider) {
		$routeProvider
			.when('',				{redirectTo: '/'})
			.when('/',				{templateUrl:'/pool_game_tracker.html'})
			.otherwise(				{templateUrl:'/404.html'});
	}
})();/* closure */