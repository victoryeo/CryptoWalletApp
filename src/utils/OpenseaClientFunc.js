import OpenseaClient from './OpenseaClient';

export let openseaClient = null;

export const initOpenseaClient = () => {
  if (!openseaClient) {
    openseaClient = new OpenseaClient();
  }
}

export const getNFTAsset = async (address) => {
  console.log('getNFTAsset ' + address)
  const ret = await openseaClient.getOpenSeaAssets(address);
  return ret;
}
