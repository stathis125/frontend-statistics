const Employee = require('../models/employee');

function deleteEmployeeById(req, res) {
    const employeeId = req.params.employee_id;
    Employee.findByIdAndRemove(employeeId)
        .then(employee => {
            res.json(employee);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
}
module.exports = deleteEmployeeById;