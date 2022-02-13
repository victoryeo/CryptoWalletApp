import React from 'react';
import { ImageBackground } from 'react-native';

import { Loader } from '../../components';
import SplashImage from '../../assets/img/background/splash.jpg';

import s from './Launch.css';

const Launch = () => {
  return (
    <ImageBackground
      style={s.container}
      source={SplashImage}
    >
      <Loader size='small' />
    </ImageBackground>
  );
};

export default Launch;