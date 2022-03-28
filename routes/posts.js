const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const MilitaryPost = require('../models/MilitaryPost');
const verify = require('./verifyToken');


// gets all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }catch(err) {
        res.json( { message: err } )
    }
});

// get military posts

router.get('/military', async (req, res) => {
    try {
        const posts = await MilitaryPost.find();
        res.json(posts);
    }catch(err) {
        res.json( { message: err } )
    }
});



// submits a post


router.post('/', verify , async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        name: req.body.name,
        quote: req.body.quote,
        explanation: req.body.explanation,
        source: req.body.source
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json( { message: err } )
    }   
});




// speficig post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json( { message: err } ) 
    } 
});

// delete a specific Post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne( { _id: req.params.postId } )
        res.json(removedPost);
    } catch(err) {
        res.json( { message: err } );
    }   
});

// update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
                { _id: req.params.postId }, 
                {$set: {title: req.body.title}}
            );
            res.json(updatedPost);
    } catch (err) {
        res.json( { message: err } )
    }
})


module.exports = router;
