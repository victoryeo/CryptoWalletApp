import Web3 from 'web3';
import {API_KEY} from "@env";

console.log(API_KEY)
const rinkeby = `https://eth-rinkeby.alchemyapi.io/v2/${API_KEY}`

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

  async sendAmount(from, to, amount, pk)
  {
    console.log('sendAmount ', from, to, amount, pk)
    const nonce = await this.web3Instance.eth.getTransactionCount(from, 'latest'); 

    const transaction = {
     'to': to,
     'value': amount,
     'gas': 5000000,
     'nonce': nonce,
    };

    const signedTx = await this.web3Instance.eth.accounts.signTransaction(
      transaction, pk);
    console.log(signedTx)

    try {
      const hash = await this.web3Instance.eth.sendSignedTransaction(signedTx.rawTransaction) 
      console.log("The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!")
    } catch (error) {
      console.log("Something went wrong while submitting your transaction:", error)
    }
  }
}

export default Web3Client;
