var express=require('express');
var app=express();

var cb0=function(req,res,next){
    console.log("this is CB0");
    next();
}

var cb1=function(req,res,next){
    console.log("this is CB1");
    next();
}
var cb2=function(req,res){
    res.send("resolved in CB2");
}

app.get("/example/c",[cb0,cb1,cb2]);

app.listen(3000, function(){
    console.log("Server is listening on 3000 port");
})