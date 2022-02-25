import Web3Client from './Web3Client';

export let web3Client = null;

export const initWeb3Client = () => {
  if (!web3Client) {
    web3Client = new Web3Client();
  }
}
