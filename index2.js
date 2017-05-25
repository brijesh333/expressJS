var express = require('express');
var app = express();

app.get('/:id', function(req, res) {
    res.send("Hello world!  " + req.params.id)
});

app.listen(3000);