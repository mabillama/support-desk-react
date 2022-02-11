const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

// to create a route with express. This will create a response to an http request.
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support Desk API" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
