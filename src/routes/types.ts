import React from 'react';

export enum RouteNames {
  LOGIN = '/login',
  MAIN = '/'
}

export interface IRoute {
  path: string,
  component: React.ComponentType,
}
