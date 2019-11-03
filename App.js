import React from 'react';
import { StatusBar, } from 'react-native';
import RouterNavigator from './src/routerNavigator';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RouterNavigator />
    </>
  );
};

export default App;