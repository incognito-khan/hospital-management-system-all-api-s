const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  form: {
    type: String,
    enum: ['drop', 'tablet', 'capsule', 'syrup', 'injection'],
    required: true
  },

  potency: {
    type: String,
    required: true
  },

  expiryDate: {
    type: Date,
    required: true
  },
  
  quantity: {
    type: Number,
    required: true
  },

  prescriptionRequired: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Medicine', MedicineSchema);