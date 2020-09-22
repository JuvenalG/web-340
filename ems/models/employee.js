// Require statement
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// employee Schema set requirements on created objects
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});

// Export model so that it may be used as a require
module.exports = mongoose.model('Employee', EmployeeSchema);