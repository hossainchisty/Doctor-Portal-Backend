const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    clinicName: {
      type: String,
      trim: true,
      required: [true, "Clinic name required"],
    },
    name: {
      type: String,
      trim: true,
      required: [true, "Name required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email required"],
    },
    phone: {
      type: String,
      trim: true,
      required: [true, "User phone number required"],
    },
    time: {
      type: String,
      trim: true,
      required: [true, "Time field required"],
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    isSuccess: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
