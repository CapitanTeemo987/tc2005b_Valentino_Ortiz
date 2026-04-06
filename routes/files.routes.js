const express = require('express');
const router = express.Router();
const archivoController = require('../controllers/files.controller');
const isAuth = require('../util/is-auth');

router.get('/archivo', isAuth, archivoController.getArchivo);
router.post('/archivo', isAuth, archivoController.postArchivo);

module.exports = router;