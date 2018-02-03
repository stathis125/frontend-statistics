const Employee = require('../models/employee');

function putUpdateEmployee(req, res) {
    const employeeId = req.params.employee_id;
    Employee.findByIdAndUpdate(employeeId, {
        name: req.body.name,
        quantity: req.body.quantity
    })
        .then(employee => {
            res.json(employee);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
}
module.exports = putUpdateEmployee;