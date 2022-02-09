import { useCallback, useState } from 'react';
import useValidation from './useValidation';

const useInput = (initialValue: any, validations: any) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, [value]);

  const onBlur = useCallback(() => {
    setIsDirty(true);
  }, []);

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

export default useInput;
