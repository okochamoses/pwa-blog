const moment = require("moment");
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
  category: {
    type: String,
    required: true,
    default: "Uncategorized"
  },
  postImg: {
    type: String,
    required: true,
    default: "/images/default-post.jpg"
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

// Return formated date
PostSchema.method("format_date", date => {
  return moment(date).format("lll");
});

const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
