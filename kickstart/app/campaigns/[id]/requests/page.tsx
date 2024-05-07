import React from 'react';
import CreateRequest from './CreateRequest';
import Campaign from '@/ethereum/campaign';
import CreateTable from './CreateTable';
import { ethers } from 'ethers';
export interface Request {
  description: string;
  value: number;
  recipient: string;
  complete: boolean;
  approvalCount: number;
}

interface Props {
  params: { id: string };
}

const getRequests = async (params: { id: string }) => {
  const campaign = await Campaign(params.id);
  const requestsCount = await campaign.numRequests();
  const approversCount = await campaign.approversCount();

  const getRequests = async () => {
    return Promise.all(
      Array.from(
        { length: Number(requestsCount) },
        async (_, index) => await campaign.requests(index)
      )
    );
  };

  const requestsData = await getRequests();

  const requests: Request[] = requestsData.map((data, index) => ({
    description: data.description,
    value: Number(ethers.formatEther(data.value)),
    recipient: data.recipient,
    complete: data.complete,
    approvalCount: Number(data.approvalCount),
  }));

  return { requestsCount, approversCount, requests };
};

const RequestsPage = async ({ params }: Props) => {
  const { requestsCount, approversCount, requests } = await getRequests(params);

  return (
    <>
      <h3>Requests</h3>
      <CreateRequest address={params.id} />
      {requests.length > 0 && (
        <CreateTable
          address={params.id}
          requestsCount={requestsCount}
          requests={requests}
          approversCount={approversCount}
        />
      )}
    </>
  );
};

export default RequestsPage;
