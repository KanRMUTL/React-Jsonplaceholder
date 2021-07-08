import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Route } from '../route/path';
import { Link, useLocation } from 'react-router-dom';
interface Props {
  routes: Route[];
  onSelectedRoute?: () => void;
}
export default function ListItemLink({ routes, onSelectedRoute }: Props) {
  let { pathname } = useLocation();
  return (
    <List component="nav">
      {routes.map(({ path, label }, index) => (
        <ListItem button key={index} component={Link} to={path} onClick={onSelectedRoute} selected={path === pathname}>
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  );
}
