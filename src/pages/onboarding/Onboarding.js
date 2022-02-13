import React from 'react';
import { Button, View, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from '../../components';
import navigationPropTypes from '../../utils/commonPropTypes'
import bgMain from '../../assets/img/background/splash.jpg';
import cryptoTitle from '../../assets/img/icon/cryptoIcon.png';
import styles from './Onboarding.css';
import ImageSlider from '../../components/ImageSlider';
import OnboardingRotation from './OnboardingRotation';

const Onboarding = ({ navigation }) => {
  return (
    <ImageBackground style={[styles.bgContainer]} source={bgMain}>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.containerLogoAndTitle]}>
          <Image source={cryptoTitle} />
        </View>

        <View style={[styles.buttonsContainer]}>
          <Button
            title="Get Started"
            type="secondary"
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
