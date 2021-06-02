const Feed = require('../models/feed-model');

const posts = async(req,res,next) => {
    
}

const newPost = async(req,res,next) => {
    const { title, description } = req.body;
    try {
        const result = await Feed.create({
            title, description
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    res.status(201).json({message: 'Post Created'})
}

const getPostById = async(req,res,next) => {
    let post;
    const { postId } = req.params;
    
}

exports.posts = posts;
exports.newPost = newPost;
exports.getPostById = getPostById;