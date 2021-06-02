const express = require('express');

const { posts, newPost, getPostById, updatePost } = require('../controllers/feed-controllers');

const router = express.Router();

router.get('/all', posts);
router.get('/:postId', getPostById);
router.post('/new', newPost);
router.patch('/:postId', updatePost);


module.exports = router;

