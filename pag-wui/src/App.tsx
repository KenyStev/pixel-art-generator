import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import './App.css';
import Dashboard from './modules/Dashboard';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Helmet>
        <title>PAG WUI</title>

        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />

        <style>{`
          *, *:before, *:after {
            box-sizing: border-box;
          }

          body,
          html,
          #root {
            height: 100%;
          }

          body {
            font-size: 100%;
            font-family: 'Roboto', sans-serif;
            overflow-x: hidden;
          }

          a {
            cursor: pointer;
          }

          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}</style>
      </Helmet>
      <Dashboard />
      <PersistGate loading={null} persistor={persistor}>
      </PersistGate>
    </Provider>
  );
}

export default App;
