const express = require("express");
const router = express.Router();
const multer = require('multer')();

const UsersController = require("../controllers/users");

router.get("/new", UsersController.New);
router.post("/", multer.single('profile_img'), UsersController.Create);


module.exports = router;
