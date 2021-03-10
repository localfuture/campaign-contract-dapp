import web3 from './web3';

const address = '0x6a7803fe6016d9a5270807e65cbfe65cd52bbf76';

const abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "deployedCampaigns",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "minimum",
        "type": "uint256"
      }
    ],
    "name": "createCampaign",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDeployedCampaigns",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export default new web3.eth.Contract(abi, address);
