var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();

var middleware = require('./middleware.js')

app.use(express.static(__dirname + '/public'));

//specify middleware top - order important

app.use(middleware.logger);

app.get('/about', middleware.requireAunthentication, function(req, res){
    res.send('about us');
});

app.get('/', function(req, res){
   console.log('Hello!');
    res.send('Hey!');
});


app.listen(PORT, function(){
    console.log('Express server started at '+PORT+'....');
});