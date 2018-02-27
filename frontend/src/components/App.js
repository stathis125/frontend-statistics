import React, { Component } from 'react';
import Grommet from 'grommet';
import { lowerCase } from 'lodash';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'grommet/grommet.min.css';
import EmployeesList from './EmployeesList';
import Header from './Header';
import { fetchEmployees } from '../lib/httpClient';

let initialList = [];
class Home extends Component {
  constructor(props) {
    super(props);
    this.filterEmployees = this.filterEmployees.bind(this);
    this.state = {};
  }
  componentDidMount() {
    fetchEmployees().then(response => {
      initialList = response.data;
      this.setState({ employees: response.data });
    })
    .catch(console.error);
  }

  filterEmployees(event) {
    const query = event.target.value;
    const filteredEmployees = initialList.filter(employee =>
      lowerCase(employee.name).includes(lowerCase(query)))

    this.setState({employees: filteredEmployees });
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
const skata = () => (
  <div>
    skata
  </div>
)

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/skata" component={skata}/>
    </Switch>
  </BrowserRouter>
)

export default App;

