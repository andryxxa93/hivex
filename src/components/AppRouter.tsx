import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
  const auth = false;

  return (
    auth
      ? (
        <Routes>
          {privateRoutes.map((route) => {
            return <Route key={route.path} path={route.path} element={<route.component />} />;
          })}
        </Routes>
      )
      : (
        <Routes>
          {publicRoutes.map((route) => {
            return <Route key={route.path} path={route.path} element={<route.component />} />;
          })}
        </Routes>
      )
  );
};

export default AppRouter;
