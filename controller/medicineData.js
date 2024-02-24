const MedicineService = require('../service/medicineService');
const responseService = require('../responceHandling/MedicineResponse');


const medicineController = async (req, res) => {
  const { name, form, potency, expiryDate, quantity, prescriptionRequired } = req.body;

  const newMedicine= await MedicineService.addMedicine({ name, form, potency, expiryDate, quantity, prescriptionRequired });
  responseService.sendCreated(res, 'Medicine added successfully', newMedicine);
};


module.exports = { medicineController };