import React from 'react';

interface Props {
  params: { id: string };
}

const ViewCampaign = ({ params }: Props) => {
  return <div>{params.id}</div>;
};

export default ViewCampaign;
