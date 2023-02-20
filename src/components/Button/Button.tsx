import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button({ label, onPress }: any) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderRadius: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1148fe'
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={{ fontSize: 18, color: 'white', textTransform: 'uppercase' }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}