import { useEffect, useState } from 'react';

const cyrillic = /[а-яА-ЯЁё]/gm;

const useValidation = (value: any, validations: any) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [latinError, setLatinError] = useState(false);
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          if (value) {
            setIsEmpty(false);
          } else {
            setIsEmpty(true);
          }
          break;
        case 'isLatin':
          if (cyrillic.test(String(value)
            .toLowerCase())) {
            setLatinError(true);
          } else {
            setLatinError(false);
          }
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || latinError) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [latinError, isEmpty]);

  return {
    isEmpty,
    isValid,
    latinError,
  };
};

export default useValidation;
