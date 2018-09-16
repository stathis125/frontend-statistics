const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routeHandlers = require('./routeHandlers');

app.use(express.static(path.join(__dirname, '../frontend/build')));
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.Promise = require('bluebird');

mongoose.connect(process.env.MONGODB_URI);
app.get('/', (_, res) => res.sendFile(path.join(__dirname, '../frontend/build', 'index.html')));
app.get('/api', routeHandlers.getAllEmployeesHandler);
app.get('/api/:id', routeHandlers.getEmployeeById);
app.put('/api/:id', routeHandlers.putUpdateEmployee);
app.delete('/api/:id', routeHandlers.deleteEmployeeById);
app.post('/api', routeHandlers.postCreateEmployee);
app.listen(port, () => {
    console.log('Example app listening on port ', port);
    console.log('Mongo', process.env.MONGODB_URI);
});
