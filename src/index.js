import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/test-tweets">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
