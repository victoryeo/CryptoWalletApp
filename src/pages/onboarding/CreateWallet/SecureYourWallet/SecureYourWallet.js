import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Image } from 'react-native';

import { SafeAreaView } from 'src/components';
import Button from 'src/components/Button';

import navigationPropTypes from 'utils/commonPropTypes';
import CreateWalletContext from '../CreateWalletContext';
import styles from './SecureYourWallet.css';

const SecureYourWallet = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const context = useContext(CreateWalletContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setStep(0);
    });
    return unsubscribe;
  }, [navigation]);


  const handleNextButtonClick = () => {
    context.handleSecureYourWalletGotInClick();
  };

  const handleRemindMeLaterButtonClick = () => {
    context.handleSkipAccountSecurityButtonClick();
  };

  return (
      <SafeAreaView style={[styles.safeAreaContainer]}>
        <View style={[styles.container]}>
          <View style={[styles.containerLogoAndTitle]}>
            <Text style={[styles.bigwords]}>
              Attention
            </Text>
          </View>
          <View style={[styles.boxTitleContainer]}>
            <Text style={[styles.words]}>
              Write down your seed phrase on a piece of paper and secure it
            </Text>      
          </View>
          <View style={[styles.boxTitleContainer]}>
            <Text style={[styles.words]}>
              {`Risks are: \n• You lose it\n• You forget where you put it\n• Someone else finds it`}
            </Text>         
          </View>
          <View style={[styles.buttonsContainer]}>
            <Button label="Next" onPress={handleNextButtonClick} />
          </View>
        </View>
      </SafeAreaView>
  );
};

SecureYourWallet.propTypes = {
  ...navigationPropTypes,
};

export default SecureYourWallet;
