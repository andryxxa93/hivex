import React, { FC } from 'react';
import { HistoryObject } from 'store/reducers/console/types';
import HistoryItem from './HistoryItem';
import 'styles/components/HistoryRow.scss';

interface HistoryRowProps {
  history: HistoryObject[],
}

const HistoryRow:FC<HistoryRowProps> = ({ history }) => {
  return (
    <div className="history">
      <div className="history__content">
        {history.map((item) => {
          return <HistoryItem key={item.requestName} request={item} />;
        })}
      </div>
      <div className="history__cleaner">
        <img src="./cleaner.svg" alt="cross" />
      </div>
    </div>
  );
};

export default HistoryRow;
