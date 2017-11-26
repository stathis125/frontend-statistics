import React from 'react';
import {
  Box,
  Card,
  Anchor,
  Columns
} from 'grommet';
import 'grommet/grommet.min.css';

const EmployeeCard = ({ name }) => (
  <Box>
    <Card
      thumbnail='http://grommet.io/img/carousel-1.png'
      label={name}
      heading='Something else'
      description='Sample xysopsolia providing more details.'
      link={<Anchor
        href='#'
        label='edit' />}
    />
  </Box>
);

const EmployeesList = ({ employees }) => (
  <Box pad='large'>
    <Columns>
      {employees.map((employee, i) =>
        <EmployeeCard key={`${i}_${employee.name}`} name={employee.name} />)
      }
    </Columns>
  </Box>
);

export default EmployeesList;
