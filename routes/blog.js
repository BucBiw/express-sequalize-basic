const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');

/* GET users listing. */
router.get('/', blogController.index);

module.exports = router;
