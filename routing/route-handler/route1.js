var express=require('express');
var app=express();

app.get("/example/a",function(req,res){
    res.send("This response is served from a");
});

app.get("/example/b",function(req,res,next){
    console.log("This is parser is called before b served");
    next();
},function(req,res){
    res.send("This response is served from b");
});



app.listen(3000,function(req,res){
    console.log("server is listening at 3000 port");
});