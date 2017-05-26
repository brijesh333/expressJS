var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log("start called");
    next();
})

app.get('/', function(req, res, next) {
    //res.send("middle called");
    console.log("in middle called");
    next();
})

app.use('/', function(req, res) {
    console.log("end called");
});

app.listen(3000);