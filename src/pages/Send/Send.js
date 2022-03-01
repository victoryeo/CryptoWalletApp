import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'src/components/SafeAreaView';
import Header from 'src/components/Header';
import TextInput from 'src/components/TextInput';
import Button from 'src/components/Button';
import styles from './Send.css';
import globalS from 'src/assets/globalStyle';
import { pop } from 'utils/NavigationService';

const Send = ({ navigation }) => {
  const [toAddress, setToAddress] = useState(null);
  const [toAmount, setToAmount] = useState(null);

  const handleSend = () => {
    console.log('handleSend ' + toAddress + ' ' + toAmount)
  }

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
        returnKeyType="next"
        returnKeyLabel="next"
        style={[styles.input]}
      />

      <TextInput
        placeholder="Amount"
        label="Amount"
        value={toAmount}
        onChangeText={setToAmount}
        showScan
        keyboardType='numeric'
        returnKeyType="done"
        returnKeyLabel="done"
        style={[styles.input]}
      />
      <View style={styles.buttonsContainer}>
        <Button
          label="Next"
          onPress={() => {
            handleSend();
          }}
        />
      </View>
    </SafeAreaView>)
}

export default Send;