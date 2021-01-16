import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Initial from '../pages/Initial';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Routes;
