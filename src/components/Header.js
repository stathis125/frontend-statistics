import React from 'react';
import {
  Header,
  Title,
  Box,
  Anchor,
  Menu
} from 'grommet';
import ActionsIcon from 'grommet/components/icons/base/Actions';

const AppHeader = () => {
  return (
    <Header fixed>
      <Title>
        Sample Title 2
      </Title>
      <Box
        flex
        justify='end'
        direction='row'
        responsive={false}>
        <Menu icon={<ActionsIcon />}
          dropAlign={{ 'right': "right" }}>
          <Anchor href='#'
            className='active'>
            First
          </Anchor>
          <Anchor href='#'>
            Second
          </Anchor>
          <Anchor href='#'>
            Third
          </Anchor>
        </Menu>
      </Box>
    </Header>
  );
};

export default AppHeader;