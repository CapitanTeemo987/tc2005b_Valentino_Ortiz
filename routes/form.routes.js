const express = require("express");
const router = express.Router();
const fs = require("fs")

const formController = require('../controllers/form.controller');
const isAuth = require('../util/is-auth');

router.get('/password', isAuth, formController.get_password);

router.post('/password', isAuth, formController.post_password);

router.get('/status', isAuth, formController.get_status);

module.exports = router;