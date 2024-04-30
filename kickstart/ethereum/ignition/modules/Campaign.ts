import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const CampaignModule = buildModule('CampaignModule', (m) => {
  const campaignFactory = m.contract('CampaignFactory');

  return { campaignFactory };
});

export default CampaignModule;
