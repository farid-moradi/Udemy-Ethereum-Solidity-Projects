'use client';
import React from 'react';
import CardGroup from 'semantic-ui-react/dist/commonjs/views/Card/CardGroup';
import { Campaign, CampaignFactory } from '@/ethereum/typechain-types';
import Link from 'next/link';

interface Props {
  campaigns: string[];
}

const CardList = ({ campaigns }: Props) => {
  let items = campaigns.map((address) => {
    return {
      header: address,
      description: <Link href={`/campaigns/${address}`}>View Campaign</Link>,
      fluid: true,
    };
  });

  return <CardGroup items={items} />;
};

export default CardList;
