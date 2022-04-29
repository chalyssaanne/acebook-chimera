const Friend = require("../models/friend");
const User = require("../models/user");

const FriendsController = {
  New: async (req, res) => {
    const allUsers = await User.find();
    let friendsName = [];
    const loggedInUser = await User.findOne({email: req.session.user.email})
    const friendsList = loggedInUser.friends;
    
    for (let i = 0; i < friendsList.length ; i++) {
      const friend = await User.findOne({email: friendsList[i]})

      let fullName = `${friend.first_name} ${friend.last_name}`;

      friendsName.push(fullName);
    }

    res.render("friends/index", { users: allUsers.reverse(), friendsName: friendsName.reverse() });
  },

  Add: (req, res) => {
    
    const friend = new Friend ({
      requester_email: req.session.user.email,  //req.session = user currently logged in
      receiver_email: req.body.receiver_email,  //req.body = "Friends Page" index.hbs form
    });

    friend.save((err) => {
      if (err) {
        throw err;
      }

      User.findOne({email: req.session.user.email}, (err, user) => {
        if (err) {
          throw err;
        }

        user.friends.push(req.body.receiver_email);
        
        user.save((err) => {
          if (err) {
            throw err;
          }
          res.status(201).redirect("/friends");
        });
      });
    }); 
  },
};

module.exports = FriendsController;