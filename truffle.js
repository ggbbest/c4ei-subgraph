require('babel-register')
require('babel-polyfill')
const HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 21004,
      network_id: '21004',
    },
    // ropsten: {
    //   provider: function() {
    //     return new HDWalletProvider(
    //       process.env.MNEMONIC,
    //       `https://ropsten.infura.io/v3/${process.env.ROPSTEN_INFURA_API_KEY}`
    //     )
    //   },
    //   network_id: '3',
    // },
  },
  compilers: {
    solc: {
      version: '0.4.25'    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}
