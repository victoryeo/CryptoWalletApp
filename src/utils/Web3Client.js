import Web3 from 'web3';

const rinkeby = "https://eth-rinkeby.alchemyapi.io/v2/IoSmtVVXenKJ8wZRNAAt2HyjB--2X0xb"

class Web3Client {
  constructor() {
    this.web3Instance = null;
    this.init();
  }

  init() {
    try {
      const web3 = new Web3(new Web3.providers.HttpProvider(rinkeby));
      this.web3Instance = web3;
      //console.log(this.web3Instance);
    } catch (err) {
      console.warn('Error in web3 initialization.', err);
      throw (err);
    }
  }

  // add the generated private key to web3
  addAccountToWallet({ privateKey }) {
    console.log('addAccountToWallet '+ privateKey)
    const account = this.web3Instance.eth.accounts.privateKeyToAccount(privateKey);
    this.web3Instance.eth.accounts.wallet.add(account);
    return account;
  }

  async getAccountBalance(address) {
    return await this.web3Instance.eth.getBalance(address);
  }  
  
  async getGasPrice() {
    return await this.web3Instance.eth.getGasPrice();
  }

}

export default Web3Client;
