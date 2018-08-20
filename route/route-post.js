var express = require('express');
var app=express();

app.post("/",function(req,res){
    res.send("This is post rquest on default route");
});

app.listen(3000, function(req,res){
    console.log("Server is listening at 3000 port.");
});