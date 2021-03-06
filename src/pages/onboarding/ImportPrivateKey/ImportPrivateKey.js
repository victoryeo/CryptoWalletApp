import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { walletActions } from '@crypto-redux/reducers/wallet';
import navigationPropTypes from 'utils/commonPropTypes';
import { SafeAreaView } from 'components';
import Button from 'src/components/Button';
import TextInput from 'src/components/TextInput';

import styles from './ImportPrivateKey.css';

const ImportPrivateKey = ({ navigation }) => {
  const dispatch = useDispatch();
  const form = {
    initialValue: {
      privateKey: '',
      password: '',
      confirmPassword: '',
    },
  };

  const handleFormSubmission = value => {
    let privateKey = value.privateKey;

    // Call API with the seed phrase
    dispatch(walletActions.IMPORT_PRIVATE_KEY({ token: privateKey }));
  };

  const { handleSubmit, handleChange, values } =
    useFormik({
      initialValues: form.initialValue,
      validate: form.validate,
      onSubmit: handleFormSubmission,
    });

  return (
    <SafeAreaView style={[styles.safeAreaContainer]}>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.safeAreaContainer]}
        bounces={false}
        extraHeight={150}
      >

        <View style={[styles.container]}>
          <View>
            <Text style={[styles.words]}>Enter Private Key</Text>
            <TextInput
              secureTextEntry={true}
              autoCapitalize='none'
              value={values.privateKey}
              onChangeText={handleChange('privateKey')}
              onSubmitEditing={() => form.refs.password.current?.focus()}
              showScan
              returnKeyType="next"
              returnKeyLabel='next'
              style={[styles.input]}
            />
            <Text style={[styles.words]}>Enter Password</Text>
            <TextInput
              secureTextEntry={true}
              autoCapitalize='none'
              value={values.password}
              onChangeText={handleChange('password')}
              onSubmitEditing={() => {
                form.refs.confirmPassword.current?.focus();
              }}
              returnKeyType="next"
              returnKeyLabel='next'
              style={[styles.input]}
            />
            <Text style={[styles.words]}>{'\n'}Confirm Password</Text>
            <TextInput
              secureTextEntry={true}
              autoCapitalize='none'
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onSubmitEditing={() => form.refs.confirmPassword.current?.blur()}
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
