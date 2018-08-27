// Load mongoose package
let mongoose = require('mongoose');

// connect to 'poolGameTrackerApp' database using MongoDB (if it does NOT exist, create it)
mongoose.connect('mongodb://localhost/poolGameTrackerApp');

// create 'Player' schema
let PlayerSchema = new mongoose.Schema({
  // id: ???,
  name: String,
  wins: { type: Number, default: 0 },
  updated_at: { type: Date, default: Date.now }
});
// create 'Game' schema
let GameSchema = new mongoose.Schema({
  // id: ???,
  winner: Object,	// winnerId?
  loser: Object,	// loserId?
  updated_at: { type: Date, default: Date.now }
});

// Create models based on schemas
let Player = mongoose.model('Player', PlayerSchema);
let Game   = mongoose.model('Game',   GameSchema);


// create & save player instance
// Player.create( {name: 'Sue'}, callback ); 
// Player.findOneAndRemove({name:'Tylor'}, callback );

// get [Array] of all [Player] objects
Player.find( callback ); // res = [Array] of [Player] objects
// get [Array] of all [Player] objects that match query object
// Player.find( {name:'Ryan'}, callback );

Game.findByIdAndRemove(
	"5b832a777e82872cd569fe1a", 
	function(err, game){
		if(err) {
			console.log(err);
		}
		console.log(game);
	}
);





function callback(err, res) {
	  if(err)
	    console.log(err);
	  else
	    console.log(res);
}