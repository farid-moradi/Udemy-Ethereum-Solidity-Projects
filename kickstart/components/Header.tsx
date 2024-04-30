'use client';
import React, { Component, useState } from 'react';
import { MenuMenu, MenuItem, Menu } from 'semantic-ui-react';
import Link from 'next/link';

const Header = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick =
    (name: string) =>
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      setActiveItem(name);
    };

  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link href="/">
        <MenuItem
          name="crowdcoin"
          active={activeItem === 'crowdcoin'}
          onClick={handleItemClick('crowdcoin')}
        >
          CrowdCoin
        </MenuItem>
      </Link>

      <MenuMenu position="right">
        <Link href="/">
          <MenuItem
            name="campaigns"
            active={activeItem === 'campaigns'}
            onClick={handleItemClick('campaigns')}
          >
            Campaigns
          </MenuItem>
        </Link>

        <Link href="/campaigns/new">
          <MenuItem
            name="addcampaign"
            active={activeItem === 'addcampaign'}
            onClick={handleItemClick('addcampaign')}
          >
            +
          </MenuItem>
        </Link>
      </MenuMenu>
    </Menu>
  );
};

export default Header;
