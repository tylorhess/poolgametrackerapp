// file: misc.controller.js
(function() {/* closure */
	'use strict';
	angular
		.module('app')
		.controller('BodyCtrl', BodyCtrl);
	BodyCtrl.$inject=[];
	function BodyCtrl() {
		let body = this;
		body.players = [];
		// body.players = [{name:'Ryan',wins:1},{name:'Amanda',wins:2},{name:'Tylor',wins:0}];
		body.games   = [];
		// body.games   = [{winner:{name:'Amanda'},loser:{name:'Tylor'}},{winner:{name:'Amanda'},loser:{name:'Ryan'}},{winner:{name:'Ryan'},loser:{name:'Tylor'}}];
		body.addNewPlayer = addNewPlayer;
		body.addNewGame   = addNewGame;
		/* VARIABLES
		body.groups = [];
		body.meals  = [];
		body.addNewGroup 	= addNewGroup;
		body.addNewMeal 	= addNewMeal;
		body.cancelNewGroup = cancelNewGroup;
		body.cancelNewMeal	= cancelNewMeal;
		body.initNewGroup 	= initNewGroup;
		body.initNewMeal 	= initNewMeal;
		body.isSundayMeal 	= isSundayMeal;
		body.isMondayMeal 	= isMondayMeal;
		body.isTuesdayMeal 	= isTuesdayMeal;
		body.isWednesdayMeal= isWednesdayMeal;
		body.isThursdayMeal = isThursdayMeal;
		body.isFridayMeal 	= isFridayMeal;
		body.isSaturdayMeal = isSaturdayMeal;
		body.printWeekdays  = printWeekdays;
		body.setStartDateToToday 	= setStartDateToToday;
		body.setEndDateToToday 		= setEndDateToToday;
		body.setEndRepeatDateToToday= setEndRepeatDateToToday;
		*/

		// put all start-up logic in an activate function
		activate();

		function activate() {
			initNewPlayer();
			initNewGame();
		}
		function addNewPlayer() {
			if (body.newPlayer.name.trim().length > 0) {
				body.players.push(body.newPlayer);
				initNewPlayer();
			}
		}

		function addNewGame() {
			if (!angular.equals(body.newGame.winner,body.newGame.loser)) {
				body.newGame.winner.wins++; // increment winner's wins
				body.games.push(body.newGame);
				initNewGame();
			} else {
				// if winner & loser are the same
			}
		}
		function initNewPlayer() {
			body.newPlayer = {};
			body.newPlayer.wins = 0;
			// body.newPlayer.id = ???; // async from db?
		}
		function initNewGame() {
			body.newGame = {};
			// body.newGame.id = ???; // async from db?
		}
		/* FUNCTIONS
		function addNewGroup() {
			body.groups.push(body.newGroup);
			body.newGroup = {};
		}
		function addNewMeal() {
			body.meals.push(body.newMeal);
			body.newMeal = {};
		}
		function cancelNewGroup() {
			body.newGroup = {};
		}
		function cancelNewMeal() {
			body.newMeal = {};
		}
		function initNewGroup() {
			let group_id = body.groups.length;
			body.newGroup = {
				id: group_id,
				penalties: []
			};
		}
		function initNewMeal() {
			body.newMeal = {
				group: body.newGroup.name,
				repeat: true,
				repeatInterval: 'Weekly',
				repeatLength: 1
			};
		}
		function isSundayMeal() {
			for (let index in body.meals) {
				if (body.meals[index].repeatSunday)
					return true;
			}
			return false;
		}
		function isMondayMeal() {
			for (let index in body.meals) {
				if (body.meals[index].repeatMonday)
					return true;
			}
			return false;
		}
		function isTuesdayMeal() {
			for (let index in body.meals) {
				if (body.meals[index].repeatTuesday)
					return true;
			}
			return false;
		}
		function isWednesdayMeal() {
			for (let index in body.meals) {
				if (body.meals[index].repeatWednesday)
					return true;
			}
			return false;
		}
		function isThursdayMeal() {
			for (let index in body.meals) {
				if (body.meals[index].repeatThursday)
					return true;
			}
			return false;
		}
		function isFridayMeal() {
			for (let index in body.meals) {
				if (body.meals[index].repeatFriday)
					return true;
			}
			return false;
		}
		function isSaturdayMeal() {
			for (let index in body.meals) {
				if (body.meals[index].repeatSaturday)
					return true;
			}
			return false;
		}
		function printWeekdays(meal) {
			let printArray = [];
			if (meal.repeatSunday)
				printArray.push('Sun');
			if (meal.repeatMonday)
				printArray.push('Mon');
			if (meal.repeatTuesday)
				printArray.push('Tues');
			if (meal.repeatWednesday)
				printArray.push('Wed');
			if (meal.repeatThursday)
				printArray.push('Thurs');
			if (meal.repeatFriday)
				printArray.push('Fri');
			if (meal.repeatSaturday)
				printArray.push('Sat');

			return printArray.join(', ');
		}
		function setStartDateToToday() {
			body.newMeal.startDate = 'Dec 10, 2015';
		}
		function setEndDateToToday() {
			body.newMeal.endDate = 'Dec 10, 2015';
		}
		function setEndRepeatDateToToday() {
			body.newMeal.endRepeatDate = 'Dec 10, 2015';
		}
		*/
	}
})();/* closure */