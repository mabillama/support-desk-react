const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();

// Loads piece of middleware related to capturing data information
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// to create a route with express. This will create a response to an http request.
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support Desk API" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
