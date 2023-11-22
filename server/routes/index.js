const express = require('express');
const router = express.Router();

const question = require('./question');
const quiz = require('./quiz');


router.use('/question', question);
router.use('/quiz', quiz);



module.exports = router;