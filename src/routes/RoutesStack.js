import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initNavigator } from '../utils/NavigationService';
import Launch from '../pages/launch';
import { StartScreens } from './stacks';

const Stack = createNativeStackNavigator();

const RoutesStack = () => {

  const renderScreens = () => {

    //return <Stack.Screen name="Launch" component={Launch} />;
    return <Stack.Screen name="StartScreens" component={StartScreens} />;
  };

  return (
    <NavigationContainer theme={DarkTheme} ref={nav => initNavigator(nav)}>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        {renderScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesStack;
