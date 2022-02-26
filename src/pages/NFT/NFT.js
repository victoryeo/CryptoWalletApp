import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import SafeAreaView from 'src/components/SafeAreaView';
import Selectors from '@crypto-redux/selectors';

import { getAccountBalance, getGasPrice } from 'utils/joWeb3Client.js';
import styles from './NFT.css.js';

const NFT = ({ navigation }) => {
  const currentAccount = useSelector(Selectors.currentAccount);
  const [bala, setBala] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  useEffect(() => {
    const fetchBalance = async() => {
      let data = await getAccountBalance(currentAccount.accountAddress);
      // 1ETH = 10^18 wei
      data = data / 1e18;
      setBala(data)
    }
    fetchBalance().catch(console.error)

    const fetchGasPrice = async() => {
      let data = await getGasPrice();
      // 1GWEI = 10^9 wei
      data = data / 1e9;
      setGasPrice(data)
    }
    fetchGasPrice().catch(console.error)
  }, []);


  return (
    <SafeAreaView style={[styles.bgContainer]}>
      <View style={[styles.container]}>
      
        <Text style={[styles.bigwords]}>NFT owned by</Text>
        <Text style={[styles.words]}>{currentAccount.accountAddress}</Text>
       
      </View>
    </SafeAreaView>
  )
}

export default NFT;