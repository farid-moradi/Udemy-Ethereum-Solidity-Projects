'use client';
import React, { memo } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
} from 'semantic-ui-react';
import RequestRow from './RequestRow';

export interface Request {
  description: string;
  value: number;
  recipient: string;
  complete: boolean;
  approvalCount: number;
}

interface Props {
  address: string;
  requestsCount: number;
  requests: Request[];
  approversCount: number;
}

const CreateTable = memo(
  ({ address, requestsCount, requests, approversCount }: Props) => {
    return (
      <>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Description</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Recipient</TableHeaderCell>
              <TableHeaderCell>Approval Count</TableHeaderCell>
              <TableHeaderCell>Approve</TableHeaderCell>
              <TableHeaderCell>Finalize</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request, index) => (
              <RequestRow
                key={index}
                id={index}
                request={request}
                address={address}
                approversCount={approversCount}
              />
            ))}
          </TableBody>
        </Table>
        <div>Found {requestsCount} requests.</div>
      </>
    );
  }
);

CreateTable.displayName = 'CreateTable';

export default CreateTable;
