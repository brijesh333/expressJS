var express=require('express');
var app=express();
app.get("/",function(req,res){
    res.send("default route");
});

app.listen(3000,function(){
    console.log("Server is listening at 3000 port");
});