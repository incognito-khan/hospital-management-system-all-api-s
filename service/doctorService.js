const Doctor = require('../models/doctor');

class doctorService {
    async createDoctor(userDetails) {
        const doctor = new Doctor(userDetails);
        await doctor.save();
        return doctor;
    }
};

module.exports = new doctorService();