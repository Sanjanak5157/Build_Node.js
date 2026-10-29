const doctorService = require("../services/doctorService");

async function getDoctors(req, res) {
  try {
    const doctors = await doctorService.getAllDoctors();

    res.json({
      success: true,
      count: doctors.length,
      data: doctors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

async function getDoctor(req, res) {
  try {
    const doctor = await doctorService.getDoctorById(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found"
      });
    }

    res.json({
      success: true,
      data: doctor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  getDoctors,
  getDoctor
};