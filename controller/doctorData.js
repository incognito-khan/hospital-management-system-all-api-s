const doctorService = require('../service/doctorService');
const responseService = require('../responceHandling/doctorResponse');

const doctorController = async(req, res) => {
    const { name, field, gender, age, phoneNumber, cnic } = req.body;

    const newDoctor = await doctorService.createDoctor({ name, field, gender, age, phoneNumber, cnic });
    responseService.sendCreated(res, "Doctor successfully created!", newDoctor);
};

module.exports = { doctorController };