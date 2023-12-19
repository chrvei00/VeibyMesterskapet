// Import the required modules
const express = require("express");
const path = require("path");

// Create an instance of the Express application
const app = express();

// Define your routes and middleware here
app.use(express.static(path.join(__dirname, "../client", "dist")));
// Handle all other GET-reqs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
