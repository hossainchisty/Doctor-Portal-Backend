// Basic Lib Imports
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// @desc    GET A SINGLE USER
// @route   GET /api/v1/users/:id
// @access  Private
const getSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    data: {
      user,
    },
  });
};

// @desc    Create new user
// @route   POST /api/v1/users/
// @access  Public
const createUser = async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400).json({
      message: "Email Already exist",
    });
  } else {
    const user = await User.create(req.body);
    res.status(201).json({
      data: {
        user,
      },
    });
  }
};

// @desc    Update A user
// @route   PUT /api/v1/users/update/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const latestuser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ latestuser });
});

// @desc    Delete a user
// @route   DELETE /api/v1/users/delete/:id
// @access  Private
const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    data: {
      massage: "Delete Successfully",
    },
  });
};
module.exports = { getUser, getSingleUser, createUser, updateUser, deleteUser };
