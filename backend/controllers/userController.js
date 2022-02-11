const asyncHandler = require("express-async-handler");

// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = asynHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  res.send("Register Route");
});

// @desc    Login user
// @route   /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route");
});

module.exports = {
  registerUser,
  loginUser,
};

// adding data in the body to send to the register and login routes
