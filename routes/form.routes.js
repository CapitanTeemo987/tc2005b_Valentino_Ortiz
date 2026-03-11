const express = require("express");
const router = express.Router();
const fs = require("fs")

const formController = require('../controllers/form.controller');
const isAuth = require('../util/is-auth');
const canUseAuth = require('../util/can-use-auth')

router.get('/password', isAuth, canUseAuth, formController.get_password);

router.post('/password', isAuth, canUseAuth, formController.post_password);

router.get('/status', isAuth, canUseAuth, formController.get_status);

module.exports = router;