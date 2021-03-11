import React, {useState, useEffect} from 'react';
import factory from '../Ethereum/factory';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function Campaign() {
    const [campaignAddress, setcampaignAddress] = useState([]);

    useEffect(() => {
        async function getDeployedCampaigns() {
            const campaignAdd = await factory.methods.getDeployedCampaigns().call();
            const item = campaignAdd.map(address => {
              return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true,
                raised: true,
                color: 'red'
              };
            });

            setcampaignAddress(item);
          }

        getDeployedCampaigns();
    },[]);

    return (
      <>
        <h1>Campaign Contract</h1>
        <Card.Group centered items={campaignAddress}/>
      </>
    );
  }

  export default Campaign;
