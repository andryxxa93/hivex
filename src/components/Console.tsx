import useTypedSelector from 'hooks/useTypedSelector';
import React, {
  useEffect, useState, useRef, FC,
} from 'react';
import { IError, SetRequestAction } from 'store/reducers/console/types';

import 'styles/components/Console.scss';
import RequestConsole from './RequestConsole';
import ResponseConsole from './ResponseConsole';

interface IConsoleProps {
  setRequestContent: (request: string) => SetRequestAction,
  requestContent: string,
  error: IError,
}

const Console:FC<IConsoleProps> = ({ setRequestContent, requestContent, error }) => {
  const { response } = useTypedSelector((state) => state.console);
  const [clientWidth, setClientWidth] = useState<number | null>(null);
  const [leftConsoleWidth, setLeftConsoleWidth] = useState<string>('0px');
  const middlePosition = useRef<number | null>(null);

  const onMouseHoldDown = (e: any) => {
    middlePosition.current = e.clientX;
  };

  const onMouseHoldUp = () => {
    middlePosition.current = null;
  };

  const onMouseHoldMove = (e: any) => {
    if (!middlePosition.current || !clientWidth) {
      return;
    }
    setClientWidth(clientWidth + e.clientX - middlePosition.current);
    middlePosition.current = e.clientX;
  };

  useEffect(() => {
    document.addEventListener('mouseup', onMouseHoldUp);
    document.addEventListener('mousemove', onMouseHoldMove);

    return () => {
      document.removeEventListener('mouseup', onMouseHoldUp);
      document.removeEventListener('mousemove', onMouseHoldMove);
    };
  });

  return (
    <div className="console">
      <RequestConsole
        error={error.request}
        setClientWidth={setClientWidth}
        clientWidth={clientWidth}
        setLeftConsoleWidth={setLeftConsoleWidth}
        setRequestContent={setRequestContent}
        requestContent={requestContent}
      />
      <div onMouseDown={onMouseHoldDown} onKeyDown={() => {}} role="button" tabIndex={-4} className="console__kebab">
        {[1, 2, 3].map((item) => <div className="console__kebab-item" key={item} />)}
      </div>
      <ResponseConsole
        error={error.response}
        response={response}
        leftPaneWidth={leftConsoleWidth}
      />
    </div>
  );
};

export default Console;
