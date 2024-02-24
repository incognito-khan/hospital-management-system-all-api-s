const { response } = require('express');
const getPatientService = require('../service/getPatientService');
const responseService = require('../responceHandling/MedicineResponse');

const getPatientController = async (req, res) => {
  const { phone_number } = req.body;

  const existingPatient = await getPatientService.getPatient(phone_number);

  if(existingPatient) {
    responseService.sendSuccess(res, 'Patient found', existingPatient);
  }
}

module.exports = { getPatientController };