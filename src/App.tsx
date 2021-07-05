import React from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './route/path';
import ListItemLink from './components/ListItemLink';
import SwitchRoute from './route/SwitchRoute';
function App() {
  return (
    <BrowserRouter>
      <Box height={100} display="flex">
        <Box flexGrow={1} display={{ xs: 'none', sm: 'block' }}>
          <ListItemLink routes={routes} />
        </Box>
        <Box flexGrow={9}>
          <SwitchRoute />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
