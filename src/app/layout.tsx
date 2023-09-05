import './globals.css';
import { Inter } from 'next/font/google';

import { GlobalContextProvider } from './context/store';
import Navigation from './nav';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Clicar',
  description: 'Seminario de Mediación cultural digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <header>
            <Navigation />
          </header>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
