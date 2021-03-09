import web3 from './web3';
import CampaignFactory from './build/contracts/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), '0x6a7803fe6016d9a5270807e65cbfe65cd52bbf76');

export default instance;
