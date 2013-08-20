var express = require('express')
  , routesIndex = require('./routes')
  , routesPlay = require('./routes/play')
  , http = require('http')
  , path = require('path')
  , firebase = require('firebase');

var app = express();

// all environments
app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});


// Routing
app.get('/', routesIndex.index);
// console.log(typeof routes.play);
app.get('/play', routesPlay.play);

// Firebase server side actions

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));

});
