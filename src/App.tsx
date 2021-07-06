import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import SwitchRoute from './route/SwitchRoute';
import { DrawerProvider } from './components/useContext/DrawerContext';
import Drawer from './components/Drawer';
import AppBar from './components/AppBar';
function App() {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <DrawerProvider value={{ open, setOpen: setOpen }}>
        <AppBar onClickMenu={() => setOpen(true)} />
        <Drawer />
        <Box height={100} display="flex">
          <SwitchRoute />
        </Box>
      </DrawerProvider>
    </BrowserRouter>
  );
}

export default App;
