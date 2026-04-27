const express = require('express');
const router = express.Router();
const riotController = require('../controllers/riot.controller');
const isAuth = require('../util/is-auth'); 

router.get('/perfil', isAuth, riotController.get_summoner);
router.post('/perfil', isAuth, riotController.post_summoner);

module.exports = router;