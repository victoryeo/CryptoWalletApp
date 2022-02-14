import React, { useRef, useContext, useState, useEffect } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRoute } from '@react-navigation/native';

import { SafeAreaView } from '../../../../components';
import navigationPropTypes from '../../../../utils/commonPropTypes';
import CreateWalletContext from '../CreateWalletContext';
import styles from './CreatePassword.css';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
      confirmPassword: '',
      signInWithFaceId: false,
      tnc: false,
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required('Required').min(8, 'Must be at least 8 characters'),
      confirmPassword: Yup.string().required('Required'),
      tnc: Yup.bool().oneOf([true], 'Field must be checked'),
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

  const { handleChange, handleSubmit, setFieldValue, values, errors, touched } = useFormik({
    initialValues: CreatePasswordForm.initialValue,
    validationSchema: CreatePasswordForm.validationSchema,
    validate: CreatePasswordForm.validate,
    onSubmit: context.handleCreatePasswordSubmitClick,
    validateOnChange: false,
    validateOnBlur: false,
  });

  const getValidationError = key => touched[key] && errors[key];

  const getPasswordHelperText = () => {
    if (values.password.length < 8)
      return (
        <Text>
          Must be at least 8 characters
        </Text>
      );
    return (
      <Text>
        {`Password Strength: `}
        {getPasswordStrength(values.password)}
      </Text>
    );
  };

  return (
      <View>
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
              value={values.password}
              onChangeText={handleChange('password')}
              onSubmitEditing={() => {
                CreatePasswordForm.refs.confirmPassword.current?.focus();
              }}
              returnKeyType="next"
              style={[styles.input]}
            />
            <Text style={[styles.words]}>Confirm Password</Text>
            <TextInput
              secureTextEntry={true}
              value={values.confirmPassword}
              ref={CreatePasswordForm.refs.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              returnKeyType="done"
              style={[styles.input]}
            />
          </View>

          <View style={[styles.buttonsContainer]}>
            <Button title="Next" onPress={handleSubmit} />
          </View>
        </View>
      </View>
  );
};

CreatePassword.propTypes = {
  ...navigationPropTypes,
};

export default CreatePassword;
