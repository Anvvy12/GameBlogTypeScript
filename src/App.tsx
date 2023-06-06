import React from 'react';
import Header from './features/header/Header';
import Footer from './features/footer/Footer';
import Main from './features/main/Main';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
};

export default App;
