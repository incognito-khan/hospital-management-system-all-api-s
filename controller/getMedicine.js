const getMedicineService = require('../service/getMedicineService');
const responseService = require('../responceHandling/MedicineResponse');

const getMedicineController = async (req, res) => {
  const { name } = req.body;

  const existingMedicine = await getMedicineService.getMedicine(name);

  if(existingMedicine) {
    responseService.sendSuccess(res, 'Medicine found', existingMedicine);
  }
}

module.exports = { getMedicineController }