export const password = (state: any) => state.wallet.password;
export const seedPhrase = (state: any) => state.wallet.seedPhrases;
export const currentAccount = (state: any) => state.wallet.currentAccount || state.wallet.accounts[0];