import React, { Dispatch, FC, SetStateAction } from 'react';
import jsonBeautifier from 'utils/jsonBeautifier';
import Button from './Button';
import 'styles/components/Footer.scss';
import Link from './UI/Link';

interface FooterProps {
  onClickHandler: () => void,
  setRequestContent: Dispatch<SetStateAction<string>>,
}

const Footer:FC<FooterProps> = ({ onClickHandler, setRequestContent }) => {
  const onFormatHandler = () => {
    setRequestContent((prev) => jsonBeautifier(JSON.parse(prev)));
  };
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
