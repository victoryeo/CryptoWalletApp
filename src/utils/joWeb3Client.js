import { web3Client } from 'src/utils/initWeb3Client';

export const getAccountBalance = async (address) => {
  const ret = await web3Client.getAccountBalance(address);
  return ret;
}

export const getGasPrice = async () => {
  const ret = await web3Client.getGasPrice();
  return ret;
}
