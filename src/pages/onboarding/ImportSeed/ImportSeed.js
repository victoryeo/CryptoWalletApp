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

import styles from './ImportSeed.css';

const ImportSeed = ({ navigation }) => {
  const dispatch = useDispatch();
  const form = {
    initialValue: {
      seed: '',
      password: '',
      confirmPassword: '',
    },
  };

  const handleFormSubmission = value => {
    console.log(value.seed);
    let seedPhrase = value.seed;

    // Call API with the seed phrase
    dispatch(walletActions.IMPORT_WALLET({ token: seedPhrase }));
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
            <Text style={[styles.words]}>Enter Seed Phrase</Text>
            <TextInput
              autoCapitalize='none'
              value={values.seed}
              onChangeText={handleChange('seed')}
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

ImportSeed.propTypes = {
  ...navigationPropTypes,
};

export default ImportSeed;
