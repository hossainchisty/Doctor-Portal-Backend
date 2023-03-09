// Basic Lib Imports
const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getSingleAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointmentController");

router.route("/:id").get(getSingleAppointment);
router.route("/").post(createAppointment);
router.route("/update/:id").put(updateAppointment);
router.route("/delete/:id").delete(deleteAppointment);

module.exports = router;
