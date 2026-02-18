const express = require("express");
const externalRoutes = require("./routes/external.route");

const app = express();
const port = process.env.PORT || 3000;

app.use("/api", externalRoutes);

app.get("/", (req, res) => {
  res.send("Car API is running. Try /api/external-posts");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
