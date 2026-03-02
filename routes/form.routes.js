const express = require("express");
const router = express.Router();
const fs = require("fs")

const passwordsRecibidas = [];

router.get('/password', (request, response) => {
    response.render('password_form', {titulo: "Validador de Password", lista: passwordsRecibidas});
});

router.post('/password', (request, response) => {    
    const password = request.body.pass1;
    passwordsRecibidas.push(nuevaPassword);
    response.redirect('/auth/password');
});

router.get('/status', (request, response) => {
    response.send("<h1>Servidor en línea</h1><p>Módulo de formularios activo.</p>");
});

module.exports = router;