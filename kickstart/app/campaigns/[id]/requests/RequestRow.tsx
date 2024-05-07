'use client';
import React, { memo } from 'react';
import { TableRow, TableCell, Button } from 'semantic-ui-react';
import Campaign from '@/ethereum/campaign';
import { Request } from './CreateTable';

interface Props {
  id: number;
  request: Request;
  address: string;
  approversCount: number;
}

const RequestRow = memo(({ id, request, address, approversCount }: Props) => {
  const onApprove = async () => {
    const campaign = await Campaign(address);
    try {
      await campaign.approveRequest(id);
    } catch (err) {
      console.log(err);
    }
  };

  const onFinalize = async () => {
    const campaign = await Campaign(address);
    await campaign.finalizeRequest(id);
  };

  const readyToFinalize =
    Number(request.approvalCount) > Number(approversCount) / 2;

  return (
    <TableRow
      disabled={request.complete}
      positive={readyToFinalize && !request.complete}
    >
      <TableCell>{id}</TableCell>
      <TableCell>{request.description}</TableCell>
      <TableCell>{request.value?.toString()}</TableCell>
      <TableCell>{request.recipient}</TableCell>
      <TableCell>
        {request.approvalCount?.toString()}/{approversCount?.toString()}
      </TableCell>
      <TableCell>
        {request.complete ? null : (
          <Button color="green" basic onClick={onApprove}>
            Approve
          </Button>
        )}
      </TableCell>
      <TableCell>
        {request.complete ? null : (
          <Button color="teal" basic onClick={onFinalize}>
            Finalize
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
});

export default RequestRow;
