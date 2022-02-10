import Console from 'components/Console';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HistoryRow from 'components/HistoryRow';
import React, { FC } from 'react';

import 'styles/pages/Main.scss';

const Main: FC = () => (
  <div className="main">
    <Header />
    <HistoryRow />
    <Console />
    <Footer />
  </div>
);

export default Main;
