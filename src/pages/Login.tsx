import React, { FC } from 'react';
import Form from 'components/Form';

import 'styles/pages/Login.scss';

const Login: FC = () => (
  <div className="login">
    <img className="login__logo" src="./LOGO.png" alt="logo" />
    <Form title="API-консолька" />
    <p className="login__info">https://github.com/andryxxa93</p>
  </div>
);

export default Login;
