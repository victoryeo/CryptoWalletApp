import Web3 from 'web3';
import { OpenSeaPort, Network } from 'opensea-js';

class OpenseaClient {
  openseaport : OpenSeaPort
  constructor() {
    this.openseaport = <OpenSeaPort>{}
    this.init();
  }

  init() {
    try {
      // This example provider only does read-only calls
      const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io');
      this.openseaport = new OpenSeaPort(provider, {
        networkName: Network.Main,
      })
      //console.log(this.openseaport);
    } catch (err) {
      console.warn('Error in opensea initialization.', err);
      throw (err);
    }
  }

  // Get assets
  async getOpenSeaAssets(address: any) {
    const assets = await this.openseaport.api.getAsset({
      tokenAddress: address,
      tokenId: null
    });
    return assets;
  }
}

export default OpenseaClient;