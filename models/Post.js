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
  created_at: {
    type: Date,
    required: true,
    default: Date.now()
  }
});
