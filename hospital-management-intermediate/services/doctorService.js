const { readJson } = require("../utils/fileUtils");

async function getAllDoctors() {
  return readJson("doctors.json");
}

async function getDoctorById(id) {
  const doctors = await getAllDoctors();
  return doctors.find(doctor => doctor.id === Number(id));
}

module.exports = {
  getAllDoctors,
  getDoctorById
};