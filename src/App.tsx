import React from 'react';
import { StatusBar } from 'react-native';
import TabNavigator from './TabNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TabNavigator />
    </>
  );
};

export default App;
