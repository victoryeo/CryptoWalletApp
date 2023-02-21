## Crypto Wallet App
This is Crypto Wallet App for Ethereum/Polygon blockchain, written in typscript.  
It is tested on Goerli testnet  
Created with react-native init  

#### Use crypto-js in React Native
We need to run this command in order to use crypto-js nodeJs module in React Native: 
  
$ ./node_modules/.bin/rn-nodeify  --install  
then import the generated shim.js file in App.js  
  
After that, apply the patch files in patches folder to modify react-native, react-native-os, react-native-tcp in node_modules  
$ npx patch-package

#### Use Opensea SDK and Opensea API
We call the Opensea API to get assets info.  
We call the Opensea javascript SDK to fetch an asset.

##### App Screenshot
![Screenshot](https://i.ibb.co/vkx8v1v/CWA-screen1.png)


##### useful command to see the warning message
npx react-native run-android -- --warning-mode=all

