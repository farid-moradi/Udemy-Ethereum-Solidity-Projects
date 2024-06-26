import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kickstart',
  description: 'A decentralized kickstarter version',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <div>
            <Header />
            {children}
          </div>
        </Container>
      </body>
    </html>
  );
}
