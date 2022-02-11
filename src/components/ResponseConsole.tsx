import React, { FC } from 'react';
import jsonBeautifier from 'utils/jsonBeautifier';

interface ResponseConsoleProps {
  leftPaneWidth: string,
  response: string,
}

const ResponseConsole:FC<ResponseConsoleProps> = ({ leftPaneWidth, response }) => {
  const beautifiedResponse = jsonBeautifier(response);
  return (
    <div style={{ width: `calc(100% - ${leftPaneWidth})` }} className="console__response">
      <span className="console__response-title">Ответ:</span>
      <textarea value={response ? beautifiedResponse : ''} readOnly className="console__response-content" />
    </div>
  );
};

export default ResponseConsole;
