const PatientService = require('../service/patientService');
const responseService = require('../responceHandling/PatientResponse');


const patientController = async (req, res) => {
  const { name
    , gender, age, phoneNumber, cnic, pvn, address, medicalHistory 
  } = req.body;

  const newPatient= await PatientService.createPatient({ name,
    gender, age, phoneNumber, cnic, pvn, address, medicalHistory
   });
  responseService.sendCreated(res, 'User created successfully', newPatient);
};


module.exports = { patientController };