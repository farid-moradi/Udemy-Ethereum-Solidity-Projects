'use client';
import React, { useState } from 'react';
import { Button, Message, Form, FormField, Input } from 'semantic-ui-react';
import { useRouter } from 'next/navigation';
import { ethers } from 'ethers';
import Campaign from '@/ethereum/campaign';
import Link from 'next/link';

interface Props {
  address: string;
}

const RequestForm = ({ address }: Props) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [recipient, setRecipient] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
    setLoading(true);
    setErrorMessage('');

    try {
      const campaign = await Campaign(address);
      const transaction = await campaign.createRequest(
        description,
        ethers.parseEther(value),
        recipient
      );
      await transaction.wait();

      router.push(`/campaigns/${address}/requests`);
      router.refresh();
    } catch (err: any) {
      setErrorMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Link href={`/campaigns/${address}/requests`}>Back</Link>
      <h3>Create a Request</h3>
      <Form onSubmit={onSubmit}>
        <FormField>
          <label>Description</label>
          <Input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormField>
        <FormField>
          <label>Value in Ether</label>
          <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </FormField>
        <FormField>
          <label>Recipient</label>
          <Input
            value={recipient}
            onChange={(event) => setRecipient(event.target.value)}
          />
        </FormField>
        <Button primary loading={loading}>
          Create!
        </Button>
      </Form>
      {errorMessage != '' && (
        <Message error header="Oops!" content={errorMessage}></Message>
      )}
    </>
  );
};

export default RequestForm;
