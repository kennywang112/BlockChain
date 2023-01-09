const hre = require("hardhat");

async function main() {

  const Stone= await hre.ethers.getContractFactory("Stone");
  const stone = await Stone.deploy();
  await stone.deployed();


  console.log("Stone deployed to ",stone.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});




