'use strict'

var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/form', function (req, res) {
    var nombre     = req.body.nombre;
    var apellido   = req.body.apellido;
    var edad       = req.body.edad;
    var celular    = req.body.celular;
    var nacimiento = req.body.nacimiento;
    var residencia = req.body.residencia;

    var html = "<p>Nombre y Apellido: " + nombre + " " + apellido + "</p>" +
        "<p>Edad: " + edad + "</p>" +
        "<p>Número de celular: " + celular +"</p>" +
        "<p>País de nacimiento: " + nacimiento + "</p>" +
        "<p>País de residencia: " + residencia + "</p>" +
        "<a href='index.html'>Volver al formulario</a>";
        res.send(html);
})

app.listen(3000, function () {
    console.log('Alan Kurc');
})
