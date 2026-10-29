const { readJson, writeJson } = require("../utils/fileUtils");
const { validatePatient } = require("../utils/validation");

async function getAllPatients() {
  return readJson("patients.json");
}

async function getPatientById(id) {
  const patients = await getAllPatients();
  return patients.find(patient => patient.id === Number(id));
}

async function searchPatients(name) {
  const patients = await getAllPatients();

  return patients.filter(patient =>
    patient.name.toLowerCase().includes(name.toLowerCase())
  );
}

async function createPatient(patientData) {
  const error = validatePatient(patientData);

  if (error) {
    throw new Error(error);
  }

  const patients = await getAllPatients();

  const newId = patients.length === 0
    ? 1
    : Math.max(...patients.map(patient => patient.id)) + 1;

  const newPatient = {
    id: newId,
    name: patientData.name,
    age: Number(patientData.age),
    gender: patientData.gender,
    phone: String(patientData.phone),
    disease: patientData.disease || "Not specified",
    doctorId: patientData.doctorId ? Number(patientData.doctorId) : null
  };

  patients.push(newPatient);
  await writeJson("patients.json", patients);

  return newPatient;
}

async function updatePatient(id, patientData) {
  const patients = await getAllPatients();
  const index = patients.findIndex(patient => patient.id === Number(id));

  if (index === -1) {
    return null;
  }

  const updatedPatient = {
    ...patients[index],
    ...patientData,
    id: Number(id)
  };

  const error = validatePatient(updatedPatient);

  if (error) {
    throw new Error(error);
  }

  updatedPatient.age = Number(updatedPatient.age);
  updatedPatient.phone = String(updatedPatient.phone);

  if (updatedPatient.doctorId !== null && updatedPatient.doctorId !== undefined) {
    updatedPatient.doctorId = Number(updatedPatient.doctorId);
  }

  patients[index] = updatedPatient;
  await writeJson("patients.json", patients);

  return updatedPatient;
}

async function deletePatient(id) {
  const patients = await getAllPatients();
  const index = patients.findIndex(patient => patient.id === Number(id));

  if (index === -1) {
    return false;
  }

  patients.splice(index, 1);
  await writeJson("patients.json", patients);

  return true;
}

module.exports = {
  getAllPatients,
  getPatientById,
  searchPatients,
  createPatient,
  updatePatient,
  deletePatient
};