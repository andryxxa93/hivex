import React from 'react';
import useTypedSelector from 'hooks/useTypedSelector';
import useOpenFullScreen from 'hooks/useFullScreen';
import useActions from 'hooks/useActions';
import AccountInfo from './UI/AccountInfo';
import Logo from './UI/Logo';
import Logout from './UI/Logout';
import Sizer from './UI/Sizer';
import Title from './UI/Title';

import 'styles/components/Header.scss';

const Header = () => {
  const { logout } = useActions();
  const { user } = useTypedSelector((state) => state.auth);
  const { fullScreen, openFullScreen } = useOpenFullScreen();
  return (
    <div className="header">
      <div className="header__left-side">
        <Logo />
        <Title size="small" />
      </div>
      <div className="header__right-side">
        <AccountInfo user={user} />
        <Logout logout={logout} />
        <Sizer fullScreen={fullScreen} changeScreenSize={openFullScreen} />
      </div>
    </div>
  );
};

export default Header;
