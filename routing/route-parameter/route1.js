var express=require('express');
var app=express();

app.get("/user/:userid",function(req,res){
    res.send(req.params);
});

app.get("/flight/:from-:to",function(req,res){
    res.send(req.params);
})

app.listen(3000,function(){
    console.log("server is listening on 3000 port");
});