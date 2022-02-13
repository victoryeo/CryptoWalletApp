import React from 'react';
import { Button, Text, View, Image, ImageBackground } from 'react-native';

import { SafeAreaView } from '../../../components';
import navigationPropTypes from '../../../utils/commonPropTypes';
import bgMain from '../../../assets/img/background/splash.jpg';
import cryptoLogo from '../../../assets/img/icon/cryptoIcon.png';

import styles from './Landing.css';

const Landing = ({ navigation }) => {
  return (
    <ImageBackground style={[styles.bgContainer]} source={bgMain}>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.containerLogoAndTitle]}>
          <Image source={cryptoLogo} />
          <Text center white fs16 mediumBold>
            {`Crypto wallet app`}
          </Text>
        </View>
        <View style={[styles.buttonsContainer]}>
          <Button
            title="Create a New Wallet"
            type="secondary"
            onPress={() => navigation.navigate('CreateWallet')}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

Landing.propTypes = {
  ...navigationPropTypes,
};

export default Landing;
