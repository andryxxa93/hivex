import React, { FC, useEffect } from 'react';
import Console from 'components/Console';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HistoryRow from 'components/HistoryRow';
import useActions from 'hooks/useActions';

import 'styles/pages/Main.scss';
import useTypedSelector from 'hooks/useTypedSelector';
import { LOCAL_STORAGE_KEYS } from 'store/reducers/console/types';
import jsonBeautifier from 'utils/jsonBeautifier';

const Main: FC = () => {
  const { history, request, error } = useTypedSelector((state) => state.console);
  const {
    sendRequest, setHistory, setUser, clearHistory, setRequest,
  } = useActions();
  useEffect(() => {
    const historyInLS = localStorage.getItem(LOCAL_STORAGE_KEYS.HISTORY_REQUEST);
    if (historyInLS) {
      setHistory(JSON.parse(historyInLS));
    }
    const userInfoInLS = localStorage.getItem('user_info');
    if (userInfoInLS) {
      const parsed = JSON.parse(userInfoInLS);
      setUser(parsed.account, parsed.sublogin);
    }
  }, []);

  const sendRequestHandler = async () => {
    return sendRequest(request);
  };

  const copyHandler = (text: string) => {
    navigator.clipboard.writeText((text)).catch((e) => e);
  };

  const repeatRequestHandler = (req: string) => {
    setRequest(req);
    sendRequest(req);
  };

  const onFormatHandler = () => {
    setRequest(jsonBeautifier(JSON.parse(request)));
  };

  return (
    <div className="main">
      <Header />
      <HistoryRow
        repeatRequestHandler={repeatRequestHandler}
        copyHandler={copyHandler}
        clearHistory={clearHistory}
        history={history}
      />
      <Console error={error} requestContent={request} setRequestContent={setRequest} />
      <Footer onFormatHandler={onFormatHandler} onClickHandler={sendRequestHandler} />
    </div>
  );
};

export default Main;
