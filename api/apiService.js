const rp = require('request-promise');
const axios = require('axios');
// In Node.js
const Web3 = require('web3');

const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
        start: '1',
        limit: '20',
        convert: 'USD'
    },
    headers: {
        'X-CMC_PRO_API_KEY': '2d66ab7f-c208-4f40-ba6b-d3d0c719acd1'
    },
    json: true,
    gzip: true
};

const coinMarkApi = async () => {
    let data = await rp(requestOptions);
    return data;
};

const etherScanApi = async () => {
    let web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

    try {
        const response = await axios.get(
            'https://api.etherscan.io/api?module=logs&action=getLogs&fromBlock=13308913  &toBlock=latest&address=0x9798dF2f5d213a872c787bD03b2b91F54D0D04A1&apikey=8I79I7E5ETRGUT1XFBSTB7QGJ9ND8WW78M'
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    coinMarkApi,
    etherScanApi
};
