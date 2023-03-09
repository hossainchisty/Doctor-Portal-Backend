const mongoose = require("mongoose");

const clinicSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Clinic name required"],
  },
  time: {
    type: String,
    trim: true,
    required: [true, "Clinic availability time required"],
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Clinic = mongoose.model("Clinic", clinicSchema);
module.exports = Clinic;
