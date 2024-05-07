'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from 'semantic-ui-react';

interface Props {
  address: string;
}

const CreateRequest = ({ address }: Props) => {
  return (
    <Link href={`/campaigns/${address}/requests/new`}>
      <Button primary floated="right" style={{ marginBottom: 10 }}>
        Create a Request
      </Button>
    </Link>
  );
};

export default CreateRequest;
