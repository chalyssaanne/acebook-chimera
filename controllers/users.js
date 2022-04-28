const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", {});
  },

  Create: (req, res) => {
    User.findOne({email: req.body.email }, function(err, user){

      if ( user ) {
        console.log("User already exists!");
        res.redirect("/");
        return;
      }  

      user = new User({...req.body, profile_img: {
        contentType: req.file?.type,
        data: req.file?.buffer
      }})
      user.save((err) => {
        if (err) {
          throw err;
        }

        res.status(201).redirect("/posts");
      })
    },
  )},
};

module.exports = UsersController;
