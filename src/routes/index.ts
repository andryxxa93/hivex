import Login from 'pages/Login';
import Main from 'pages/Main';
import { IRoute, RouteNames } from './types';

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    component: Login,
    children: [
      {
        path: RouteNames.REDIRECT, component: Main,
      },
    ],
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN,
    component: Main,
    children: [
      {
        path: RouteNames.REDIRECT, component: Login,
      },
    ],
  },
];
