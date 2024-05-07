'use client';
import React, { useState } from 'react';
import { FormField, Button, Form, Input, Message } from 'semantic-ui-react';
import { useRouter } from 'next/navigation';
import { ethers } from 'ethers';
import Campaign from '@/ethereum/campaign';

interface Props {
  address: string;
}

const ContributeForm = ({ address }: Props) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
    setLoading(true);
    setErrorMessage('');

    try {
      const campaign = await Campaign(address);
      const transaction = await campaign.contribute({
        value: ethers.parseEther(value),
      });
      await transaction.wait();
      router.refresh();
    } catch (err: any) {
      setErrorMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <FormField>
          <label>Amount to Contribution</label>
          <Input
            label="ether"
            labelPosition="right"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              setErrorMessage('');
            }}
          />
        </FormField>
        <Button type="submit" primary loading={loading}>
          Contribute!
        </Button>
      </Form>
      {errorMessage != '' && (
        <Message error header="Oops!" content={errorMessage}></Message>
      )}
    </>
  );
};

export default ContributeForm;
