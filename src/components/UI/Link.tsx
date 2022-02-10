import React, { FC } from 'react';
import 'styles/components/Link.scss';

const Link:FC<{href: string}> = ({ href }) => {
  return (
    <a href={href} className="link">{`@${href.replace('https://github.com/', '')}`}</a>
  );
};

export default Link;
