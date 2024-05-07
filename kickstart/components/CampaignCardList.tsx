'use client';
import React from 'react';
import {
  CardGroup,
  Grid,
  GridColumn,
  Button,
  GridRow,
} from 'semantic-ui-react';
import ContributeForm from './ContributeForm';
import Link from 'next/link';

interface Items {
  header: any;
  meta: string;
  description: string;
}

interface Props {
  items: Items[];
  address: string;
}

const CampaignCardList = ({ items, address }: Props) => {
  return (
    <>
      <h3>Campaign Show</h3>
      <Grid>
        <GridRow>
          <GridColumn width={10}>
            <CardGroup items={items} />
          </GridColumn>
          <GridColumn width={6}>
            <ContributeForm address={address} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <Link href={`/campaigns/${address}/requests`}>
              <Button primary>View Requests</Button>
            </Link>
          </GridColumn>
        </GridRow>
      </Grid>
    </>
  );
};

export default CampaignCardList;
