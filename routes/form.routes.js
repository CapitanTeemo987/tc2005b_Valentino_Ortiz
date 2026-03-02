const express = require("express");
const router = express.Router();
const fs = require("fs")

const formController = require('../controllers/form.controller');

router.get('/password', formController.get_password);

router.post('/password', formController.post_password);

router.get('/status', formController.get_status);

module.exports = router;