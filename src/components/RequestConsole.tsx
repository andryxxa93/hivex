import React, {
  FC, createRef, useEffect, SetStateAction, Dispatch,
} from 'react';

interface RequestConsoleProps {
  setLeftConsoleWidth: Dispatch<SetStateAction<string>>
  clientWidth: number | null,
  setClientWidth: Dispatch<SetStateAction<number | null>>
}

const RequestConsole:FC<RequestConsoleProps> = (
  { setLeftConsoleWidth, clientWidth, setClientWidth },
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

  return (
    <div ref={leftConsoleRef} className="console__request">
      <span className="console__request-title">Запрос:</span>
      <div className="console__request-content">
        request
      </div>
    </div>
  );
};

export default RequestConsole;
