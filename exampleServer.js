var express = require('express');
var PORT = 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

//specify middleware top - order important
var middleware = {
    requireAunthentication : function(req, res, next){
        console.log('private route hit!');
        next();
    },
    logger : function(req, res, next){
        console.log('Request: ' + req.method +' -- '+req.url + ' accessed at ' + new Date().toString());
        next();
    }
};

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