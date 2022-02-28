import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { initNavigator } from '../utils/NavigationService';
import Launch from '../pages/launch';
import { MainTabs, StartScreens } from './stacks';
import Send from 'src/pages/Send';

const Stack = createNativeStackNavigator();

const RoutesStack = () => {
  const { isAppInitialized, isAuthenticated } = useSelector(state => state.auth);

  const renderScreens = () => {
    if (!isAppInitialized) {
      return <Stack.Screen name="Launch" component={Launch} />;
    }

    if (!isAuthenticated) {
      return <Stack.Screen name="StartScreens" component={StartScreens} />;
    }

    return (
      <>
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{
            animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen name="Send" component={Send} />
      </>
    );
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
