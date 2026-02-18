const axios = require("axios");

const CAR_API_URL = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";

const fetchCarMakes = async (limit) => {
  const response = await axios.get(CAR_API_URL);
  return response.data.Results.slice(0, limit);
};

module.exports = { fetchCarMakes };
