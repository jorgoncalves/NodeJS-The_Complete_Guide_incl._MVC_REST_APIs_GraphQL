exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            { title: 'First Post', content: 'This is the first post!', imageUrl: 'image/duck.jpg' }
        ]
    });
};

exports.postPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // Create post in db
    res.status(201).json({
        message: 'Post created successfully',
        post: { title: title, content: content }
    });
};
