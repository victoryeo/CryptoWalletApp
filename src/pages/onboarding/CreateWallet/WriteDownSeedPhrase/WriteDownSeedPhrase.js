import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Selectors from '@crypto-redux/selectors';

import navigationPropTypes from 'utils/commonPropTypes';
import { SafeAreaView } from 'components';
import Button from 'components/Button'
import CreateWalletContext from '../CreateWalletContext';
import styles from './WriteDownSeedPhrase.css';

const WriteDownSeedPhrase = ({ navigation }) => {
  const { handleWriteDownSeedPhraseContinueClick } = useContext(CreateWalletContext);

  const seedPhrases = useSelector(Selectors.seedPhrase);

  const data = {
    title: `Write Down Your Seed Phrase`,
    message: `This is your seed phrase. Write it down on a paper and keep it in a safe place.`,
  };

  return (
    <SafeAreaView style={[styles.safeAreaContainer]}>
      <View style={[styles.container]}>
        <View style={[styles.containerLogoAndTitle]}>
          <Text style={[styles.bigwords]} >
            {data.title}
          </Text>
          <Text style={[styles.words]} >
            {data.message}
          </Text>
        </View>
        <View style={[styles.seedPhrasesContainer]}>
          { seedPhrases.map((val, index) => 
          (<Text style={[styles.words]} key={index}>{index+1}: {val}</Text>))}
        </View>
        <View style={[styles.buttonsContainer]}>
          <Button label="Continue" onPress={handleWriteDownSeedPhraseContinueClick} />
        </View>
      </View>
    </SafeAreaView>
  );
};

WriteDownSeedPhrase.propTypes = {
  ...navigationPropTypes,
};

export default WriteDownSeedPhrase;
