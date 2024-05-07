import React from 'react';
import RequestForm from './RequestForm';

interface Props {
  params: { id: string };
}

const RequestNew = ({ params }: Props) => {
  return <RequestForm address={params.id} />;
};

export default RequestNew;
