import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { walletActions } from '../../../redux/reducers/wallet';
import navigationPropTypes from '../../../utils/commonPropTypes';
import { SafeAreaView } from '../../../components';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';

import styles from './ImportSeed.css';

interface ImportSeedType {
  seed: string,
  password: string,
  confirmPassword: string,
}

const ImportSeed = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const form = {
    initialValue: {
      seed: '',
      password: '',
      confirmPassword: '',
    }
  };

  const handleFormSubmission = (value : ImportSeedType) => {
    console.log(value.seed);
    let seedPhrase = value.seed;

    // Call API with the seed phrase
    dispatch(walletActions.IMPORT_WALLET({ token: seedPhrase }));
  };

  const { handleSubmit, handleChange, values } =
    useFormik({
      initialValues: form.initialValue,
      onSubmit: handleFormSubmission,
    });

  const ref_password = useRef<any|null>()
  const ref_confirmPassword = useRef<any|null>()

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
              onSubmitEditing={() => ref_password.current?.focus()}
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

ImportSeed.propTypes = {
  ...navigationPropTypes,
};

export default ImportSeed;
