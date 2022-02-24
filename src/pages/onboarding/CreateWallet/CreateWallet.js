import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import navigationPropTypes from '../../../utils/commonPropTypes';

import CreateWalletContext from './CreateWalletContext';
import CreatePassword from './CreatePassword';
import { walletActions } from '@crypto-redux/reducers/wallet';

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
  }
  return (
    <CreateWalletContext.Provider value={context}>
      <CreateWalletStack.Navigator initialRouteName="CreatePassword">
      <CreateWalletStack.Screen name="CreatePassword" component={CreatePassword} options={options} />

      </CreateWalletStack.Navigator>

    </CreateWalletContext.Provider>
  );
};

CreateWallet.propTypes = {
  ...navigationPropTypes,
};

export default CreateWallet;
