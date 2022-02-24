import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import navigationPropTypes from '../../../utils/commonPropTypes';

import CreateWalletContext from './CreateWalletContext';
import CreatePassword from './CreatePassword';
import SecureYourWallet from './SecureYourWallet';
import WriteDownSeedPhrase from './WriteDownSeedPhrase';
import { walletActions } from '@crypto-redux/reducers/wallet';
import { modalActions } from '@crypto-redux/reducers/modal';
import { authActions } from '@crypto-redux/reducers/auth';

const CreateWalletStack = createNativeStackNavigator();

const options = {
  headerShown: false,
};

const CreateWallet = ({ navigation }) => {
  const dispatch = useDispatch();

  const [createSeedPhraseSuccessful, setCreateSeedPhraseSuccessful] = useState(false);
  const context = {
    createSeedPhraseSuccessful,
    handleCreatePasswordSubmitClick: async ({ password }) => {
      dispatch(walletActions.CREATE_WALLET({ password }));
    },
    handleSecureYourWalletGotInClick: () => {
      navigation.navigate('WriteDownSeedPhrase');
    },
    handleSkipAccountSecurityButtonClick: () => {
      dispatch(modalActions.TOGGLE_GLOBAL_LOADER(true));
      setTimeout(() => {
        setCreateSeedPhraseSuccessful(true);
        navigation.navigate('ConfirmSeedPhrase');
        dispatch(modalActions.TOGGLE_GLOBAL_LOADER(false));
      }, 2000);
    },
    handleWriteDownSeedPhraseContinueClick: () => {
      dispatch(authActions.SIGN_IN());
    },
  }
  return (
    <CreateWalletContext.Provider value={context}>
      <CreateWalletStack.Navigator initialRouteName="CreatePassword">
        <CreateWalletStack.Screen name="CreatePassword" component={CreatePassword} options={options} />
        <CreateWalletStack.Screen name="SecureYourWallet" component={SecureYourWallet} options={options} />
        <CreateWalletStack.Screen name="WriteDownSeedPhrase" component={WriteDownSeedPhrase} options={options} />

      </CreateWalletStack.Navigator>

    </CreateWalletContext.Provider>
  );
};

CreateWallet.propTypes = {
  ...navigationPropTypes,
};

export default CreateWallet;
