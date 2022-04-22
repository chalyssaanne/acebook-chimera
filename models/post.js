const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: {type: String, required: true},
}, { timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'}}
);


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
