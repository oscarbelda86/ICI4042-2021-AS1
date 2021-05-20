"use strict";
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');
var hostname = '127.0.0.1';
var port = 3023;
//metodo para obtener lista
app.get('/', function (req, res) {
    fs.readFile('notas.json', function (err, json) {
        var obj = JSON.parse(json);
        res.json(obj);
    });
});
//metodo para añadir nota a lista
app.get('/agregar', function (req, res, string) {
    fs.writeFile('notas.json', JSON.stringify(req), function (err) {
        console.log(JSON.stringify(string));
    });
});
//metodo para editar nota a lista 
app.post('/editar', function (req, res) {
});
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
