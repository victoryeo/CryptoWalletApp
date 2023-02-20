import React from 'react';
import { ImageBackground } from 'react-native';
import { ActivityIndicator } from 'react-native';

import SplashImage from 'src/assets/img/background/splash.jpg';

import s from './Launch.css';

const Launch = () => {
  return (
    <ImageBackground
      style={s.container}
      source={SplashImage}
    >
    <ActivityIndicator
      color='#999999'
      size='small'
    />
    </ImageBackground>
  );
};

export default Launch;