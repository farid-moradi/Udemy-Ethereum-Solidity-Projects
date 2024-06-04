import factory from '../ethereum/factory';
import { CampaignFactory } from '@/ethereum/typechain-types';
import CampaignListView from '@/components/CampaignListView';

export default async function Home() {
  const campaigns: string[] = await getData();
  return <CampaignListView campaigns={campaigns} />;
}

async function getData() {
  const factoryContract = await factory();
  const campaigns: string[] = await factoryContract.getDeployedCampaigns();

  return campaigns;
}
