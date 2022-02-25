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
}

export default Web3Client;
