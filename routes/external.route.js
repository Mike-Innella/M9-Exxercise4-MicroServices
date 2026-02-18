const express = require("express");
const externalController = require("../controllers/external.controller");

const router = express.Router();

router.get("/api/external-posts", externalController.getExternalData);

module.exports = router;
