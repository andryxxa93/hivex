import React, { FC } from 'react';
import jsonBeautifier from 'utils/jsonBeautifier';

interface ResponseConsoleProps {
  leftPaneWidth: string,
  response: string,
  error: boolean
}

const ResponseConsole:FC<ResponseConsoleProps> = ({ leftPaneWidth, response, error }) => {
  const beautifiedResponse = jsonBeautifier(response);
  return (
    <div style={{ width: `calc(100% - ${leftPaneWidth})` }} className="console__response">
      <span className="console__response-title">Ответ:</span>
      <textarea value={response ? beautifiedResponse : ''} readOnly className={`console__response-content  ${error ? 'console__response-content_error' : ''}`} />
    </div>
  );
};

export default ResponseConsole;
