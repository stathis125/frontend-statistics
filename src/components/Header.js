import React from 'react';
import {
  Header,
  Title,
  Search,
  Box
} from 'grommet';

const filterEmployees = (event) => {
  console.log(event.target.value);
  
};

const AppHeader = () => (
  <Box
    align='center'>
    <Header>
      <Title>
        Sample Title 2
      </Title>
    </Header>

    <Box
      size='large'>
      <Search
        placeHolder='Search Employee'
        inline
        onDOMChange={filterEmployees}
        fill />
    </Box>

  </Box>
);


export default AppHeader;
