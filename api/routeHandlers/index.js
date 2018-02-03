/* eslint global-require: "off" */
module.exports = {
    getAllEmployeesHandler: require('./getAllEmployeesHandler'),
    getEmployeeById: require('./getEmployeeById'),
    putUpdateEmployee: require('./putUpdateEmployee'),
    deleteEmployeeById: require('./deleteEmployeeById'),
    postCreateEmployee: require('./postCreateEmployee')
};