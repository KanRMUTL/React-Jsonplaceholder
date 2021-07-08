import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import SwitchRoute from './route/SwitchRoute';
import { DrawerProvider } from './components/useContext/DrawerContext';
import Drawer from './components/Drawer';
import AppBar from './components/AppBar';
import { useTheme, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
function App() {
  const [open, setOpen] = useState(false);
  const muiTheme = useTheme();

  return (
    <StylesProvider>
      <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <DrawerProvider value={{ open, setOpen: setOpen }}>
            <AppBar onClickMenu={() => setOpen(true)} />
            <Drawer />
            <Box height={100} display="flex">
              <SwitchRoute />
            </Box>
          </DrawerProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
