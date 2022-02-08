import React, {
  FC, HTMLInputTypeAttribute,
} from 'react';

import 'styles/components/Input.scss';

interface InputProps {
  type?: HTMLInputTypeAttribute,
  label: string,
  tip?: string,
  valid?: boolean,
  name: string,
  value: string,
  setValue: (e: any) => void,
  onBlur?: () => void,
  isDirty?: boolean,
}

const InputInner: FC<InputProps> = ({
  type = 'text', label, tip, valid = true, name, value, setValue, onBlur, isDirty = false,
}) => {
  return (
    <div className="input">
      <div className="input__header">
        <span className={`input__label ${(!valid && isDirty) && 'input__label_error'}`}>{label}</span>
        {tip && <span className="input__tip">{tip}</span>}
      </div>
      <input value={value} onChange={setValue} onBlur={onBlur} name={name} className={(!valid && isDirty) ? 'input_error' : ''} type={type} />
    </div>
  );
};

const Input = React.memo(InputInner);
export default Input;
