import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'src/components/SafeAreaView';
import Header from 'src/components/Header';
import styles from './Send.css';
import globalS from 'src/assets/globalStyle';
import { pop } from 'utils/NavigationService';
import TextInput from 'src/components/TextInput';

const Send = ({ navigation }) => {
  const [toAddress, setToAddress] = useState(null);

  return (
    <SafeAreaView style={[styles.container]}>
      <Header
        title="Send"
        leftIcon={{ name: globalS.icon.BACK, onPress: pop }}
      />
      <Text style={styles.words}>to</Text>
      <TextInput
        placeholder="Recipient address"
        label="To"
        value={toAddress}
        onChangeText={setToAddress}
        showScan
        returnKeyType="done"
        returnKeyLabel="done"
        style={[styles.input]}
      />
    </SafeAreaView>)
}

export default Send;