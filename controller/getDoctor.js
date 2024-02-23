const { response } = require('express');
const getDoctorService = require('../service/getDoctorService');
const responseService = require('../responceHandling/MedicineResponse');

const getDoctorController = async (req, res) => {
  const { phone_number } = req.body;

  const existingDoctor = await getDoctorService.getDoctor(phone_number);

  if(existingDoctor) {
    responseService.sendSuccess(res, 'Doctor found', existingDoctor);
  }
}

module.exports = { getDoctorController };