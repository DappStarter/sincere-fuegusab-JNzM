require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note oil protect guess process success share'; 
let testAccounts = [
"0xcc2aaa54b31ab72a3de7c3c148fa53a99115ce75f084befddf46fa6ffe4d49d2",
"0x490d2f4b095709f3bdb1ef5be6b3fb692f6b4dd02abaa5bd036eba6bd243fefb",
"0xc0e59f85a6f3466842e26770a14065809690c9566c4b5cde82b9700d6b692bab",
"0x11c56c448ad339433b239bb7fbe4daa6dddc65af69a979bf6bca870dad3a197c",
"0xbff27c1ea0d11c7586e3a2a0bb0990695a02dcd8f094bf76678f47cf5c9363cc",
"0x932e95e0051865a8fbd9983ce17cd5fb09e86348b780c3a9d1e3329de3269698",
"0x19ebb8d2f679386e72c3cf3d5cd7faf19f6726c213ed2d767708ad544ac7b10a",
"0x80c6408869718957466a680edba399da99d9a7b9a72a5d021e0292480f99b661",
"0xd96b1a6ef55174da1e62c76c5257f4361315d82890f0a916f2e987eadbe92bf4",
"0xfeeb22821dc5d3a491a3c94d83feda11869bf972cca80bcb24d1c5ce9694ec83"
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

