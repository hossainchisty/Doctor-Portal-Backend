// Basic Lib Imports
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")

// @desc    Get users
// @route   GET /api/v1/users
// @access  Private
const getUser = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});
  
module.exports = {getUser};