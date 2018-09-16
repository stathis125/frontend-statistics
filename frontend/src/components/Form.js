import React from 'react';
import {
	App,
	Box,
	Button,
	Footer,
	Form,
	FormField,
	FormFields,
	Header,
	Heading
} from 'grommet'
import {pathOr} from 'ramda';
import * as Yup from 'yup';
import {withStateHandlers, compose, withProps, lifecycle} from 'recompose';
import {or, isEmpty} from 'ramda';
import {withFormik} from 'formik';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';
import SubmitFooter from './SubmitFooter'
import {createEmployee, fetchEmployee, updateEmployee} from '../lib/httpClient.js'

const Schema = Yup.object().shape({
	name: Yup.string()
	.min(2, 'Must be longer than 2 characters')
	.required('Required'),
	job: Yup.string()
	.min(2, 'Too short')
	.required('Required'),
	avatar: Yup.string()
	.url('Invalid url'),
	age: Yup.number().min(0, 'Must be greater than 0').required('Required')
});

const MyForm = props => (
	<Box
		align='center'>
	<Form onSubmit={props.handleSubmit}>
		<Header flex direction="row">
			<Button
				icon={<LinkPreviousIcon/>}
				onClick={() => props.history.push('/')}
			/>
			<Heading>
				Create
			</Heading>
		</Header>
		<FormFields>

			<FormField error={props.nameError} label='Employee name'>
				<input
					onChange={props.handleChange}
					name="name"
					value={props.values.name}
					required
					type="text"
					placeholder="Employee name"
				/>
			</FormField>

			<FormField error={props.jobError} label='Profession'>
				<input
					onChange={props.handleChange}
					name="job"
					value={props.values.job}
					required
					type="text"
					placeholder="Job title"
				/>
			</FormField>

			<FormField error={props.ageError} label='Age'>
				<input
					onChange={props.handleChange}
					name="age"
					required
					value={props.values.age}
					type="number"
					min={0}
					placeholder="30"
				/>
			</FormField>

			<FormField style={{marginTop: '1.6rem'}} error={props.avatarError} label='Image'>
				<input
					onChange={props.handleChange}
					name="avatar"
					value={props.values.avatar}
					type="url"
					placeholder="Url of an image"
				/>
			</FormField>

			<FormField error={props.descriptionError} label='Description'>
				<textarea
					onChange={props.handleChange}
					name="description"
					value={props.values.description}
					type="text"
					min={0}
					max={100}
					placeholder="Optional description..."
				/>
			</FormField>

		</FormFields>
		<SubmitFooter
			isSubmitting={props.isSubmitting}
			hasErrors={!isEmpty(props.errors)}
			status={props.status}
			failText="Something went wrong"
		/>
	</Form>
</Box>
)

const formEnhancer = withFormik({
	enableReinitialize: true,
	mapPropsToValues: props => ({
		name: props.name || '',
		age: props.age || '',
		job: props.job || '',
		avatar: props.avatar || '',
		description: props.description || ''
	}),
	validationSchema: Schema,
	handleSubmit: async (values, { props, setStatus, setSubmitting }) => {
		try {
			if (props.match.params.id) {
				await updateEmployee(props.match.params.id, values)
				setStatus({success: true})
			} else {
				await createEmployee(values)
				setStatus({success: true})
			}
		} catch (e) {
			console.error(e);
			setStatus({success: false})
		}
		setSubmitting(false);
	}
})

const BasicForm = props => (
	<App style={{paddingTop: 40}}>
		<MyForm {...props}/>
	</App>
);

export default compose(
	withStateHandlers(null, {
		onData: state => data => data
	}),
	lifecycle({
		async componentDidMount() {
			if (this.props.match.params.id) {
				const employee = await fetchEmployee(this.props.match.params.id)
				this.props.onData(employee.data)
			}
		}
	}),
	formEnhancer,
	withProps(props => ({
		nameError: pathOr(null, ['errors', 'name'], props),
		avatarError: pathOr(null, ['errors', 'avatar'], props),
		jobError: pathOr(null, ['errors', 'job'], props),
		ageError: pathOr(null, ['errors', 'age'], props),
		descriptionError: pathOr(null, ['errors', 'description'], props)
	})),
	withProps(props => ({
		hasErrors: !isEmpty(props.errors)
	}))
)(BasicForm);
