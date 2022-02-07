import React, {
  FC, HTMLInputTypeAttribute, useState,
} from 'react';

import 'styles/components/Input.scss';

interface InputProps {
  type?: HTMLInputTypeAttribute,
  label: string,
  tip?: string,
  valid?: boolean
}

const Input: FC<InputProps> = ({
  type = 'text', label, tip, valid = true,
}) => {
  const [value, setValue] = useState('');
  return (
    <div className="input">
      <div className="input__header">
        <span className={`input__label ${!valid && 'input__label_error'}`}>{label}</span>
        {tip && <span className="input__tip">{tip}</span>}
      </div>
      <input className={valid ? '' : 'input_error'} name="input" type={type} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Input;
