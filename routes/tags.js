const express = require('express');

const tags = require('../data/tags');
const posts = require('../data/posts.json');

const router = express.Router();


router.get('/', (req, res) => {
  res.json(tags);
});


router.get('/:tagId', (req, res) => {
  const tagId = Number(req.params.tagId);
  const foundTag = tags.find((tag) => tag.id === tagId);
  if (!foundTag) {
    return res.status(404).json({
      error: 'Tag not found',
    });
  }
  return res.json(foundTag);
});

router.get('/:tagId/posts', (req, res) => {
  const tagId = Number(req.params.tagId);
  const foundPosts = posts.filter((post) => post.tagIds.includes(tagId));
  if (!foundPosts) {
    return res.status(404).json({
      error: 'Posts not found',
    });
  }
  return res.json(foundPosts);
});


module.exports = router;
