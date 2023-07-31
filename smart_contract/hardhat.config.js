require('@nomiclabs/hardhat-waffle');

module.exports = { 
  solidity : '0.8.0',
  networks:{
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/Krsny4Oa-ZAKqxPuKgr3CHKgWD2TeDQn',
      accounts:['8eb1b559378eb31d2ad12c7852eef18bff832f560e461f8ec0b1066d69981e48'],
    },
  },
};