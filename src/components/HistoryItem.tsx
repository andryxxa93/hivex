import useComponentVisible from 'hooks/useOutSideClickHook';
import React from 'react';
import 'styles/components/HistoryItem.scss';

const HistoryItemInner = () => {
  const {
    ref, menuRef, isComponentVisible, setIsComponentVisible,
  } = useComponentVisible(false);
  const setDropdownVisibleHandler = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  return (
    <div className="history-item">
      <div className="history-item__status" />
      <div className="history-item__title">
        title
      </div>
      <div ref={menuRef} role="button" tabIndex={-2} onKeyDown={() => setDropdownVisibleHandler()} onClick={() => setDropdownVisibleHandler()} className="history-item__menu">
        {[1, 2, 3].map((item) => <div className="history-item__menu-item" key={item} />)}
      </div>
      {isComponentVisible && (
      <div ref={ref} className="history-item__dropdown">
        <div className="history-item__dropdown-item">Выполнить</div>
        <div className="history-item__dropdown-item">Скопировать</div>
        <div className="history-item__dropdown-item">Удалить</div>
      </div>
      )}
    </div>
  );
};

const HistoryItem = React.memo(HistoryItemInner);
export default HistoryItem;
