import { createContext } from 'react';

const DrawerContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
});

export const DrawerProvider = DrawerContext.Provider;
export default DrawerContext;
