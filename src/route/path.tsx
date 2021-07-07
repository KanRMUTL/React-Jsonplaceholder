export interface Route {
  path: string;
  label: string;
}

const routes: Route[] = [
  {
    path: '/',
    label: 'Movie DB',
  },
  {
    path: '/post',
    label: 'Post',
  },
  {
    path: '/users',
    label: 'User',
  },
];

export { routes };
