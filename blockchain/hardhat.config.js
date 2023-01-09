require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");
const ETHERSCAN_API_KEY = "";
const PRIVATE_KEY = "";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url: `https://goerli.infura.io/v3/${ETHERSCAN_API_KEY}`,
      accounts: [PRIVATE_KEY]
      //url:process.env.RINKEBY_URL || "",
      //accounts:process.env.PRIVATE_KEY!==undefined?[process.env.PRIVATE_KEY]:[],
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {

    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ""
  }
};
