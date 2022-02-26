import React from 'react';
import { Text } from 'react-native';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import styles from './TextInput.css';

export default function TextInput({ ...otherProps }) {
  const validationColor = '#223e4b';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8
      }}
    >
      <View style={{ padding: 8 }}>
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(34, 62, 75, 0.7)'
          {...otherProps}
        />
      </View>
      {!!otherProps.error && (
          <Text style={styles.redwords}>
            {otherProps.error}
          </Text>
        )}
    </View>
  );
}