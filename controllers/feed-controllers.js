const db = require('../db/db');

const posts = async(req,res,next) => {
    let posts;
    try {
        const result = await db.execute('SELECT * FROM posts');
        posts = result[0];
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({totalPosts: posts.length, posts})
}

const newPost = async(req,res,next) => {
    const { title, description } = req.body;
    
    try {
        await db.execute(`INSERT INTO posts (title, description) VALUES (?,?)`,[title, description]);
    } catch (error) {
     console.log(error);   
    }
    res.status(201).json({message: 'Post Created'})
}

const getPostById = async(req,res,next) => {
    let post;
    const { postId } = req.params;
    try {
        const result = await db.execute(`SELECT * FROM posts WHERE id=?`, [postId]);
        post = result[0];
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({post: post[0]})
}

exports.posts = posts;
exports.newPost = newPost;
exports.getPostById = getPostById;