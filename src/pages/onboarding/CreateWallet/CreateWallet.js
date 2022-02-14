import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import navigationPropTypes from '../../../utils/commonPropTypes';

import CreateWalletContext from './CreateWalletContext';


const CreateWalletStack = createNativeStackNavigator();

const options = {
  headerShown: false,
};

const CreateWallet = ({ navigation }) => {
  const dispatch = useDispatch();

  const [createSeedPhraseSuccessful, setCreateSeedPhraseSuccessful] = useState(false);
  const context = {
    createSeedPhraseSuccessful,
  }
  return (
    <CreateWalletContext.Provider value={context}>

    </CreateWalletContext.Provider>
  );
};

CreateWallet.propTypes = {
  ...navigationPropTypes,
};

export default CreateWallet;
