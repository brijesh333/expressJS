var express=require('express');
var app=express();

app.get("/about",function(req,res){
    res.send("/about");
});

app.get("/random.text",function(req,res){
    res.send("/random.text");
});

app.listen(3000,function(req,res){
    console.log("application is listening at 3000 port");
});