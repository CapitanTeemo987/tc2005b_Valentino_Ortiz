const express = require("express");
const router = express.Router();

const labController = require('../controllers/lab.controller');
const isAuth = require('../util/is-auth');

router.get('/completo', isAuth, labController.get_completo);

router.get('/preguntas-html', isAuth, labController.get_preguntas_html);

router.get('/preguntas-css', isAuth, labController.get_preguntas_css);

module.exports = router;
