const appointmentService = require("../services/appointmentService");

async function getAppointments(req, res) {
  try {
    const appointments = await appointmentService.getAllAppointments();

    res.json({
      success: true,
      count: appointments.length,
      data: appointments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

async function getAppointment(req, res) {
  try {
    const appointment = await appointmentService.getAppointmentById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found"
      });
    }

    res.json({
      success: true,
      data: appointment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

async function createAppointment(req, res) {
  try {
    const appointment = await appointmentService.createAppointment(req.body);

    res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      data: appointment
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  getAppointments,
  getAppointment,
  createAppointment
};