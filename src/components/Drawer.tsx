import React, { useContext } from 'react';
import { Drawer as DrawerMUI } from '@material-ui/core';
import styled from 'styled-components';
import ListItemLink from './ListItemLink';
import { routes } from '../route/path';
import DrawerContext from './useContext/DrawerContext';

const MenuContainer = styled.div`
  width: 250px;
`;

const Drawer = () => {
  const { open, setOpen } = useContext(DrawerContext);

  return (
    <DrawerMUI anchor="left" open={open} onClose={() => setOpen(false)}>
      <MenuContainer>
        <ListItemLink routes={routes} onSelectedRoute={() => setOpen(false)} />
      </MenuContainer>
    </DrawerMUI>
  );
};

export default Drawer;
