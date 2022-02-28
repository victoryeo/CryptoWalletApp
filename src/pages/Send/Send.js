import React from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'src/components/SafeAreaView';
import styles from './Send.css';

const Send = ({ navigation }) => {

  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={styles.bigwords}>Send</Text>
    </SafeAreaView>)
}

export default Send;