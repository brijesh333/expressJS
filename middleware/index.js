var express = require('express');
var app = express();

// app.use(function(req, res, next) {
//     console.log("new request received at :- " + Date.now());
//     next();
// });

app.use('/things', function(req, res, next) {
    console.log("new request received at :- " + Date.now());
    next();
});

app.get('/things', function(req, res) {
    res.send('Things');
});


app.listen(3000);