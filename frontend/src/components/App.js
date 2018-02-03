import React, { Component } from 'react';
import Grommet from 'grommet';
import { lowerCase } from 'lodash';
import 'grommet/grommet.min.css';
import EmployeesList from './EmployeesList';
import Header from './Header';

import { fetchEmployees } from '../lib/httpClient';

class App extends Component {
  constructor(props) {
    super(props);
    this.filterEmployees = this.filterEmployees.bind(this);
    this.state = { };
  }
  componentDidMount() {
    fetchEmployees().then(response => { 
      this.setState({ employees: response.data });
    })
  }

  filterEmployees(event) {
    const query = event.target.value;
    this.setState({
      employees: this.state.employees.filter(employee =>
        lowerCase(employee.name).includes(lowerCase(query)))
    });
  }
  render() {
    return (
      <Grommet.App>
        <Header filterEmployees={this.filterEmployees} />
        {this.state.employees && <EmployeesList employees={this.state.employees} />}
      </Grommet.App>
    );
  }
}

export default App;