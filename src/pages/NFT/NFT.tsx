import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import SafeAreaView from 'src/components/SafeAreaView';
import Selectors from '@crypto-redux/selectors';
import axios from 'axios';
import { Tile } from 'react-native-elements';
import { getNFTAsset } from 'src/utils/OpenseaClientFunc';
import styles from './NFT.css';
import { TOKEN_ADDRESS } from "@env";
import { AccountRetType } from '../../redux/sagas/handlers/wallet';

const NFT = ({ navigation }: any) => {
  const currentAccount: AccountRetType = useSelector(Selectors.currentAccount);
  const [id, setId] = useState(0);
  const [imageURI, setImageURI] = useState('uri');
  const [desc, setDesc] = useState('desc');
  useEffect(() => {
    const fetchNFT = async() => {
      const url = 'https://api.opensea.io/api/v1/assets'
      // the headers below are for accessing Opensea API
      // see https://github.com/ProjectOpenSea/opensea-js/issues/245
      const config = {
        headers: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36', 'referer':url},
        params: {
          owner: currentAccount.accountAddress
        },
      }
      try {
        let resp = await axios.get(url, config);
        console.log('id', resp.data?.assets[0]?.id)
        console.log('image_url', resp.data?.assets[0]?.image_url)
        setId(resp.data?.assets[0]?.id);
        setImageURI(resp.data?.assets[0]?.image_url);
        setDesc(resp.data?.assets[0]?.description);
      } catch (e) {
        console.log("fetchNFT", e)
      }
    }
    fetchNFT()

    const fetchContractAsset = async() => {
      try {
        let data = await getNFTAsset(TOKEN_ADDRESS);
        console.log('data',data)
      } catch (e) {
        console.log("fetchContractAsset", e)
      }
    }
    fetchContractAsset()
  }, []);

  return (
    <SafeAreaView style={[styles.bgContainer]}>
      <View style={{ alignItems: 'center' }}>
      <ScrollView
        contentContainerStyle={[styles.contentContainer]}
        bounces={false}
      >
      <View style={[styles.container]}>
      
        <Text style={[styles.bigwords]}>NFT owned by</Text>
        <Text style={[styles.words]}>{currentAccount.accountAddress}</Text>
        <View style={styles.space}/>
        <Tile
         imageSrc={{uri:imageURI}}
         title={desc}
         titleStyle={{ fontSize: 20, color: 'white', textAlign: 'center', paddingBottom: 1 }}
         activeOpacity={1}
         width={280}
         style={{ paddingBottom: 10, paddingTop: 10 }}
         >
          <Text style={[styles.words]}>ID: {id} </Text>  
        </Tile>
      </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default NFT;