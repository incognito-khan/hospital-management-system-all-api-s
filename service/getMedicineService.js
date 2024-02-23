const Medicine = require('../models/medicine');

class getMedicineService {
  async getMedicine (name) {
    return await Medicine.findOne({ name });
  }
}

module.exports = new getMedicineService();