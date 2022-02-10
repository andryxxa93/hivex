import React from 'react';
import 'styles/components/HistoryRow.scss';
import HistoryItem from './HistoryItem';

const HistoryRow = () => {
  return (
    <div className="history">
      <div className="history__content">
        <HistoryItem />
      </div>
      <div className="history__cleaner">
        <img src="./cleaner.svg" alt="cross" />
      </div>
    </div>
  );
};

export default HistoryRow;
