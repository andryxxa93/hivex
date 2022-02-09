import React, { FC } from 'react';
import 'styles/components/Title.scss';

const Title:FC<{size: 'small' | 'big'}> = ({ size }) => {
  return (
    <h3 className={`title title_${size}`}>API-консолька</h3>
  );
};

export default Title;
