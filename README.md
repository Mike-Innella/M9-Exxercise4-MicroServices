## Exercise 4: Third-Party Microservice

[](https://github.com/Mike-Innella/M9-API-Development-Labs#exercise-4-third-party-microservice)

**Goal:** Connect to an external API (e.g., placeholder JSON data, weather, or NASA).

1. **Install Axios** : `npm install axios`
2. **Create a Controller** :

**`controllers/externalController.js`**

```js
const axios = require("axios");

exports.getExternalData = async (req, res) => {
  try {
    // Requirement: Support Query Params (e.g. ?limit=5)
    const limit = req.query.limit || 10;

    // Fetch data from a free public API
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    );

    // Return the third-party data to our client
    res.json({
      source: "JSONPlaceholder API",
      count: response.data.length,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch external data" });
  }
};
```

3. **Add Route** :

```js
   app.get("/api/external-posts", externalController.getExternalData);
```
