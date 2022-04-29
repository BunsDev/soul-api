const BN = require("bn.js");
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3002';
const FTM_CHAIN_ID = 250;
const FTM_RPC = process.env.FTM_RPC || 'https://rpc.ftm.tools';

// const LUXOR_TREASURY_ADDRESS = "0x38FA2E36AEf0A9CBbCffF0E507B0c7584705b78e"
const LUXOR_TREASURY_ADDRESS = "0xDF2A28Cc2878422354A93fEb05B41Bd57d71DB24"
const SOUL_DAO = "0x1C63C726926197BD3CB75d86bCFB1DaeBcD87250";
const SOUL_BOND = "0xEdaECfc744F3BDeAF6556AEEbfcDedd79437a01F";
const SUMMONER_ADDRESS = '0xce6ccbB1EdAD497B4d53d829DF491aF70065AB5B';
const PRICE_FETCHER_ADDRESS = '0xba5da8aC172a9f014D42837EE1B678C4Ca96fB0E';
const MULTICALL_ADDRESS = '0xf682Cc4468608fC4eFbaD6a06D9BC72e7790075a';
const AUTOSTAKE_ADDRESS = '0x083423C61B9373050e62E2A6Ec170e663F9c7BFa';

const LUX="0x6671E20b83Ba463F270c8c75dAe57e3Cc246cB2b"
const WLUM="0xa69557e01B0a6b86E5b29BE66d730c0Bfff68208"
const LUM="0x4290b33158F429F40C0eDc8f9b9e5d8C5288800c"
const WFTM="0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"
const DAI="0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E"
const SOUL="0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07"
const SEANCE="0x124B06C5ce47De7A6e9EFDA71a946717130079E6"
const AURA="0x5d8935D0e7b3948dFb7088C127a1CC861445C003"
const SOR="0xEFFd4874AcA3Acd19a24dF3281b5cdAdD823801A"

const FTM_DAI_LP="0xF3d6E8Ecece8647B456d57375Ce0B51B8F0cD40b"
const FTM_WLUM_LP="0xa670C1E02c7AE8B3D575293bfA1F7eBa90F81C99"
const FTM_LUX_LP="0x951BBB838e49F7081072895947735b0892cCcbCD"
const DAI_LUX_LP="0x46729c2AeeabE7774a0E710867df80a6E19Ef851"
const FTM_LEND_DAI="0xFD9BE6a83c7e9cFF48f6D9a3036bb6b20598ED61"
const DAI_LEND_FTM="0xF4Bfdd73FE65D1B46b9968A24443A77ab89908dd"

const SOUL_FTM_LP = "0xa2527af9dabf3e3b4979d7e0493b5e2c6e63dc57"
const FTM_ETH_LP = "0xC615a5fd68265D9Ec6eF60805998fa5Bb71972Cb"
const USDC_DAI_LP = "0x406dE3A93f6B4179E3B21a3d81226B43e1918fd9"

const FTM_BTC_LP = "0xecB41D6B5885E75a149EDA173e92267aa271D895"
const SOUL_USDC_LP = "0xC0A301f1E5E0Fe37a31657e8F60a41b14d01B0Ef"
const FTM_USDC_LP = "0x160653F02b6597E7Db00BA8cA826cf43D2f39556"
const FTM_BNB_LP = "0x52966a12e3211c92909C28603ca3df8465c06c82"
const SEANCE_FTM_LP = "0x8542bEAC34282aFe5Bb6951Eb6DCE0B3783b7faB"
const USDC_FUSD_LP = "0xD5F5E2638d636A98eD4aAEBfd2045441316e0c08"
const FTM_FUSD_LP = "0x1AE16105a7d4bE7DFD9737FD13D9A50AEFed1437"
const BTC_ETH_LP = "0x1FC954d3484bC21E0Ce53A6648a35BBfc03DC9D0"

const _1E18 = new BN("1000000000000000000");

module.exports = {
  API_BASE_URL, SUMMONER_ADDRESS, MULTICALL_ADDRESS, AUTOSTAKE_ADDRESS,
  _1E18, LUX, SOUL, WLUM, WFTM, LUM, DAI, AURA, SOR, SEANCE,
  LUXOR_TREASURY_ADDRESS, SOUL_DAO, SOUL_BOND, PRICE_FETCHER_ADDRESS,
  LUX, FTM_DAI_LP, FTM_WLUM_LP, DAI_LUX_LP,
  SOUL_FTM_LP, FTM_ETH_LP, SOUL_FTM_LP, FTM_ETH_LP, 
  USDC_DAI_LP, SOUL_FTM_LP, FTM_ETH_LP, USDC_DAI_LP, FTM_FUSD_LP,
  FTM_BTC_LP, SOUL_USDC_LP, FTM_USDC_LP, FTM_DAI_LP,
  FTM_BNB_LP, SEANCE_FTM_LP, USDC_FUSD_LP, BTC_ETH_LP,
  FTM_LUX_LP, FTM_LEND_DAI, DAI_LEND_FTM,
  FTM_RPC,
  FTM_CHAIN_ID,
  // FTM_VAULTS_ENDPOINT
};
