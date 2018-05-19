import React from 'react';
import {
	Header,
	Title,
	Search,
	Box,
	Button
} from 'grommet';
import Add from 'grommet/components/icons/base/Add';

const AppHeader = ({filterEmployees}) => (
	<Box
		align='center'>
		<Header>
			<Title>
				Stath-istics
			</Title>
		</Header>

		<Box
			direction="row"
			size='large'>
			<Search
				placeHolder='Search Employee'
				inline
				onDOMChange={filterEmployees}
				fill />
			<Button icon={<Add />}
				href='/add' />
		</Box>

	</Box>
);


export default AppHeader;
