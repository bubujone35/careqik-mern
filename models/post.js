const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
  },
  body: {
    type: String,
    required: "Body is required",
  },
  photo: {
    type: Buffer,
    contentType: String
  }, 
  postedBy: {
    type: ObjectId,
    ref: "User"
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", postSchema);
