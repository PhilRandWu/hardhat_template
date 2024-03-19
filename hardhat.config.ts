import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import 'dotenv/config';

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {version: "0.8.24"}
        ]
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
            1: 0
        },
        player: {
            default: 1
        },
    }
};

export default config;
