const Employee = require('../models/employee');

function getAllEmployeesHandler(req, res) {
    Employee.find({})
        .then(activities => res.json(activities))
        .catch(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
}

module.exports = getAllEmployeesHandler;