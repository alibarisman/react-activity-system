import React from 'react';

const Forms = React.lazy(() => import('./views/Forms/Forms'));
const Tables = React.lazy(() => import('./views/Tables'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/forms', name: 'Forms', component: Forms },
  { path: '/tables', name: 'Tables', component: Tables },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
