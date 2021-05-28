import React from 'react';
import Web3 from 'web3';
import { getProvider } from '../getProvider';
import classes from './Home.module.css';

const Home = () => {
    const address = '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B';

    const getBalance = () => {
        const web3 = new Web3(getProvider());

        web3.eth.getBalance(address).then(
            result => {
                const balance = web3.utils.fromWei(result, "ether");
                
                console.log(balance);
            },
            error => {
                console.log(error);
            }
        );
    }

    const getNonce = () => {
        const web3 = new Web3(getProvider());

        web3.eth.getTransactionCount(address).then(
            result => {
                console.log(result);
            },
            error => {
                console.log(error);
            }
        );
    }


    return (
        <div>
            <h1>Home page</h1>
            <div className={classes.buttonWrapper}>
                <button
                    className={classes.button}
                    onClick={getBalance}
                >
                    Balance
                </button>
                <button
                    className={classes.button}
                    onClick={getNonce}
                >
                    Nonce
                </button>
            </div>
        </div>
    );
}

export default Home;
