// file: body.controller.js
(function() {/* closure */
	'use strict';
	
	angular
		.module('app')
		.controller('BodyCtrl', BodyCtrl);
	
	BodyCtrl.$inject=['$log','$http'];
	function BodyCtrl( $log , $http ) {
		
		// private variables
		let body = this;

		// public variables
		body.players = [];
		body.games   = [];
		body.updateNewGame   = updateNewGame;
		body.updateNewPlayer = updateNewPlayer;
		body.deleteGame   = deleteGame;
		body.deletePlayer = deletePlayer;

		// initialize controller
		activate();

		// all functions (public & private) 
		function activate() {
			// initialization (put all start-up logic here)
			loadPlayers();
			loadGames();
		}

		function calculateWins() {
			body.players.forEach( player => {player.wins = 0;} );
			body.games.forEach( game => {
				body.players.forEach( player => {
					if (game.winner && game.winner._id === player._id) {
						player.wins++;
					}
				});
			});
		}

		function deleteGame(game) {
			let url = '/games/' + game._id;
			$log.log('HTTP DELETE ' + url);
			$http.delete(url)
				.then(function(res) {
					$log.log('success: deleteGame()');
					$log.log(res.data); // res.data = deleted game
					loadGames();
				})
				.catch(function(err) {$log.log(err)})
		}
		function deletePlayer(player) {
			let url = '/players/' + player._id;
			$log.log('HTTP DELETE ' + url);
			$http.delete(url)
				.then(function(res) {
					$log.log('success: deletePlayer()');
					$log.log(res.data); // res.data = deleted player
					loadPlayers();
				})
				.catch(function(err) {$log.log(err)})
		}

		function loadGames() {
			$http.get('/games')
				.then(function(res) {
					$log.log('success: loadGames()');
					$log.log(res.data);
					body.games = res.data;
					resetNewGame();
					calculateWins();
				})
				.catch(function(err) {$log.log(err)})
		}
		function loadPlayers() {
			$http.get('/players')
				.then(function(res) {
					$log.log('success: loadPlayers()');
					$log.log(res.data);
					body.players = res.data;
					resetNewPlayer();
					calculateWins();
				})
				.catch(function(err) {$log.log(err)})
		}

		function resetNewGame() {
			let i = 0;
			let newGameReset = false;
			while (i < body.games.length && !newGameReset) {
				if (!body.games[i].winner || !body.games[i].loser) {
					body.newGame = body.games[i];
					newGameReset = true; 
				}
				i++;
			}
			if (!newGameReset) {
				$http.post('/games')
					.then(function(res) {
						$log.log('success: resetNewGame()');
						body.newGame = res.data;
						$log.log(body.newGame);
					})
					.catch(function(err) {$log.log(err)})
			}
		}
		function resetNewPlayer() {
			let i = 0;
			let newPlayerReset = false;
			while (i < body.players.length && !newPlayerReset) {
				if (!body.players[i].name) {
					body.newPlayer = body.players[i];
					newPlayerReset = true; 
				}
				i++;
			}
			if (!newPlayerReset) {
				$http.post('/players')
					.then(function(res) {
						$log.log('success: resetNewPlayer()');
						body.newPlayer = res.data;
						$log.log(body.newPlayer);
					})
					.catch(function(err) {$log.log(err)})
			}
		}

		function updateNewGame() {
			if (body.newGame.winner && body.newGame.loser && body.newGame.winner !== body.newGame.loser) {
				let url = '/games/' + body.newGame._id;
				$log.log('HTTP PUT ' + url);
				$http.put(url, body.newGame) // update
					.then(function(res) {
						$log.log('success: updateNewGame()');
						$log.log(res.data); // res.data = updated game
						loadGames();
					})
					.catch(function(err) {$log.log(err)})
			}
		}
		function updateNewPlayer() {
			if (body.newPlayer && body.newPlayer.name && body.newPlayer.name.trim().length > 0) {
				let url = '/players/' + body.newPlayer._id;
				$log.log('HTTP PUT ' + url);
				$http.put(url, body.newPlayer) // update
					.then(function(res) {
						$log.log('success: updateNewPlayer()');
						$log.log(res.data); // res.data = updated player
						loadPlayers();
					})
					.catch(function(err) {$log.log(err)})
			}
		}
		
	}
})();/* closure */