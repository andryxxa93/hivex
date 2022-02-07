import React, { FC } from 'react';
import Input from './Input';
import Button from './Button';
import 'styles/components/Form.scss';

interface IFormProps {
  title: string,
  error?: string
}

const Form: FC<IFormProps> = ({ title, error }) => {
  return (
    <div className="form">
      <h3 className="form__title">
        {title}
      </h3>
      {error && (
      <div className="form__error">
        <div className="form__error-title">
          <img src="./meh.svg" alt="smile" />
          <span>Вход не вышел</span>
        </div>
        <p>{error}</p>
      </div>
      )}
      <form>
        <Input type="text" label="Логин" />
        <Input type="text" label="Сублогин" tip="Опционально" />
        <Input type="password" label="Пароль" />
      </form>
      <Button title="Войти" />
    </div>

  );
};

export default Form;
