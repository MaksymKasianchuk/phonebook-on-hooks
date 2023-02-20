import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from 'constants/theme';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);