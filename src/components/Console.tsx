import React, {
  useEffect, useState, useRef,
} from 'react';

import 'styles/components/Console.scss';
import RequestConsole from './RequestConsole';
import ResponseConsole from './ResponseConsole';

const Console = () => {
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
        setClientWidth={setClientWidth}
        clientWidth={clientWidth}
        setLeftConsoleWidth={setLeftConsoleWidth}
      />
      <div onMouseDown={onMouseHoldDown} onKeyDown={() => {}} role="button" tabIndex={-4} className="console__kebab">
        {[1, 2, 3].map((item) => <div className="console__kebab-item" key={item} />)}
      </div>
      <ResponseConsole leftPaneWidth={leftConsoleWidth} />
    </div>
  );
};

export default Console;
