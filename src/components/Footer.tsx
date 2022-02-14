import React, { FC } from 'react';
import Button from './Button';
import 'styles/components/Footer.scss';
import Link from './UI/Link';

interface FooterProps {
  onClickHandler: () => void,
  onFormatHandler: () => void,
}

const Footer:FC<FooterProps> = ({ onClickHandler, onFormatHandler }) => {
  return (
    <div className="footer">
      <Button onClickHandler={onClickHandler} title="Отправить" />
      <Link href="https://github.com/andryxxa93" />
      <div onClick={onFormatHandler} tabIndex={-5} onKeyDown={() => {}} role="button" className="footer__format-btn">
        <img src="./align-right.svg" alt="icon" />
        <span>
          Форматировать
        </span>
      </div>
    </div>
  );
};

export default Footer;
