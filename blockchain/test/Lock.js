const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe('Stone',function(){
  it('changed',async function(){
    const Stone=await hre.ethers.getContractFactory('Stone');
    const stone=await Stone.deploy();
    await stone.deployed();

  })
})