const Employee = require('../models/employee');

function getEmployeeById(req, res) {
  const employeeid = req.params.id;
  Employee.findById(employeeid)
    .then(employee => {
      if (employee) {
        res.json(employee);
        return;
      }
      res.status(404).send('Employee not found');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err.message);
    });
}
module.exports = getEmployeeById;
