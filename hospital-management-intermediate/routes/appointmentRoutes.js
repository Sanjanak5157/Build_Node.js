const express = require("express");
const router = express.Router();

const {
  getAppointments,
  getAppointment,
  createAppointment
} = require("../controllers/appointmentController");

router.get("/", getAppointments);
router.get("/:id", getAppointment);
router.post("/", createAppointment);

module.exports = router;
