const express = require("express");
const externalController = require("./controllers/externalController");

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/external-posts", externalController.getExternalData);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
