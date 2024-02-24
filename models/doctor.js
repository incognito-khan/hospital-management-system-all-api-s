const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  field: {
    type: String,
    enum: ['homeopethic', 'allopathic'],
    required: true
  },

  gender: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  date: {
    type: Date,
    default: Date.now()
  },
  
  phoneNumber: {
    type: Number,
    required: true
  },

  cnic: {
    type: Number,
    required: true
  },

  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
});

module.exports = mongoose.model('Doctor', DoctorSchema);