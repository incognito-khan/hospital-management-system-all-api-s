const Patient = require('../models/patient');

class PatientService {
  async createPatient(userDetails) {

    const patient = new Patient(userDetails);
    await patient.save();
    return patient;
  }
}

module.exports = new PatientService();