const express = require('express');

const router = express.Router();

const fakeComments = require('../data/comments');


router.get('/', (req, res) => {
  res.json(fakeComments);
});


module.exports = router;
