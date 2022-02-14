import React, { FC, useEffect, useState } from 'react';
import useComponentVisible from 'hooks/useOutSideClickHook';
import { HistoryObject } from 'store/reducers/console/types';
import 'styles/components/HistoryItem.scss';

interface HistoryItemProps {
  request: HistoryObject,
  onDelete: () => void,
  onRepeat: () => void,
  onCopy: () => void,
}

const HistoryItemInner:FC<HistoryItemProps> = ({
  request, onDelete, onRepeat, onCopy,
}) => {
  const [copied, setCopied] = useState(false);
  const {
    ref, menuRef, isComponentVisible, setIsComponentVisible,
  } = useComponentVisible(false);
  const setDropdownVisibleHandler = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const onClickHandler = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }
    const dataAttr = e.target!.dataset.name;
    if (dataAttr === 'repeat') {
      onRepeat();
    }
    if (dataAttr === 'copy') {
      onCopy();
      setCopied(true);
    }
    if (dataAttr === 'delete') {
      onDelete();
    }
    setIsComponentVisible(false);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div className="history-item">
      <div className={`history-item-inner ${copied ? 'history-item-inner_copied' : ''}`}>
        <div className={`history-item__status history-item__status_${request.status}`} />
        <div className="history-item__title">
          {request.requestName}
        </div>
        <div ref={menuRef} role="button" tabIndex={-2} onKeyDown={() => setDropdownVisibleHandler()} onClick={() => setDropdownVisibleHandler()} className="history-item__menu">
          {[1, 2, 3].map((item) => <div className="history-item__menu-item" key={item} />)}
        </div>
      </div>
      {isComponentVisible && (
      <div ref={ref} className="history-item__dropdown">
        <div data-name="repeat" role="button" onKeyDown={() => {}} tabIndex={-9} onClick={onClickHandler} className="history-item__dropdown-item">Выполнить</div>
        <div data-name="copy" role="button" onKeyDown={() => {}} tabIndex={-8} onClick={onClickHandler} className="history-item__dropdown-item">Скопировать</div>
        <div data-name="delete" role="button" onKeyDown={() => {}} tabIndex={-7} onClick={onClickHandler} className="history-item__dropdown-item">Удалить</div>
      </div>
      )}
    </div>
  );
};

const HistoryItem = React.memo(HistoryItemInner);
export default HistoryItem;
