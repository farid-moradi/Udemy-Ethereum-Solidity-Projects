'use client';
import React from 'react';
import { Button } from 'semantic-ui-react';
import Link from 'next/link';

interface Props {
  content: string;
  icon: string;
}

const ButtonExampleLabeledIconShorthand = ({ content, icon }: Props) => (
  <Link href="/campaigns/new">
    <Button
      floated="right"
      content={content}
      icon={icon}
      labelPosition="left"
      primary
    />
  </Link>
);

export default ButtonExampleLabeledIconShorthand;
