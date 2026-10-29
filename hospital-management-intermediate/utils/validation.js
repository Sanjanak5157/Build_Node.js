function validatePatient(patient) {
  if (!patient.name || !patient.age || !patient.gender || !patient.phone) {
    return "name, age, gender and phone are required";
  }

  if (patient.age < 0 || patient.age > 120) {
    return "age must be between 0 and 120";
  }

  if (!/^\d{10}$/.test(String(patient.phone))) {
    return "phone must contain exactly 10 digits";
  }

  return null;
}

module.exports = {
  validatePatient
};