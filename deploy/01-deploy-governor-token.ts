import { HardhatRuntimeEnvironment } from "hardhat/types";

import { DeployFunction } from "hardhat-deploy/types";
// import { NetworkConfig,  } from "hardhat/types";
// import { developmentChains } from "../helper-hardhat-config";
// import verify from '../utils/verify'

const deployGovernanceToken: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments, network } = hre;

  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("Deploying Governance Token...");

  const governanceToken = await deploy("GovernanceToken", {
    from: deployer,
    args: [],
    log: true,
    // waitConfirmations: network.config.blockConfirmations || 1,
    // waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  });

  log(`GovernanceToken at ${governanceToken.address}`)
//   if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
//     await verify(governanceToken.address, [])
//   }
//   log(`Delegating to ${deployer}`)
//   await delegate(governanceToken.address, deployer)
//   log("Delegated!")
}


export default deployGovernanceToken;
