const Post = require("../../models/Post");

var router = require("express").Router();

// @AssetPlus: This is a sample get request
router.get("/", async (req, res) => {
    var posts = await Post.find();
    return res.send(posts);
});

// @AssetPlus: Add other routes here
// router.post("/add")

router.post("/add", async (req, res) => {
    console.log(res);
    var post = new Post();
    post.name = req.body.name;
    post.desc = req.body.desc;
    post.img.data = req.body.img.data;
    post.img.contentType = req.body.img.contentType;
    await post.save();
    return res.send(post);
});

module.exports = router;