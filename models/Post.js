const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 2
  },
  body: {
    type: String,
    required: true,
    minlength: 10
  },
  author: {
    type: String,
    required: true,
    minlength: 2
  },
  stub: {
    type: String
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

// Create stub for Post
PostSchema.method("add_stub", text => {
  return text
    .split(" ")
    .join("-")
    .toLowerCase();
});

const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
