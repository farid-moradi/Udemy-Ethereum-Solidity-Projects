import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const InboxModule = buildModule('InboxModule', (m) => {
  const message = 'Hi There!';
  const lock = m.contract('Inbox', [message]);

  return { lock };
});

export default InboxModule;
