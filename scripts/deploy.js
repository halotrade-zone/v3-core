module.exports = async ({
  getNamedAccounts,
  deployments,
}) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log('Deploying contracts UniswapV3Factory with the account:', deployer);

  const btc = await deploy("UniswapV3Factory", {
    from: deployer,
    log: true,
    autoMine: true,
  });

};

module.exports.tags = ['UniswapV3Factory'];
