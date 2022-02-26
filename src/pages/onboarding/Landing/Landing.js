import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import Button from 'src/components/Button';

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
          <Text style={styles.bigwords}>
            {`Crypto Wallet App`}
          </Text>
        </View>
        <View style={[styles.buttonsContainer]}>
          <Button
            label="Create a New Wallet"
            onPress={() => navigation.navigate('CreateWallet')}
          />
          <View style={styles.space} />
          <Button
            label="Import Using Seed Phrase"
            onPress={() => navigation.navigate('ImportSeed')}
          />
          <View style={styles.space} />
          <Button
            label="Import Using Private Key"
            onPress={() => navigation.navigate('ImportPrivateKey')}
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
