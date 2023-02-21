import React from 'react';
import { FlatList, Text, View, Image, Share } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import SafeAreaView from '../../components/SafeAreaView';
import { wpx } from '../../utils/dimensions';
import iconLogout from 'src/assets/img/icon/settings/logout.png';
import iconShareAddress from 'src/assets/img/icon/settings/share_address.png';
import { authActions } from '../../redux/reducers/auth';
import styles from './Settings.css';

const Settings = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const settingsList = [{
      title: 'Share My Public Address',
      icon: <Image source={iconShareAddress} style={styles.panelIcon} />,
      onPress: () => Share.share({ message: "account Address" }),
    }, {
      title: 'Log out',
      icon: <Image source={iconLogout} style={styles.panelIcon} />,
      onPress: () => {
        dispatch(authActions.SIGN_OUT());
      },
      wrapStyle: { marginTop: wpx(34) }
    }]
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.words]}>Settings</Text>
      <FlatList 
        data={settingsList}
        renderItem={({ item }) => 
        <TouchableOpacity
          onPress={item.onPress}>
          <View style={styles.container}>
            <View style={styles.leftSec}>
              {item.icon}
              <View style={[ styles.flatlist ]}>
                <Text style={styles.words} >{item.title}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>}
        keyExtractor={item => item.title}
        contentContainerStyle={styles.flatlist}
      />
    </SafeAreaView>
  )
}

export default Settings;