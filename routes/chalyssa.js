const express = require("express");
const router = express.Router();

const ChalyssaController = require("../controllers/chalyssa");

router.get("/", ChalyssaController.Index);

module.exports = router;
