import React from 'react';
import Button from './Button';
import 'styles/components/Footer.scss';
import Link from './UI/Link';

const Footer = () => {
  return (
    <div className="footer">
      <Button onClickHandler={() => {}} title="Отправить" />
      <Link href="https://github.com/andryxxa93" />
      <div className="footer__format-btn">
        <img src="./align-right.svg" alt="icon" />
        <span>
          Форматировать
        </span>
      </div>
    </div>
  );
};

export default Footer;
