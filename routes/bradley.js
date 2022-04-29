const express = require("express");
const router = express.Router();

const bradleyController = require ('../controllers/bradley')

router.get("/",bradleyController.Index);

module.exports = router