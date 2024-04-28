import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const CampaignModule = buildModule('CampaignModule', (m) => {
  const lock = m.contract('CampaignFactory');

  return { lock };
});

export default CampaignModule;
