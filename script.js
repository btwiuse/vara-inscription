import {
  isWeb3Injected,
  web3Accounts,
  web3AccountsSubscribe,
  web3Enable,
  web3EnablePromise,
  web3FromAddress,
  web3FromSource,
} from "@polkadot/extension-dapp";

console.log("isWeb3Injected:", isWeb3Injected);

if (!isWeb3Injected) {
  window.alert("Please install/enable polkadot.js extension");
}
await web3Enable("page");
