import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from 'src/pages/onboarding';
import Landing from 'src/pages/onboarding/Landing';
import CreateWallet from 'src/pages/onboarding/CreateWallet';
import ImportSeed from 'src/pages/onboarding/ImportSeed';

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
    <Stack.Screen name="ImportSeed" component={ImportSeed} />
  </Stack.Navigator>
);

export default StartScreens;
