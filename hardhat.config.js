
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */


const { API_URL, PRIVATE_KEY } = process.env;


module.exports = {
  solidity: "0.8.9",
  networks: {
    polygon_mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  allowUnlimitedContractSize: true,
};
