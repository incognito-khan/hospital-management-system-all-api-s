const Medicine = require('../models/medicine');

class MedicineService {
  async addMedicine(medicineDetails) {

    const medicine = new Medicine(medicineDetails);
    await medicine.save();
    return medicine;
  }
}

module.exports = new MedicineService();