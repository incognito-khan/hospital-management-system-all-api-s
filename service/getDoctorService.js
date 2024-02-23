const Doctor = require('../models/doctor');

class getDoctorService {
  async getDoctor (phone_number) {
    return await Doctor.findOne({ phone_number });
  }
}

module.exports = new getDoctorService();