const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: String,
    quantity: Number
}, { timestamps: true }
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;