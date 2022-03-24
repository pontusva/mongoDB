// If you want so submit a post from a military quote use this route
router.post('/military', async (req, res) => {
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