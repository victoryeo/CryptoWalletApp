import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import Button from 'src/components/Button';
import { SafeAreaView } from '../../components';
import navigationPropTypes from '../../utils/commonPropTypes'
import bgMain from '../../assets/img/background/splash.jpg';
import cryptoLogo from '../../assets/img/icon/cryptoIcon.png';
import styles from './Onboarding.css';

const Onboarding = ({ navigation }) => {
  return (
    <ImageBackground style={[styles.bgContainer]} source={bgMain}>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.containerLogoAndTitle]}>
          <Image source={cryptoLogo} />
          <Text style={styles.bigwords}>
            {`Crypto wallet app`}
          </Text>
        </View>
        <View style={[styles.buttonsContainer]}>
          <Button
            label="Get Started"
            onPress={() => navigation.navigate('Landing')}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

Onboarding.propTypes = {
  ...navigationPropTypes,
};

export default Onboarding;
