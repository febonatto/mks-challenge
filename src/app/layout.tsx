import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { ReactNode } from 'react';

import { GlobalStyles } from './styles/globals';

import { StyledComponentsRegistry } from '@/config/lib/StyledComponentsRegistry';
import { StoreProvider } from '@/config/lib/StoreProvider';
import { QueryClientProviderComponent } from '@/config/lib/QueryClientProviderComponent';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MKS - Development Challenge',
  description: 'Desafio de programação da empresa MKS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <GlobalStyles />
        <QueryClientProviderComponent>
          <StyledComponentsRegistry>
            <StoreProvider>{children}</StoreProvider>
          </StyledComponentsRegistry>
        </QueryClientProviderComponent>
      </body>
    </html>
  );
}
