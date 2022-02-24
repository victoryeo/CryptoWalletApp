import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Wallet from 'src/pages/Wallet';
import Settings from 'src/pages/Settings';
import { wpx } from 'utils/dimensions';
import g from 'src/assets/globalStyle';

const Tab = createBottomTabNavigator();

const options = {
  headerShown: false,
  gestureEnabled: false,
};

const MainTabs = () => (
  <View style={g.custom.flex1}>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Wallet') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused 
              ? 'cloud-upload' 
              : 'cloud-upload-outline';
          }
          console.log(iconName)
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { position: 'absolute' },
          tabBarLabelStyle: {
          fontSize: 14,
          paddingBottom: wpx(2),
        },
      })}
      initialRouteName="Wallet"
    >
      <Tab.Screen name="Wallet" component={Wallet} options={options} />
      <Tab.Screen name="Settings" component={Settings} options={options} />
    </Tab.Navigator>
  </View>
);

export default MainTabs;