import React from 'react';
import { AppBar as AppBarMUI, Toolbar, IconButton, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  onClickMenu: () => void;
}

const AppBar = ({ onClickMenu }: Props) => {
  return (
    <Box display="flex">
      <AppBarMUI position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClickMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBarMUI>
    </Box>
  );
};

export default AppBar;
