const { readJson, writeJson } = require("../utils/fileUtils");

async function getAllAppointments() {
  return readJson("appointments.json");
}

async function getAppointmentById(id) {
  const appointments = await getAllAppointments();
  return appointments.find(appointment => appointment.id === Number(id));
}

async function createAppointment(data) {
  const appointments = await getAllAppointments();

  if (!data.patientId || !data.doctorId || !data.date || !data.time) {
    throw new Error("patientId, doctorId, date and time are required");
  }

  const newId = appointments.length === 0
    ? 1
    : Math.max(...appointments.map(appointment => appointment.id)) + 1;

  const appointment = {
    id: newId,
    patientId: Number(data.patientId),
    doctorId: Number(data.doctorId),
    date: data.date,
    time: data.time,
    status: data.status || "Scheduled"
  };

  appointments.push(appointment);
  await writeJson("appointments.json", appointments);

  return appointment;
}

module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment
};