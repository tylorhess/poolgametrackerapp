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
			//.when('/',				{templateUrl:'/login.html'})
			.when('/account',		{templateUrl:'/account.html'})
			.when('/group/new',		{templateUrl:'/new_group.html'})
			.when('/meal/new',		{templateUrl:'/new_meal.html'})
			.otherwise(				{templateUrl:'/404.html'});
			
			// .when('/run',        {templateUrl: '/run.html',
			// 						 controller:  'RunCtrl',
			// 						 controllerAs:'runCtrl'})
			
	}
})();/* closure */