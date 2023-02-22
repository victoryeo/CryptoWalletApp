import React from 'react';

export interface PwdContextType {
  createSeedPhraseSuccessful: boolean
  handleCreatePasswordSubmitClick: (arg0: string) => void
  handleSecureYourWalletGotInClick: () => void
  handleSkipAccountSecurityButtonClick: () => void
  handleWriteDownSeedPhraseContinueClick: () => void,
}

const CreateWalletContext = React.createContext<PwdContextType>({} as PwdContextType);

export default CreateWalletContext;
