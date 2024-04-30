'use client';
import React, { useState } from 'react';
import { FormField, Button, Form, Input, Message } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CampaignForm = () => {
  const [minimumContributions, setMinimumContributions] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
    setLoading(true);
    setErrorMessage('');

    try {
      const factoryContract = await factory();
      const transaction = await factoryContract.createCampaign(
        minimumContributions
      );
      await transaction.wait();

      router.push('/');
      router.refresh();
    } catch (err: any) {
      setErrorMessage(err.message);
    }

    setLoading(false);
  };
  return (
    <>
      <h3>Create a Campaign</h3>
      <Form onSubmit={onSubmit}>
        <FormField>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContributions}
            onChange={(event) => {
              setMinimumContributions(event.target.value);
              setErrorMessage('');
            }}
          />
        </FormField>
        <Button type="submit" primary loading={loading}>
          Create!
        </Button>
      </Form>
      {errorMessage != '' && (
        <Message error header="Oops!" content={errorMessage}></Message>
      )}
    </>
  );
};

export default CampaignForm;
