const PatientService = require('../service/patientService');
const responseService = require('../responceHandling/PatientResponse');


const patientController = async (req, res) => {
  const { name
    // , gender, age, phone_number, CNIC, PVN, address, medicalHistory 
  } = req.body;

  const newPatient= await PatientService.createPatient({ name
    // gender, age, phone_number, CNIC, PVN, address, medicalHistory
   });
  responseService.sendCreated(res, 'User created successfully', newPatient);
};


module.exports = { patientController };