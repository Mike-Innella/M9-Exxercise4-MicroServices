const { fetchCarMakes } = require("../models/car.model");

exports.getExternalData = async (req, res) => {
  try {
    const parsedLimit = Number.parseInt(req.query.limit, 10);
    const limit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 10;
    const limitedResults = await fetchCarMakes(limit);

    res.json({
      source: "NHTSA Vehicle API",
      count: limitedResults.length,
      data: limitedResults,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch external data" });
  }
};
