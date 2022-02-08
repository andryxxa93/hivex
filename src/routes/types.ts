import React from 'react';

export enum RouteNames {
  LOGIN = '/login',
  MAIN = '/',
  REDIRECT = '*'
}

export interface IRoute {
  path: string,
  component: React.ComponentType,
  children?: IRoute[]
}
