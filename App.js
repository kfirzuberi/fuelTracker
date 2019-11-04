import React from 'react';
import { StatusBar, } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import RouterNavigator from './src/routerNavigator';

// Imports: Redux Persist Persister
import { store, persistor } from './src/store/store';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="dark-content" />
          <RouterNavigator />
        </PersistGate>
      </Provider>

    </>
  );
};

export default App;