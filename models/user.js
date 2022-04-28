const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  profile_img: {    
    data: Buffer,
    contentType: String
  },
  friends: [{
    type: String, //friends will be an array of strings
  }],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
