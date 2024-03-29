import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Text, View } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import styles from './Send.css';
import globalS from '../../assets/globalStyle';
import { pop } from '../../utils/NavigationService';
import Selectors from '../../redux/selectors';
import { walletActions } from '../../redux/reducers/wallet';

const Send = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const [toAddress, setToAddress] = useState(null);
  const [toAmount, setToAmount] = useState(null);
  const currentAccount = useSelector(Selectors.currentAccount);

  const handleSend = () => {
    console.log('send to ' + toAddress + ' amount ' + toAmount)
    dispatch(walletActions.SEND({
      from: currentAccount.accountAddress,
      to: toAddress, 
      amount: toAmount 
    }));

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
          label="Send Now"
          onPress={() => {
            handleSend();
          }}
        />
      </View>
    </SafeAreaView>)
}

export default Send;