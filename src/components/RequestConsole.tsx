import React, {
  FC, createRef, useEffect, SetStateAction, Dispatch, ChangeEvent,
} from 'react';
import { SetRequestAction } from 'store/reducers/console/types';

interface RequestConsoleProps {
  setLeftConsoleWidth: Dispatch<SetStateAction<string>>
  clientWidth: number | null,
  setClientWidth: Dispatch<SetStateAction<number | null>>,
  setRequestContent: (request: string) => SetRequestAction,
  requestContent: string,
  error: boolean,
}

const RequestConsole:FC<RequestConsoleProps> = (
  {
    setLeftConsoleWidth, clientWidth, setClientWidth, setRequestContent, requestContent, error,
  },
) => {
  const leftConsoleRef = createRef<HTMLDivElement>();
  useEffect(() => {
    if (leftConsoleRef?.current) {
      if (!clientWidth) {
        setClientWidth(leftConsoleRef.current.clientWidth);
        return;
      }

      leftConsoleRef.current.style.width = `${clientWidth}px`;
      setLeftConsoleWidth(`${clientWidth}px`);
    }
  }, [clientWidth]);

  const onRequestChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRequestContent(e.target.value);
  };

  return (
    <div ref={leftConsoleRef} className="console__request">
      <span className="console__request-title">Запрос:</span>
      <textarea onChange={onRequestChange} value={requestContent} className={`console__request-content  ${error ? 'console__request-content_error' : ''}`} />
    </div>
  );
};

export default RequestConsole;
