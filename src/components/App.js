import React, { Component } from 'react';
import Grommet from 'grommet';
import 'grommet/grommet.min.css';
import EmployeesList from './EmployeesList';
import Header from './Header';
import employees from '../fixture/employees';

class App extends Component {
  render() {
    return (
      <Grommet.App>
        <Header />
        <EmployeesList employees={employees} />
      </Grommet.App>
    );
  }
}

export default App;