import React from 'react';
import {
  Box,
  Card,
  Anchor,
  Columns
} from 'grommet';
import 'grommet/grommet.min.css';

const EmployeeCard = ({name}) => (
  <Box>
    <Card
      thumbnail='http://grommet.io/img/carousel-1.png'
      label={name}
      heading='Something else'
      description='Sample description providing more details.'
      link={<Anchor
        href='#'
        label='edit' />}
    />
  </Box>
);
const namesArray = ['poutsa', 'peos', 'falos', 'mitsos', 'tsoutsouna'];
const Employee = () => (
  <Box pad='large'>
    <Columns>
      {namesArray.map((name, i) => <EmployeeCard key={`${i}_${name}`} name={name} />)}
    </Columns>
  </Box>
);

export default Employee;
