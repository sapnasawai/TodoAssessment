import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import TabNavigator from './TabNavigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  })
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TabNavigator />
    </>
  );
};

export default App;
