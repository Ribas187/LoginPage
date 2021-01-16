import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './src/routes/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0041C4" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
