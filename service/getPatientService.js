const Patient = require('../models/patient');

class getPatientService {
  async getPatient (phone_number) {
    return await Patient.findOne({ phone_number });
  }
}

module.exports = new getPatientService();