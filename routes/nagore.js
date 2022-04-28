const express = require("express");
const router = express.Router();

const NagoreController = require("../controllers/nagore");

router.get("/", NagoreController.Index);

module.exports = router;
