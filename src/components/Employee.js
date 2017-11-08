import React from 'react';
import {
  Box,
  Card,
  Anchor
} from 'grommet';
import 'grommet/grommet.min.css';

const Employee = () => (
  <Box>
    <Card 
      thumbnail='/img/carousel-1.png'
      label='Empoyee something'
      heading='Something else'
      description='Sample description providing more details.'
      link={<Anchor 
        href='#'
        label='edit' />}
    />
  </Box>
);

export default Employee;
