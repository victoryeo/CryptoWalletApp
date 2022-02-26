import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import SafeAreaView from 'src/components/SafeAreaView';
import Selectors from '@crypto-redux/selectors';
import axios from 'axios';
import { getAccountBalance, getGasPrice } from 'utils/joWeb3Client.js';
import styles from './NFT.css.js';

const NFT = ({ navigation }) => {
  const currentAccount = useSelector(Selectors.currentAccount);
  const [id, setId] = useState(0);
  const [imageURI, setImageURI] = useState(null);
  const [gasPrice, setGasPrice] = useState(0);
  useEffect(() => {
    const fetchNFT = async() => {
      const url = 'https://api.opensea.io/api/v1/assets'
      const config = {
        headers: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36', 'referer':url},
        params: {
          owner: "0x161a244E7d840F3b2626F54EcA61Eae6787394Ec"
        },
      }
      let resp = await axios.get(url, config);
      console.log(resp.data.assets[0].id)
      console.log(resp.data.assets[0].image_url)
      setId(resp.data.assets[0].id);
      setImageURI(resp.data.assets[0].image_url);
    }
    fetchNFT().catch(console.error)

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
       
        <Text style={[styles.words]}>ID: {id} </Text>   
        <Image
          source={{uri: imageURI}}
          style={styles.logo}
        /> 

      </View>
    </SafeAreaView>
  )
}

export default NFT;