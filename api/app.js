const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routeHandlers = require('./routeHandlers');

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/statistics');
app.get('/api', routeHandlers.getAllEmployeesHandler);
app.get('/api/:id', routeHandlers.getEmployeeById);
app.put('/api/:id', routeHandlers.putUpdateEmployee);
app.delete('/api/:id', routeHandlers.deleteEmployeeById);
app.post('/api', routeHandlers.postCreateEmployee);
app.listen(port, () => {
    console.log('Example app listening on port ', port);
});
