const express = require('express');
const router = express.Router();
const MilitaryPost = require('../models/MilitaryPost');


// use localhost:8080/posts/military to post to the DB
// under the military DB.
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

// Get the military posts.



module.exports = router;
