const Feed = require('../models/feed-model');

const posts = async(req,res,next) => {
    let feeds;
    try {
        feeds = await Feed.findAll();
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({feeds})
}

const newPost = async(req,res,next) => {
    const { title, description } = req.body;
    try {
        await Feed.create({
            title, description
        });
    } catch (error) {
        console.log(error);
    }
    res.status(201).json({message: 'Post Created'})
}

const getPostById = async(req,res,next) => {
    let feed;
    const { postId } = req.params;
    try {
        feed = await Feed.findByPk(postId);
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({feed});
}

exports.posts = posts;
exports.newPost = newPost;
exports.getPostById = getPostById;