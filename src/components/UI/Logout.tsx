import React, { FC } from 'react';
import 'styles/components/Logout.scss';

const Logout:FC<{logout: () => void}> = ({ logout }) => {
  return (
    <div className="logout">
      <span>Выйти</span>
      <div role="button" tabIndex={0} onClick={logout} onKeyDown={logout} className="logout__img">
        <img src="./log-out.svg" alt="logout" />
      </div>
    </div>
  );
};

export default Logout;
