import React from 'react';
import { Route, Routes } from 'react-router-dom';
import useTypedSelector from 'hooks/useTypedSelector';
import { privateRoutes, publicRoutes } from 'routes';

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  return (
    isAuth
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
