import OpenseaClient from './OpenseaClient';

export let openseaClient: OpenseaClient;

export const initOpenseaClient = () => {
  if (!openseaClient) {
    openseaClient = new OpenseaClient();
  }
}

export const getNFTAsset = async (address: string) => {
  console.log('getNFTAsset ' + address)
  const ret = await openseaClient.getOpenSeaAssets(address);
  return ret;
}
