import Web3Client from './Web3Client';

export let web3Client = null;

export const initWeb3Client = () => {
  if (!web3Client) {
    web3Client = new Web3Client();
  }
}

export const getAccountBalance = async (address) => {
  const ret = await web3Client.getAccountBalance(address);
  return ret;
}

export const getGasPrice = async () => {
  const ret = await web3Client.getGasPrice();
  return ret;
}
