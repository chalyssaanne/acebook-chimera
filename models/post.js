const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: {type: String, required: true},
  likes: { type: Number, default: 0},
  creator_first_name: { type: String, ref: 'user'},
  creator_last_name: { type: String, ref: 'user'},
  creator_profile_img: {
    data: Buffer,
    contentType: String
  },

  img: {
    data: Buffer,
    contentType: String
  }
}, { timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'}}
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;