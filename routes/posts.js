const express = require('express');

const posts = require('../data/posts');

const router = express.Router();


router.get('/', (req, res) => {
  res.json(posts);
});


router.get('/:id', (req, res) => {
  const postId = Number(req.params.id);
  const foundPost = posts.find((post) => post.id === postId);
  if (!foundPost) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json(foundPost);
});


module.exports = router;
