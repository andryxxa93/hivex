import React, { FC } from 'react';
import 'styles/components/Sizer.scss';

interface ISizer {
  fullScreen: boolean,
  changeScreenSize: () => void,
}

const Sizer: FC<ISizer> = ({ fullScreen, changeScreenSize }) => {
  return (
    fullScreen
      ? (
        <div role="button" tabIndex={-1} onKeyDown={changeScreenSize} onClick={changeScreenSize}>
          <img className="sizer" src="./smallWindow.svg" alt="full window sizer" />
        </div>

      )
      : (
        <div role="button" tabIndex={-1} onKeyDown={changeScreenSize} onClick={changeScreenSize}>
          <img className="sizer" src="./fullWindow.svg" alt="full window sizer" />
        </div>
      )
  );
};

export default Sizer;
