const express = require('express');
const router = express.Router();

//  Webserver index
router.get('/', (req, res, next) => res.json({ title: 'Welcome to API Index' }));

module.exports = router;
