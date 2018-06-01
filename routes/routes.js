const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.get("/", (req, res) => {
  Post.find()
    .then(posts => {
      console.log(posts);
      res.render("home.hbs", { posts });
    })
    .catch(err => console.log(err));
});

router.get("/post/:post", (req, res) => {
  const post = req.params.post;
  res.send(post);
});

router.get("/create", (req, res) => res.render("create.hbs"));

router.post("/create", (req, res) => {
  const body = req.body;

  const post = new Post({
    title: body.title,
    body: body.body,
    author: body.author
  });

  post.stub = post.add_stub(body.title);

  post
    .save()
    .then(post => res.json(post))
    .catch(err => console.log(err));
});

module.exports = router;
