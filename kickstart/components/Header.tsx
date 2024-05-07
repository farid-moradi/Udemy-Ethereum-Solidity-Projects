'use client';
import React, { useState } from 'react';
import { MenuMenu, MenuItem, Menu } from 'semantic-ui-react';
import Link from 'next/link';

const Header = () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link href="/">
        <MenuItem name="crowdcoin">CrowdCoin</MenuItem>
      </Link>

      <MenuMenu position="right">
        <Link href="/">
          <MenuItem name="campaigns">Campaigns</MenuItem>
        </Link>

        <Link href="/campaigns/new">
          <MenuItem name="addcampaign">+</MenuItem>
        </Link>
      </MenuMenu>
    </Menu>
  );
};

export default Header;
