const patientService = require("../services/patientService");

async function getPatients(req, res) {
  try {
    const patients = req.query.name
      ? await patientService.searchPatients(req.query.name)
      : await patientService.getAllPatients();

    res.json({
      success: true,
      count: patients.length,
      data: patients
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

async function getPatient(req, res) {
  try {
    const patient = await patientService.getPatientById(req.params.id);

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found"
      });
    }

    res.json({
      success: true,
      data: patient
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

async function createPatient(req, res) {
  try {
    const patient = await patientService.createPatient(req.body);

    res.status(201).json({
      success: true,
      message: "Patient created successfully",
      data: patient
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}

async function updatePatient(req, res) {
  try {
    const patient = await patientService.updatePatient(
      req.params.id,
      req.body
    );

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found"
      });
    }

    res.json({
      success: true,
      message: "Patient updated successfully",
      data: patient
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}

async function deletePatient(req, res) {
  try {
    const deleted = await patientService.deletePatient(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Patient not found"
      });
    }

    res.json({
      success: true,
      message: "Patient deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient
};