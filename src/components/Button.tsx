import React, { FC } from 'react';
import Spinner from './UI/Spinner';
import 'styles/components/Button.scss';

interface IButtonProps {
  title: string,
  loading?: boolean,
  disabled?: boolean,
}

const Button:FC<IButtonProps> = ({ title, loading = false, disabled = false }) => {
  return (
    <div className={`button ${disabled && 'button_disabled'}`}>
      {loading ? <Spinner /> : title}
    </div>
  );
};

export default Button;
