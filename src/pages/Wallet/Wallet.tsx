import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import SafeAreaView from '../../components/SafeAreaView';
import Button from '../../components/Button';
import Selectors from '../../redux/selectors';

import { getAccountBalance, getGasPrice } from '../../utils/Web3ClientFunc';
import styles from './Wallet.css';

const Wallet = ({ navigation }: any) => {
  const currentAccount = useSelector(Selectors.currentAccount);
  const [bala, setBala] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  useEffect(() => {
    const fetchBalance = async() => {
      console.log("Wallet fetchBalance")
      let data = await getAccountBalance(currentAccount.accountAddress);
      // 1ETH = 10^18 wei
      let dataNum = parseInt(data, 10) / 1e18;
      setBala(dataNum)
    }
    fetchBalance().catch(console.error)

    const fetchGasPrice = async() => {
      console.log("Wallet getGasPrice")
      try {
      let data = await getGasPrice();
      // 1GWEI = 10^9 wei
      let dataNum = parseInt(data, 10) / 1e9;
      setGasPrice(dataNum)
      } catch (e) {
        console.log("fetchGasPrice ", e);
      }
    }
    fetchGasPrice().catch(console.error)
  }, []);


  return (
    <SafeAreaView style={[styles.bgContainer]}>
      <View style={[styles.container]}>
      
        <Text style={[styles.bigwords]}>Gas price: {gasPrice} Gwei</Text>
        <Text style={[styles.bigwords]}>Account Information</Text>
        <Text style={[styles.words]}>address: {currentAccount.accountAddress}</Text>
        <Text style={[styles.words]}>balance: {bala} ETH</Text> 
        <View style={styles.buttonsContainer}>
            <Button label="Send" onPress={() => navigation.navigate('Send')} />
          </View>       
      </View>
    </SafeAreaView>
  )
}

export default Wallet;