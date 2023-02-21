import Web3Client from './Web3Client';

export let web3Client: Web3Client;

export const initWeb3Client = () => {
  if (!web3Client) {
    console.log('web3Client is null')
    web3Client = new Web3Client();
  } else {
    console.log('web3Client is not null')
  }
}

export const getAccountBalance = async (address: string) => {
  const ret = await web3Client!.getAccountBalance(address);
  return ret;
}

export const getGasPrice = async () => {
  const ret = await web3Client!.getGasPrice();
  return ret;
}
