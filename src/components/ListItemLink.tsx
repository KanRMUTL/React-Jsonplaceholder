import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Route } from '../route/path';
import { Link } from 'react-router-dom';
interface Props {
  routes: Route[];
}
export default function ListItemLink({ routes }: Props) {
  return (
    <List component="nav">
      {routes.map(({ path, label }, index) => (
        <ListItem button key={index}>
          <ListItemText>
            <Typography component={Link} to={path}>
              {label}
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
