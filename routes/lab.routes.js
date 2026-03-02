const express = require("express");
const router = express.Router();

const labController = require('../controllers/lab.controller');

router.get('/completo', labController.get_completo);

router.get('/preguntas-html', labController.get_preguntas_html);

router.get('/preguntas-css', labController.get_preguntas_css);

module.exports = router;
