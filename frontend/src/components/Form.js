import React, { Component } from 'react';
import {isEmpty} from 'lodash';
import Grommet from 'grommet'
import CloseIcon from 'grommet/components/icons/base/Close';
import {createEmployee, fetchEmployee, updateEmployee} from '../lib/httpClient.js'

const Form = ({
	handleSubmit,
	handleChange,
	hide,
	name='',
	age='',
	job='',
	isEditPage,
	goBack
}) => (
	<Grommet.Box
	align='center'>
		<Grommet.Toast style={{display: hide && "none"}} status="ok">
			Successfully created
		</Grommet.Toast>
		<Grommet.Form onSubmit={handleSubmit}>
			<Grommet.Header flex justify="between">
				<Grommet.Heading>
					{isEditPage ? 'Edit' : 'Create'}
				</Grommet.Heading>
				<Grommet.Box>
					<Grommet.Button
						icon={<CloseIcon />}
						onClick={goBack}
					/>
				</Grommet.Box>
			</Grommet.Header>
			<Grommet.FormFields>
				<Grommet.FormField label='Employee name'>
					<Grommet.TextInput
						onDOMChange={handleChange}
						name="name"
						value={name}
						required
						type="text"
					placeHolder="Joe Doe"/>
				</Grommet.FormField>

				<Grommet.FormField label='Profession'>
					<Grommet.TextInput
						onDOMChange={handleChange}
						name="job"
						value={job}
						required
						type="text"
					placeHolder="Developer"/>
				</Grommet.FormField>

				<Grommet.FormField label='Age'>
					<Grommet.NumberInput
						onChange={handleChange}
						name="age"
						required
						value={age}
						type="number"
						min={0}
					placeholder="30"/>
				</Grommet.FormField>

			</Grommet.FormFields>
			<Grommet.Footer pad={{"vertical": "medium"}}>
				<Grommet.Button
					label='Submit'
					type={'submit'}
					primary={true}
				/>
			</Grommet.Footer>
		</Grommet.Form>
	</Grommet.Box>
)

class FormContainer extends Component {
	constructor() {
		super()

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

		this.state = {
			name: '',
			job: '',
			age: '',
			hide: true,
			isEditPage: false,
			isSubmitDisabled: true,
			id: null
		}
	}

	async componentDidMount() {
		if (this.props.match.params.id) {
			const employee = await fetchEmployee(this.props.match.params.id)

			this.setState({
				name: employee.data.name,
				job: employee.data.job,
				age: employee.data.age,
				isEditPage: true,
				id: this.props.match.params.id
			})
		}
	}
	handleSubmit(e) {
		e.preventDefault()

		if (this.state.isEditPage) {
			updateEmployee(this.state)
			.then(() => {
				this.setState({hide: false})
				setTimeout(() => this.props.history.push('/'), 2000)
			})
			.catch(console.error)
		} else {
			createEmployee(this.state)
			.then(() => {
				this.setState({hide: false})
				setTimeout(() => this.props.history.push('/'), 2000)
			})
			.catch(console.error)
		}
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}


	render() {

		return (
			<Grommet.App style={{paddingTop: 40}}>
				<Form
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					hide={this.state.hide}
					name={this.state.name}
					job={this.state.job}
					age={this.state.age}
					isEditPage={this.state.isEditPage}
					goBack={() => this.props.history.push('/')}
				/>
			</Grommet.App>
		)
	}
}

export default FormContainer;
