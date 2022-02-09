import React, { FC } from 'react';
import Spinner from './UI/Spinner';
import 'styles/components/Button.scss';

interface IButtonProps {
  title: string,
  loading?: boolean,
  disabled?: boolean,
  onClickHandler: () => void,
}

const Button:FC<IButtonProps> = ({
  title, loading = false, disabled = false, onClickHandler,
}) => {
  return (
    <button type="submit" onClick={onClickHandler} disabled={disabled} className={`button ${disabled && 'button_disabled'}`}>
      {loading ? <Spinner /> : title}
    </button>
  );
};

export default Button;
