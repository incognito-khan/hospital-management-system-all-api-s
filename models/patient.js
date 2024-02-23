// const mongoose = require('mongoose');

// const FamilyMemberSchema = new mongoose.Schema({
//   relation: {
//     type: String,
//     required: true
//   },
//   healthCondition: {
//     type: String,
//     required: true
//   }
// });

// const PatientSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },

//   gender: {
//     type: String,
//     required: true
//   },

//   age: {
//     type: Number,
//     required: true
//   },

  // date: {
  //   type: Date,
  //   default: Date.now()
  // },

  // familyHealth: [FamilyMemberSchema],
  
//   phone_number: {
//     type: Number,
//     required: true
//   },

//   CNIC: {
//     type: Number,
//     required: true
//   },

//   PVN: {
//     type: Number,
//     required: true
//   },

//   address: {
//     street: String,
//     city: String,
//     state: String,
//     zip: String
//   },

//   medicalHistory: [{
//     condition: String,
//     treatment: String,
//     date: Date.now()
//   }]
// });

// module.exports = mongoose.model('Patient', PatientSchema);