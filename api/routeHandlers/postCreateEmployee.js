const Employee = require('../models/employee');

function postCreateEmployee(req, res) {
    Employee.create({
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
            res.status(500).send('Oops something went wrong while saving the employee');
        });
}
module.exports = postCreateEmployee;
