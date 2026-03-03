const express = require("express");
const router = express.Router();

const usersCOntroller = require('../controllers/users.controller');

router.get('/login', usersCOntroller.get_login);
router.post('/login', usersCOntroller.post_login);

module.exports = router;
