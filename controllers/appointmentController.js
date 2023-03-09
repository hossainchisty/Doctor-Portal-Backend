// Basic Lib Imports
const asyncHandler = require("express-async-handler");
const Appointment = require("../models/appointmentModel");
const { ObjectId } = require("mongoose").Types;

// @desc    Create An Appointment
// @route   GET /api/v1/appointment
// @access  Public
const createAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.status(201).json({
    data: appointment,
  });
});

// @desc    GET A Single Object
// @route   GET /api/v1/appointment/:id
// @access  Private
const getSingleAppointment = asyncHandler(async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error("Invaild ID");
  }
  const appointment = await Appointment.findById(req.params.id);
  res.status(200).json({
    data: appointment,
  });
});

// @desc    Update A Appointment
// @route   GET /api/v1/appointment/update/:id
// @access  Private
const updateAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  if (!appointment) {
    res.status(404);
    throw new Error("Appointment not found");
  }
  const latestAppointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({ latestAppointment });
});

// @desc    Delete A Appointment
// @route   DELETE /api/v1/appointment/delete/:id
// @access  Private
const deleteAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);
  if (!appointment) {
    res.status(200);
    throw new Error("Already deleted.");
  }
  res.status(200).json({
    data: {
      massage: "Delete Successfully",
    },
  });
});

module.exports = {
  createAppointment,
  getSingleAppointment,
  updateAppointment,
  deleteAppointment,
};
