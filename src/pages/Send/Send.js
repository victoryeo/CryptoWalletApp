import React from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'src/components/SafeAreaView';
import Header from 'src/components/Header';
import styles from './Send.css';
import globalS from 'src/assets/globalStyle';
import { pop } from 'utils/NavigationService';

const Send = ({ navigation }) => {

  return (
    <SafeAreaView style={[styles.container]}>
      <Header
        title="Send"
        leftIcon={{ name: globalS.icon.BACK, onPress: pop }}
      />
      <Text style={styles.words}>to</Text>
    </SafeAreaView>)
}

export default Send;