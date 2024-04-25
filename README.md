# Uniswap V3
For Halo, we only deploy the `UniswapV3Factory` contract, which is the factory contract for Uniswap V3. This contract is one of parameters for the `UniswapV3Router` contract, which is found in the `v3-periphery` package.
To deploy `UniswapV3Factory`, users need to do the following steps:
1. Install the dependencies:
```bash
yarn
```
2. Update the private key of `deployer` in `.secret` file.
3. Update the information of the network in `hardhat.config.js` file.
4. Run the following command:
```bash
npx hardhat deploy --network <NETWORK>
```

After deploying the `UniswapV3Factory` contract, users can use the address of deployed contract to deploy the `UniswapV3Router` contract.
