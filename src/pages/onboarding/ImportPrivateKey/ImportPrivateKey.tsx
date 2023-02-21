import React, { useRef, useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { walletActions } from '@crypto-redux/reducers/wallet';
import navigationPropTypes from 'utils/commonPropTypes';
import { SafeAreaView } from 'components';
import Button from 'src/components/Button';
import TextInput from 'src/components/TextInput';
import Selectors from '@crypto-redux/selectors';

import styles from './ImportPrivateKey.css';

interface ImportPrivateKeyType {
  privateKey: string,
  password: string,
  confirmPassword: string,
}

const ImportPrivateKey = ({ navigation }: any) => {
  let walletErrorMsg: string = useSelector(Selectors.walletErrorMsg);
  //console.log(walletErrorMsg)
  const dispatch = useDispatch();
  const form = {
    initialValue: {
      privateKey: '',
      password: '',
      confirmPassword: '',
    },
  };

  const handleFormSubmission = (value: ImportPrivateKeyType) => {
    let privateKey = value.privateKey;

    try {
      // Call API with the seed phrase
      dispatch(walletActions.IMPORT_PRIVATE_KEY({ token: privateKey }));
    } catch (e) {
      console.log('dispatch IMPORT_PRIVATE_KEY', e)
    }
  };

  const { handleSubmit, handleChange, values } =
    useFormik({
      initialValues: form.initialValue,
      onSubmit: handleFormSubmission,
    });

  const ref_password = useRef<TextInput|null>()
  const ref_confirmPassword = useRef<TextInput|null>()

  useEffect(() => {
    // below line called on first mount
    dispatch(walletActions.FETCH_STATE())
    // return fucntion called on un-mount
    return () => {
      dispatch(walletActions.FETCH_STATE())
    }
  },[])

  useEffect(()=>{
    if (walletErrorMsg !== '') {
      console.log('useEffect', walletErrorMsg)
      Alert.alert('Alert', walletErrorMsg)
    }
  })

  return (
    <SafeAreaView style={[styles.safeAreaContainer]}>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.safeAreaContainer]}
        bounces={false}
        extraHeight={150}
      >

        <View style={[styles.container]}>
          <View>
            <Text style={[styles.words]}>Enter Private Key <Text style={[styles.warningWords]}>without 0x prefix</Text></Text>
            
            <TextInput
              secureTextEntry={true}
              autoCapitalize='none'
              value={values.privateKey}
              onChangeText={handleChange('privateKey')}
              onSubmitEditing={() => {
                ref_password.current?.focus()
              }}
              blurOnSubmit={false}
              showScan
              returnKeyType="next"
              returnKeyLabel='next'
              style={[styles.input]}
            />
            <Text style={[styles.words]}>Enter Password</Text>
            <TextInput
              forwardRef={ref_password}
              secureTextEntry={true}
              autoCapitalize='none'
              value={values.password}
              onChangeText={handleChange('password')}
              onSubmitEditing={() => {
                ref_confirmPassword.current?.focus();
              }}
              blurOnSubmit={false}
              returnKeyType="next"
              returnKeyLabel='next'
              style={[styles.input]}
            />
            <Text style={[styles.words]}>{'\n'}Confirm Password</Text>
            <TextInput
              forwardRef={ref_confirmPassword}
              secureTextEntry={true}
              autoCapitalize='none'
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              blurOnSubmit={true}
              returnKeyType="done"
              returnKeyLabel='done'
              style={[styles.input]}
            />
          </View>
     
          <View style={[styles.buttonsContainer]}>
            <Button label="Import" onPress={handleSubmit} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

ImportPrivateKey.propTypes = {
  ...navigationPropTypes,
};

export default ImportPrivateKey;
