import React, { FC } from 'react';
import Form from 'components/Form';

import 'styles/pages/Login.scss';
import useTypedSelector from 'hooks/useTypedSelector';
import useActions from 'hooks/useActions';

const Login: FC = () => {
  const { isLoading, error } = useTypedSelector((state) => state.auth);
  const { login } = useActions();
  const onSubmit = (userLogin: string, password: string, sublogin?: string) => {
    login(userLogin, password, sublogin);
  };
  return (
    <div className="login">
      <img className="login__logo" src="./LOGO.png" alt="logo" />
      <Form onSubmitHandler={onSubmit} isLoading={isLoading} error={error} />
      <a href="https://github.com/andryxxa93" className="login__info">https://github.com/andryxxa93</a>
    </div>
  );
};

export default Login;
