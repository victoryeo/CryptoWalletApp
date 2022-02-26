import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { walletActions } from '@crypto-redux/reducers/wallet';
import navigationPropTypes from 'utils/commonPropTypes';
import { SafeAreaView } from 'components';
import Button from 'src/components/Button';
import g from 'src/assets/globalStyle';

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

  const { handleSubmit } =
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
