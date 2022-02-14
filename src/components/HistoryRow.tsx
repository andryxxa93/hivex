import React, { FC } from 'react';
import { HistoryObject } from 'store/reducers/console/types';
import HistoryItem from './HistoryItem';
import 'styles/components/HistoryRow.scss';

interface HistoryRowProps {
  history: HistoryObject[],
  clearHistory: (item: string) => void,
  copyHandler: (request: string) => void,
  repeatRequestHandler: (request: string) => void,
}

const HistoryRow:FC<HistoryRowProps> = ({
  history, clearHistory, copyHandler, repeatRequestHandler,
}) => {
  return (
    <div className="history">
      <div className="history__content">
        {history.map((item) => {
          return (
            <HistoryItem
              onRepeat={() => repeatRequestHandler(item.request)}
              onCopy={() => copyHandler(item.request)}
              onDelete={() => clearHistory(item.requestName)}
              key={item.requestName}
              request={item}
            />
          );
        })}
      </div>
      <div onClick={() => clearHistory('all')} onKeyDown={() => {}} tabIndex={-6} role="button" className="history__cleaner">
        <img src="./cleaner.svg" alt="cross" />
      </div>
    </div>
  );
};

export default HistoryRow;
