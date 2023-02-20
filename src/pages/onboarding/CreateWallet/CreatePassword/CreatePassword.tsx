import React, { useRef, useContext, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRoute } from '@react-navigation/native';

import TextInput from 'src/components/TextInput';
import Button from 'src/components/Button';

import { SafeAreaView } from '../../../../components';
import navigationPropTypes from '../../../../utils/commonPropTypes';
import CreateWalletContext from '../CreateWalletContext';
import styles from './CreatePassword.css';

const getPasswordStrength = password => {
  const lowerCaseExists = password.match('(?=.*[a-z])');
  const upperCaseExists = password.match('(?=.*[A-Z])');
  const digitExists = password.match(`(?=.*\\d)`);
  const specialCharExists = password.match('[-+_!@#$%^&*.,?]');

  const passwordStrengthCount = [lowerCaseExists, upperCaseExists, digitExists, specialCharExists].filter(
    val => val !== null,
  ).length;

  const passwordStrength = {
    2: {
      text: 'Weak',
      color: 'red',
    },
    3: {
      text: 'Average',
      color: 'yellow5',
    },
    4: {
      text: 'Strong',
      color: 'green',
    },
  };
  const config =
    passwordStrength[
      Object.keys(passwordStrength).find(key => {
        return Number.parseFloat(key) >= passwordStrengthCount;
      })
    ];

  return (
    <Text {...{ [config.color]: true }}>
      {config.text}
    </Text>
  );
};

const CreatePassword = ({ navigation }) => {
  const route = useRoute();

  useEffect(() => {

  }, []);

  const CreatePasswordForm = {
    initialValue: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required('Required').min(4, 'Must be at least 4 characters'),
      confirmPassword: Yup.string().required('Required'),
    }),
    validate: async values => {
      const errors = {};

      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Password mismatch';
        return errors;
      }

      return errors;
    },
    refs: {
      confirmPassword: useRef(null),
    },
  };

  const context = useContext(CreateWalletContext);

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: CreatePasswordForm.initialValue,
    validationSchema: CreatePasswordForm.validationSchema,
    validate: CreatePasswordForm.validate,
    onSubmit: context.handleCreatePasswordSubmitClick,
    //onSubmit: values => {
    //  alert(JSON.stringify(values, null, 2));
    //},
    validateOnChange: false,
    validateOnBlur: false,
  });

  const getValidationError = key => touched[key] && errors[key];

  return (
      <SafeAreaView style={[styles.safeAreaContainer]}>
        <View style={[styles.container]}>
          <View style={[styles.containerLogoAndTitle]}>
            <Text style={[styles.bigwords]}>
              {route.params?.isChangePassword ? 'Change Password' : 'Create Password'}
            </Text>
            <Text style={[styles.words]}>
              This password will unlock your wallet only on this service
            </Text>
          </View>
          <View>
            <Text style={[styles.words]}>Enter Password</Text>
            <TextInput
              secureTextEntry={true}
              autoCapitalize='none'
              value={values.password}
              onChangeText={handleChange('password')}
              onSubmitEditing={() => {
                CreatePasswordForm.refs.confirmPassword.current?.focus();
              }}
              error={getValidationError('password')}
              returnKeyType="next"
              returnKeyLabel='next'
              style={[styles.input]}
            />
            <View style={styles.space} />
            <Text style={[styles.words]}>{'\n'}Confirm Password</Text>
            <TextInput
              secureTextEntry={true}
              autoCapitalize='none'
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              error={getValidationError('confirmPassword')}
              returnKeyType="done"
              returnKeyLabel='done'
              style={[styles.input]}
            />
          </View>

          <View style={[styles.buttonsContainer]}>
            <Button label="Next" onPress={handleSubmit} />
          </View>
        </View>
      </SafeAreaView>
  );
};

CreatePassword.propTypes = {
  ...navigationPropTypes,
};

export default CreatePassword;
