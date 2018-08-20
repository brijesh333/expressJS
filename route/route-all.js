var express=require('express');
var app=express();

app.all("/",function(req,res){
    res.send("this is default response for all routes");
});

app.listen(3000, function(){
    console.log("application is listening at 3000 port");
});