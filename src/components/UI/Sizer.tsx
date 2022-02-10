import React, { FC } from 'react';
import 'styles/components/Sizer.scss';
import fullScreenIcon from 'svg/fullScreenIcon';
import smallScreenIcon from 'svg/smallScreenIcon';

interface ISizer {
  fullScreen: boolean,
  changeScreenSize: () => void,
}

const Sizer: FC<ISizer> = ({ fullScreen, changeScreenSize }) => {
  return (
    fullScreen
      ? (
        <div role="button" className="sizer" tabIndex={-1} onKeyDown={changeScreenSize} onClick={changeScreenSize}>
          {fullScreenIcon}
        </div>
      )
      : (
        <div role="button" className="sizer" tabIndex={-1} onKeyDown={changeScreenSize} onClick={changeScreenSize}>
          {smallScreenIcon}
        </div>
      )
  );
};

export default Sizer;
