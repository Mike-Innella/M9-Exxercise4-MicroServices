const axios = require("axios");

exports.getExternalData = async (req, res) => {
  try {
    // Requirement: Support Query Params (e.g. ?limit=5)
    const parsedLimit = Number.parseInt(req.query.limit, 10);
    const limit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 10;

    // Fetch car make data from a free public API
    const response = await axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json");
    const limitedResults = response.data.Results.slice(0, limit);

    // Return the third-party data to our client
    res.json({
      source: "NHTSA Vehicle API",
      count: limitedResults.length,
      data: limitedResults,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch external data" });
  }
};
