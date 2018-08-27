let express = require('express');
let app = express();
let port = process.env.PORT || 3018; // process.env.PORT <--(for heroku)
// let port = 80; // HTTP port for WWW

// use 'body-parser' module to parse HTTP requests
let bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true })); // contentType: 'application/x-www-form-urlencoded'
app.use(bodyParser.json());	// contentType: 'application/json' 

// Load mongoose package
let mongoose = require('mongoose');

// connect to 'poolGameTrackerApp' database using MongoDB (if it does NOT exist, create it)
// mongoose.connect('mongodb://localhost/poolGameTrackerApp');
mongoose.connect('mongodb://heroku_8sr92pjq:a7qd02lms9f57gli13qkvnrhfh@ds133262.mlab.com:33262/heroku_8sr92pjq');

// create 'Player' schema
let PlayerSchema = new mongoose.Schema({
  name: String,
  updated_at: { type: Date, default: Date.now }
});
// create 'Game' schema
let GameSchema = new mongoose.Schema({
  winner: Object,
  loser: Object,
  updated_at: { type: Date, default: Date.now }
});

// Create models based on schemas
let Player = mongoose.model('Player', PlayerSchema);
let Game   = mongoose.model('Game',   GameSchema);

//----- static server -----//
app.use('/', express.static(__dirname+'/public'));

//----- dynamic server -----//

// POST /players --> create/respond with new player
app.post('/players', function (req, res, next) {
	Player.create(
		req.body,
		function(err, newPlayer){
			if(err) {
				console.log(err);
				res.send(err);
			}
			res.json(newPlayer);
		}
	);
});
// POST /games --> create/respond with new game
app.post('/games', function (req, res, next) {
	Game.create(
		req.body,
		function(err, newGame){
			if(err) {
				console.log(err);
				res.send(err);
			}
			res.json(newGame);
		}
	);
});


// GET /players --> get all players
app.get('/players', function (req, res, next) {
	Player.find(
		function(err, playersArray){
			if(err) {
				console.log(err);
				res.send(err);
			}
			res.json(playersArray);
		}
	);
});
// GET /games --> get all games
app.get('/games', function (req, res, next) {
	Game.find(
		function(err, gamesArray){
			if(err) {
				console.log(err);
				res.send(err);
			}
			res.json(gamesArray);
		}
	);
});

// GET /players/:id --> get player with :id
app.get('/players/:id', function (req, res, next) {
	Player.findById(
		req.params.id, 
		function(err, player){
			if(err) {
				console.log(err);
				res.send(err);
			}
			res.json(player);
		}
	);
});
// GET /games/:id --> get game with :id
app.get('/games/:id', function (req, res, next) {
	Game.findById(
		req.params.id, 
		function(err, game){
			if(err) {
				console.log(err);
				res.send(err);
			}
			res.json(game);
		}
	);
});

// PUT /players/:id --> update player with :id
app.put('/players/:id', function (req, res, next) {
	Player.findByIdAndUpdate(
		req.params.id, 
		req.body,
		function(err, updatedPlayer){
			if(err) {
				console.log(err);
				res.send(err);
			}
			res.json(updatedPlayer);
		}
	);
});
// PUT /games/:id --> update game with :id
app.put('/games/:id', function (req, res, next) {
	Game.findByIdAndUpdate(
		req.params.id, 
		req.body,
		function(err, updatedGame){
			if(err) {
				console.log(err);
				res.send(err);
			}
			res.json(updatedGame);
		}
	);
});

// DELETE /players/:id --> delete player with :id
app.delete('/players/:id', function (req, res, next) {
	Player.findByIdAndRemove(
		req.params.id, 
		function(err, deletedPlayer){
			if(err) {
				console.log(err);
				res.send(err);
			}
			res.json(deletedPlayer);
		}
	);
});
// DELETE /games/:id --> delete game with :id
app.delete('/games/:id', function (req, res, next) {
	Game.findByIdAndRemove(
		req.params.id, 
		function(err, deletedGame){
			if(err) {
				console.log(err);
				res.send(err);
			}
			res.json(deletedGame);
		}
	);
});


//----- run server -----//
app.listen(port, function() { console.log('localhost:'+port); });
