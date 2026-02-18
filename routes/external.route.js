const express = require("express");
const externalController = require("../controllers/external.controller");

const router = express.Router();

router.get("/external-posts", externalController.getExternalData);

module.exports = router;
