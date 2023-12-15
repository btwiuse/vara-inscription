// import { ProgramMetadata } from "@gear-js/api";

import { ApiPromise, WsProvider } from "@polkadot/api";
import * as types from "@polkadot/types";
import * as util from "@polkadot/util";
import * as hashing from "@polkadot/util-crypto";
import uiKeyring from "@polkadot/ui-keyring";

async function initApi() {
  const PROVIDER = "wss://rpc.vara-network.io";
  const provider = new WsProvider(PROVIDER);
  return await ApiPromise.create({ provider });
}

console.log("api is initializing. Please hold on...");

window.api = await initApi();
window.types = types;
window.util = util;
window.hashing = hashing;
window.uiKeyring = uiKeyring;
uiKeyring.loadAll({
  isDevelopment: true,
  ss58Format: api.consts.system.ss58Prefix.toNumber(),
});
window.keyring = uiKeyring.keyring;

console.log("ss58 prefix:", api.consts.system.ss58Prefix.toNumber());
