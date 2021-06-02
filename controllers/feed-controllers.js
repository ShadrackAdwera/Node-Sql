const db = require('../db/db');

const posts = async(req,res,next) => {
    
}

const newPost = async(req,res,next) => {
    const { title, description } = req.body;
    
    
    res.status(201).json({message: 'Post Created'})
}

const getPostById = async(req,res,next) => {
    let post;
    const { postId } = req.params;
    
}

exports.posts = posts;
exports.newPost = newPost;
exports.getPostById = getPostById;