import Web3 from 'web3';

const apiKey = 'infura_api_key';

export const getProvider = () => {

    const provider = new Web3.providers.HttpProvider(
        `https://mainnet.infura.io/v3/${apiKey}`
    );

    return provider;
}