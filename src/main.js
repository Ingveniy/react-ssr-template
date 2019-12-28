import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import configureStore from './redux';

import App from './components/App';
import './styles/index.scss';

const serverData = window.__SERVER_DATA__;

export const main = () => {
  const store = configureStore({
    [serverData['reducerName']]: {
      [serverData['reducerFieldName']]: serverData.data
    }
  });

  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
};
