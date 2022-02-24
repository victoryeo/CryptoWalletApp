import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Wallet from 'src/pages/Wallet';
import Settings from 'src/pages/Settings';
import { wpx } from 'utils/dimensions';
import g from 'src/assets/globalStyle';

const Tab = createBottomTabNavigator();

const options = {
  headerShown: false,
  gestureEnabled: false,
};

const tabParams = {
  Wallet: {
    renderIcon: (color) => (
      <MaterialCommunityIcons name="wallet" size={wpx(22)} color={color} />
    ),
  },
  Settings: {
    renderIcon: (color) => (
      <MaterialCommunityIcons name="briefcase" size={wpx(20)} color={color} />
    ),
  },
};

const MainTabs = () => (
  <View>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          const { renderIcon } = tabParams[route.name] || {};
          return renderIcon ? renderIcon(color) : null;
        },
        tabBarActiveTintColor: g.colors.lightPurple2,
        tabBarInactiveTintColor: g.colors.darkPurple,
        tabBarStyle: {
          backgroundColor: g.colors.darkPurple2,
          borderTopWidth: 0,
          height: wpx(60),
        },
        tabBarIconStyle: {
          marginTop: wpx(6),
        },
        tabBarLabelStyle: {
          fontSize: 10,
          paddingBottom: wpx(6),
        },
      })}
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      initialRouteName="Wallet"
    >
      <Tab.Screen name="Wallet" component={Wallet} options={options} />
      <Tab.Screen name="Settings" component={Settings} options={options} />
    </Tab.Navigator>
  </View>
);

export default MainTabs;