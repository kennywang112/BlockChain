const hre = require("hardhat");

async function main() {

  const StoneNFT= await hre.ethers.getContractFactory("StoneNFT");
  const stonenft = await StoneNFT.deploy();
  await stonenft.deployed();


  console.log("StoneNFT deployed to ",stonenft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


