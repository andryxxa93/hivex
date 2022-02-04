import React from 'react';
import Login from '../pages/Login';
import Main from '../pages/Main';

export enum RouteNames {
  LOGIN = '/login',
  MAIN = '/'
}

export interface IRoute {
  path: string,
  component: React.ComponentType,
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN, component: Login,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN, component: Main,
  },
];
