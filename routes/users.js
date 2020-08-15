const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

/* GET users listing. */
router.get('/', userController.index);

module.exports = router;
