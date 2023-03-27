const express = require("express");
const path = require("path");

const app = express();

const PORT = 5000;

// Serve static files
app.use(express.static(path.join(__dirname, "build")));

// Always serve the index.html file for any request
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
