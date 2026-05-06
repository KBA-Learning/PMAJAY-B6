import { createClient, http } from "viem";
import {hardhat,hoodi} from 'viem/chains';
import { privateKeyToAccount } from "viem/accounts";
import dotenv from 'dotenv';

dotenv.config();

//   const hardhat = defineChain({
//     id: 31337,
//     name: 'Hardhat',
//     network: 'hardhat',
//     nativeCurrency: {
//       decimals: 18,
//       name: 'Hardhat',
//       symbol: 'HTH',
//     },
//     rpcUrls: {
//       default: {
//         http: ['http://localhost:8545'],
//       },
//       public: {
//         http: ['http://localhost:8545'],
//       },
//     },
//   })

const client = createClient({
    chain:hoodi,
    transport:http(),
    account:privateKeyToAccount(process.env.HARDHAT_PRIVATE_KEY)
})

export default client;