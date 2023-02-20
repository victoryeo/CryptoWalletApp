import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

const MySafeAreaView = ({ children, style }: any) => {
  return (
    <SafeAreaView
      style={[
        {
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

export default MySafeAreaView;