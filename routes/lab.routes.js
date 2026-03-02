const express = require("express");
const router = express.Router();

router.get('/completo', (request, response) => {
    response.render('lab_completo', {titulo: "Laboratorio" });
});

router.get('/preguntas-html', (request, response) => {
    response.render('preguntashtml', {titulo: "Preguntass HTML" });
});

router.get('/preguntas-css', (request, response) => {
    response.render('preguntascss', {titulo: "Preguntass CSS" });
});

module.exports = router;
