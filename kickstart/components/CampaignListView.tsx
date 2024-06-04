// 'use client';
import React from 'react';
import ButtonExampleLabeledIconShorthand from './Button';
import CardList from './CardList';
import { Campaign, CampaignFactory } from '@/ethereum/typechain-types';

export interface Props {
  campaigns: string[];
}

const CampaignListView = ({ campaigns }: Props) => {
  return (
    <div>
      <h3>Open Campaigns</h3>

      <ButtonExampleLabeledIconShorthand
        content="Create Campaign"
        icon="add circle"
      />

      <CardList campaigns={campaigns} />
    </div>
  );
};

export default CampaignListView;
