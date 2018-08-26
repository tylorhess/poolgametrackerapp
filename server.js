let express = require('express');
let app = express();
let port = process.env.PORT || 3018; // process.env.PORT <--(for heroku)
// let port = 80; // HTTP port for WWW
app.use('/', express.static(__dirname+'/public'));
app.listen(port, function() { console.log('localhost:'+port); });
