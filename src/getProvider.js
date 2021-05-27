import Web3 from 'web3';

const apiKey = 'infura_api_key';

export const getProvider = () => {
    const options = {
        headers: [
            {
                name: 'Access-Control-Allow-Origin',
                value: '*'
            }
        ]
    }

    const provider = new Web3.providers.HttpProvider(
        `https://mainnet.infura.io/v3/${apiKey}`, options
    );

    return provider;
}