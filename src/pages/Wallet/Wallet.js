import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import SafeAreaView from 'src/components/SafeAreaView';
import Selectors from '@crypto-redux/selectors';

import { getAccountBalance, getGasPrice } from 'utils/joWeb3Client.js';
import styles from './Wallet.css.js';

const Wallet = ({ navigation }) => {
  const currentAccount = useSelector(Selectors.currentAccount);
  const [bala, setBala] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  useEffect(() => {
    const fetchBalance = async() => {
      const data = await getAccountBalance(currentAccount.accountAddress);
      setBala(data)
    }
    fetchBalance().catch(console.error)

    const fetchGasPrice = async() => {
      const data = await getGasPrice();
      setGasPrice(data)
    }
    fetchGasPrice().catch(console.error)
  }, []);


  return (
    <SafeAreaView style={[styles.bgContainer]}>
      <View style={[styles.container]}>
      
        <Text style={[styles.bigwords]}>Gas price: {gasPrice}</Text>
        <Text style={[styles.bigwords]}>Account Information</Text>
        <Text style={[styles.words]}>address: {currentAccount.accountAddress}</Text>
        <Text style={[styles.words]}>balance: {bala}</Text>        
      </View>
    </SafeAreaView>
  )
}

export default Wallet;