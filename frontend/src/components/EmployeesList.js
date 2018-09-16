import React from 'react';
import {
	Box,
	Card,
	Button,
	Image,
	Title,
	Label
} from 'grommet';
import 'grommet/grommet.min.css';
import Edit from 'grommet/components/icons/base/Edit';
import Trash from 'grommet/components/icons/base/Trash';
import styled from 'styled-components';

const ButtonBox = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const EmployeeCard = ({ avatar, job, age, name, description, id, deleteEmployee }) => (
	<Box
		pad="medium"
		align="start"
	>
		<Image src={avatar} size="small"/>
		<Box pad={{vertical: "small"}}>
			<Label>
				{name}
			</Label>
			<Title>
				{job}
			</Title>
		</Box>
		<div>
			<Label>
				Age: {age}
			</Label>
		</div>
		<div>
			<Label>
				{description}
			</Label>
		</div>
		<ButtonBox>
			<Button
				icon={<Edit />}
				href={`/edit/${id}`}
			/>
			<Button
				icon={<Trash />}
				onClick={() => deleteEmployee(id)}
			/>
		</ButtonBox>
	</Box>
);

const EmployeesList = ({ employees, deleteEmployeById }) => (
	<Box pad='large'>
		<Box justify="center" direction="row" wrap>
			{employees.map((employee, i) =>
				<EmployeeCard
					key={`${i}_${employee._id}`}
					id={employee._id}
					deleteEmployee={deleteEmployeById}
					{...employee}
				/>)
			}
		</Box>
	</Box>
);

export default EmployeesList;
