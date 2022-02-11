import React, {
  FC, createRef, useEffect, SetStateAction, Dispatch, ChangeEvent,
} from 'react';

interface RequestConsoleProps {
  setLeftConsoleWidth: Dispatch<SetStateAction<string>>
  clientWidth: number | null,
  setClientWidth: Dispatch<SetStateAction<number | null>>,
  setRequestContent: Dispatch<SetStateAction<string>>,
  requestContent: string
}

const RequestConsole:FC<RequestConsoleProps> = (
  {
    setLeftConsoleWidth, clientWidth, setClientWidth, setRequestContent, requestContent,
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
      <textarea onChange={onRequestChange} value={requestContent} className="console__request-content" />
    </div>
  );
};

export default RequestConsole;
