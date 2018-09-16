const Employee = require('../models/employee');

function putUpdateEmployee(req, res) {
    const employeeId = req.params.id;
    Employee.findByIdAndUpdate(employeeId, {
        name: req.body.name,
        age: req.body.age,
        job: req.body.job,
        description: req.body.description,
        avatar: req.body.avatar
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
