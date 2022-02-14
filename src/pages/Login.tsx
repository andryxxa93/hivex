import React, { FC, useEffect } from 'react';
import Form from 'components/Form';

import 'styles/pages/Login.scss';
import useTypedSelector from 'hooks/useTypedSelector';
import useActions from 'hooks/useActions';
import Link from 'components/UI/Link';
import { CookieKey, findCookie } from 'utils/cookieFunctions';

const Login: FC = () => {
  const { isLoading, error } = useTypedSelector((state) => state.auth);
  const { login, setAuth } = useActions();
  const onSubmit = (userLogin: string, password: string, sublogin?: string) => {
    login(userLogin, password, sublogin);
  };
  useEffect(() => {
    if (findCookie(CookieKey.SENDSAY_SESSION_KEY)) {
      setAuth(true);
    }
  }, []);
  return (
    <div className="login">
      <img className="login__logo" src="./LOGO.png" alt="logo" />
      <Form onSubmitHandler={onSubmit} isLoading={isLoading} error={error} />
      <Link href="https://github.com/andryxxa93" />
    </div>
  );
};

export default Login;
