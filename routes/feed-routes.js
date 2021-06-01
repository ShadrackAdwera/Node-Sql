const express = require('express');

const { posts, newPost, getPostById } = require('../controllers/feed-controllers');

const router = express.Router();

router.get('/all', posts);
router.get('/:postId', getPostById);
router.post('/new', newPost);


module.exports = router;

