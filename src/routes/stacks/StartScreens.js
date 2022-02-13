import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../../pages/onboarding';
import Landing from '../../pages/onboarding/Landing';
import CreateWallet from '../../pages/onboarding/CreateWallet';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
  gestureEnabled: false,
};

const customOptions = { gestureEnabled: true };

const StartScreens = () => (
  <Stack.Navigator initialRouteName="Onboarding" screenOptions={options}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Landing" component={Landing} options={customOptions} />
    <Stack.Screen name="CreateWallet" component={CreateWallet} />
  </Stack.Navigator>
);

export default StartScreens;
