// Basic Lib Imports
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "User name required"],
    },
    gender: {
      type: String,
      trim: true,
      required: [true, "User gender required"],
    },
    age: {
      type: String,
      required: [true, "User age required"],
    },
    weight: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "User email required"],
    },
    phone: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "User phone number required"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "User password required"],
    },
    prescriptions: [{ any: Object }],
    address: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
      default: "avatar.png",
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
  },
  {
    timeseries: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
