import React from 'react';
import {
	Box,
	Card,
	Anchor,
	Columns,
	Button
} from 'grommet';
import 'grommet/grommet.min.css';
import Edit from 'grommet/components/icons/base/Edit';
import Trash from 'grommet/components/icons/base/Trash';


const EmployeeCard = ({ name, job, id, deleteEmployee }) => (
	<Box
		pad="small"
		align="center"
	>
		<Card
			thumbnail='http://grommet.io/img/carousel-1.png'
			label={`Name: ${name}`}
			heading={`Job: ${job}`}
			description='Decent description for content'
			link={
				<div>
					<Button
						icon={<Edit />}
            href={`/edit/${id}`}
					/>
					<Button
						icon={<Trash />}
						onClick={() => deleteEmployee(id)}
					/>
				</div>}
			/>
		</Box>
);

const EmployeesList = ({ employees, deleteEmployeById }) => (
	<Box pad='large'>
		<Box justify="center" direction="row" wrap>
			{employees.map((employee, i) =>
				<EmployeeCard
					key={`${i}_${employee._id}`}
					id={employee._id}
					name={employee.name}
					job={employee.job}
					deleteEmployee={deleteEmployeById}
				/>)
			}
		</Box>
	</Box>
);

export default EmployeesList;
