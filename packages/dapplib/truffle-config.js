require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember unit gesture glove flush genius'; 
let testAccounts = [
"0x07bf2a5f19ddb8075e305fda3a0e540e30283e6d3a5260bc3357054d1056c338",
"0xf541c3ca848dfba5f6dd72f4510254deb063f80ee56344224a5d380b437961ae",
"0x49343cc80e084eb0ee048deb7445cea831002958a4d22730024b5a79c32db761",
"0x9693a3bde7fff1a68deb9ecd7f16a366a6d0719ec0f968c90b308e1a9d0a638a",
"0xd9db368ffe3e917db2a27eee62b38b9c844b6ef3d41563c08bea9464208c56a1",
"0x61f6669257199da62a333ffd05c7698cb5144184268224cbbbe86934e7965eb2",
"0x06d1b53ce29b641b0476f283adfeac062315404d024c3532f5811562407b4232",
"0x41841b8a2ff08b032d81a584114f3c6ce0c7d1417fc53f83c5ed41becd6646b7",
"0xcb818dfc6401f488623b137215230d2119b71aee12f4ec4e42c6e9a61c8cd7c3",
"0xa5313cc5c60b326b984f410212dffb7e2e517cff398687166c0ebc2bd21571eb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

