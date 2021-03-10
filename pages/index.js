import React, {useState, useEffect} from 'react';
import factory from '../Ethereum/factory';

function Campaign() {
    const [campaignAddress, setcampaignAddress] = useState([]);
    
    useEffect(() => {
        async function getDeployedCampaigns() {
            const campaignAdd = await factory.methods.getDeployedCampaigns().call();
            setcampaignAddress(campaignAdd);
          }

        getDeployedCampaigns();
    },[]);

    return (
      <>
        <h1>Campaign Contract</h1>
        <p>{campaignAddress}</p>
      </>
    );
  }

  export default Campaign;
