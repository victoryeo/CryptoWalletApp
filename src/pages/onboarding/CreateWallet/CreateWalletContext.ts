import React from 'react';

export interface PwdContextType {
  createSeedPhraseSuccessful: boolean
  handleCreatePasswordSubmitClick: (values: { password: string; confirmPassword: string; }) => void
  handleSecureYourWalletGotInClick: () => void
  handleSkipAccountSecurityButtonClick: () => void
  handleWriteDownSeedPhraseContinueClick: () => void,
}

const CreateWalletContext = React.createContext<PwdContextType>({} as PwdContextType);

export default CreateWalletContext;
