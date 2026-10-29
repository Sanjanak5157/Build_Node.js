// JavaScript practice layer
// Start here if you are learning the project step-by-step.

const patients = [
  { id: 1, name: "Alex", age: 20, disease: "Fever", doctorId: 1 },
  { id: 2, name: "John", age: 25, disease: "Diabetes", doctorId: 2 },
  { id: 3, name: "Viki", age: 32, disease: "Migraine", doctorId: 1 }
];

function showPatients() {
  for (let i = 0; i < patients.length; i++) {
    console.log(`Patient: ${patients[i].name}`);
  }
}

function findPatientById(id) {
  return patients.find(patient => patient.id === id);
}

function getAdultPatients() {
  return patients.filter(patient => patient.age >= 18);
}

function getPatientNames() {
  return patients.map(patient => patient.name);
}

showPatients();

console.log("Patient with ID 2:", findPatientById(2));
console.log("Adult patients:", getAdultPatients());
console.log("Patient names:", getPatientNames());

module.exports = {
  patients,
  showPatients,
  findPatientById,
  getAdultPatients,
  getPatientNames
};






