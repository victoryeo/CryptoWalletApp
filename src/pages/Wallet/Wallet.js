import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import SafeAreaView from 'src/components/SafeAreaView';
import Selectors from '@crypto-redux/selectors';

import styles from './Wallet.css.js';

const Wallet = ({ navigation }) => {
  const currentAccount = useSelector(Selectors.currentAccount);

  return (
    <SafeAreaView style={[styles.bgContainer]}>
      <View style={[styles.container]}>
      
        <Text style={[styles.bigwords]}>Account Information</Text>
        <Text style={[styles.words]}>address: {currentAccount.accountAddress}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Wallet;