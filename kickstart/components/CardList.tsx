'use client';
import { Campaign } from '@/ethereum/typechain-types';
import React from 'react';
import { CardGroup } from 'semantic-ui-react';
import Link from 'next/link';

interface Props {
  campaigns: Campaign[];
}

const CardList = ({ campaigns }: Props) => {
  const renderContents = () => {
    const items = campaigns.map((address: Campaign) => {
      return {
        header: address,
        description: <Link href={`/campaigns/${address}`}>View Campaign</Link>,
        fluid: true,
      };
    });

    return <CardGroup items={items} />;
  };

  return <div>{renderContents()}</div>;
};

export default CardList;
