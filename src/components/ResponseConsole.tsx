import React, { FC } from 'react';

const ResponseConsole:FC<{leftPaneWidth?: string}> = ({ leftPaneWidth }) => {
  return (
    <div style={{ width: `calc(100% - ${leftPaneWidth})` }} className="console__response">
      <span className="console__response-title">Ответ:</span>
      <div className="console__response-content">
        request
      </div>
    </div>
  );
};

export default ResponseConsole;
