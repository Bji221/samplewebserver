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

module.exports = middleware;