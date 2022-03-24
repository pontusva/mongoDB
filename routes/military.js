const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const MilitaryPost = require('../models/MilitaryPost');

router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new MilitaryPost({
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

module.exports = router;
