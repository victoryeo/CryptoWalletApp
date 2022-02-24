import './shim';

import React from 'react';
import type { Node } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import RoutesStack from './src/routes/RoutesStack';
import store from './src/redux/Store';

const App: () => Node = () => {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RoutesStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
