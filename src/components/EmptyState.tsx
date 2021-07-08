import React from 'react';
import { ListItem as ListItemMUI, ListItemText } from '@material-ui/core';
import styled from 'styled-components';

const ListItem = styled(ListItemMUI)`
  text-align: center;
`;
const EmptyState = ({ label }: { label: string }) => {
  return (
    <ListItem button>
      <ListItemText>{label}</ListItemText>
    </ListItem>
  );
};

export default EmptyState;
