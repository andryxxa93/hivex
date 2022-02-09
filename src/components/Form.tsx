import React, { FC } from 'react';
import { ErrorType } from 'store/reducers/auth/types';
import useInput from 'hooks/useInput';
import Input from './Input';
import Button from './Button';
import 'styles/components/Form.scss';

interface IFormProps {
  title: string,
  error?: ErrorType,
  isLoading?: boolean,
  onSubmitHandler: (userLogin: string, password: string, subLogin: string) => void
}

const Form: FC<IFormProps> = ({
  title, error, isLoading, onSubmitHandler,
}) => {
  const userLogin = useInput('', { isEmpty: true, isLatin: true });
  const subLogin = useInput('', { isLatin: true });
  const password = useInput('', { isEmpty: true, isLatin: true });
  const buttonDisable = !userLogin.isValid || !password.isValid;
  const onSubmit = () => {
    onSubmitHandler(userLogin.value, password.value, subLogin.value);
  };

  return (
    <div className="form">
      <h3 className="form__title">
        {title}
      </h3>
      {error?.id && (
      <div className="form__error">
        <div className="form__error-title">
          <img src="./meh.svg" alt="smile" />
          <span>Вход не вышел</span>
        </div>
        <p>{`{id:${error.id}, explain:${error.explain}}`}</p>
      </div>
      )}
      <form>
        <Input
          value={userLogin.value.trim()}
          setValue={userLogin.onChange}
          isDirty={userLogin.isDirty}
          valid={userLogin.isValid}
          onBlur={userLogin.onBlur}
          name="login"
          type="text"
          label="Логин"
        />
        <Input
          value={subLogin.value}
          setValue={subLogin.onChange}
          isDirty={subLogin.isDirty}
          valid={subLogin.isValid}
          onBlur={subLogin.onBlur}
          name="sublogin"
          type="text"
          label="Сублогин"
          tip="Опционально"
        />
        <Input
          value={password.value}
          setValue={password.onChange}
          isDirty={password.isDirty}
          valid={password.isValid}
          onBlur={password.onBlur}
          name="password"
          type="password"
          label="Пароль"
        />
      </form>
      <Button onClickHandler={onSubmit} loading={isLoading} title="Войти" disabled={buttonDisable} />
    </div>

  );
};

export default Form;
