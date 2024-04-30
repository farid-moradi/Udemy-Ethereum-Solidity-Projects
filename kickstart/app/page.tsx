import CardList from '@/components/CardList';
import factory from '../ethereum/factory';
import { Campaign } from '@/ethereum/typechain-types';
import CampaignListView from '@/components/CampaignListView';

export default async function Home() {
  const campaigns: Campaign[] = await getData();
  return <CampaignListView campaigns={campaigns} />;
}

async function getData() {
  const factoryContract = await factory();
  const campaigns = await factoryContract.getDeployedCampaigns();

  return campaigns;
}
