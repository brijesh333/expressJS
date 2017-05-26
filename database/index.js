var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});

var Person = mongoose.model("Person", personSchema);

app.put('/people/:id', function(req, res) {
    Person.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
        if (err) res.json({ message: "Error in updating person with id " + req.params.id });
        res.json(response);
    });
});

app.listen(3000);