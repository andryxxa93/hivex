import React, { FC, useState } from 'react';
import Console from 'components/Console';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HistoryRow from 'components/HistoryRow';
import useActions from 'hooks/useActions';

import 'styles/pages/Main.scss';
import useTypedSelector from 'hooks/useTypedSelector';

const Main: FC = () => {
  const { history } = useTypedSelector((state) => state.console);
  const [requestContent, setRequestContent] = useState<string>('');
  const { sendRequest } = useActions();

  const sendRequestHandler = async () => {
    sendRequest(requestContent);
  };

  return (
    <div className="main">
      <Header />
      <HistoryRow history={history} />
      <Console requestContent={requestContent} setRequestContent={setRequestContent} />
      <Footer setRequestContent={setRequestContent} onClickHandler={sendRequestHandler} />
    </div>
  );
};

export default Main;
