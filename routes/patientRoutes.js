const express = require('express');
const { patientController } = require('../controller/patientData');
const { medicineController } = require('../controller/medicineData');
const { getMedicineController } = require('../controller/getMedicine');
const { getPatientController } = require('../controller/getPatient');
const { getDoctorController } = require('../controller/getDoctor');
const { doctorController } = require('../controller/doctorData');

const userRouter = express.Router();

userRouter.post("/addPatient", patientController);
userRouter.post("/getPatient", getPatientController);
userRouter.post("/addMedicine", medicineController);
userRouter.post("/getMedicine", getMedicineController);
userRouter.post("/addDoctor", doctorController);
userRouter.post("/getDoctor", getDoctorController);

module.exports = userRouter;