import React, { Component } from 'react';
import Grommet from 'grommet';
import { lowerCase } from 'lodash';
import 'grommet/grommet.min.css';
import EmployeesList from './EmployeesList';
import Header from './Header';
import { fetchEmployees, deleteEmployee } from '../lib/httpClient';

let initialList = [];

class Home extends Component {
	constructor(props) {
		super(props);
		this.filterEmployees = this.filterEmployees.bind(this);
		this.deleteEmployeById = this.deleteEmployeById.bind(this);
		this.state = {
			employees: []
		};
	}
	componentDidMount() {
		fetchEmployees().then(response => {
			initialList = response.data;
			this.setState({ employees: response.data });
		})
			.catch(console.error);
	}
	deleteEmployeById(id) {
		this.setState({
			employees: this.state.employees.filter(e => e._id !== id)
		})
		deleteEmployee(id)
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
				<Grommet.Box align="stretch">
					{
						this.state.employees && <EmployeesList
						employees={this.state.employees}
						deleteEmployeById={this.deleteEmployeById} />
					}
				</Grommet.Box>
			</Grommet.App>
		);
	}
}

export default Home;
