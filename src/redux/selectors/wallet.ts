export const password = state => state.wallet.password;
export const seedPhrase = state => state.wallet.seedPhrases;
export const currentAccount = state => state.wallet.currentAccount || state.wallet.accounts[0];