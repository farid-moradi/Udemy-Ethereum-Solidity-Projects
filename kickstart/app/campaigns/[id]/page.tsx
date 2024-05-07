import React from 'react';
import Campaign from '@/ethereum/campaign';
import CampaignCardList from '@/components/CampaignCardList';
import { ethers } from 'ethers';
interface Props {
  params: { id: string };
}

const ViewCampaign = async ({ params }: Props) => {
  const campaign = await Campaign(params.id);
  const summary = await campaign.getSummary();

  const {
    minimumContribution,
    balance,
    requestsCount,
    approversCount,
    manager,
  } = {
    minimumContribution: summary[0],
    balance: summary[1],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };

  const items = [
    {
      header: manager,
      meta: 'Address of Manager',
      description:
        'The manager created this campaign and can create requests to withdraw money',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: ethers.formatUnits(minimumContribution, 'wei'),
      meta: 'Minimum Contribution (wei)',
      description:
        'You must contribute at least this much wei to become an approver',
    },
    {
      header: requestsCount.toString(),
      meta: 'Number of Requests',
      description:
        'A request tries to withdraw money from the contract. Requests must be approved by approvers',
    },
    {
      header: approversCount.toString(),
      meta: 'Number of Approvers',
      description: 'Number of people who have already donated to this campaign',
    },
    {
      header: ethers.formatUnits(balance),
      meta: 'Campaign Balance (ether)',
      description:
        'The balance is how much money this campaign has left to spend.',
    },
  ];

  return <CampaignCardList items={items} address={params.id} />;
};

export default ViewCampaign;
