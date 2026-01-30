import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Sidebar } from './components/layout/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mezo Vaults - Static Demo',
  description: 'Optimize your BTC, MEZO, and MUSD positions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>
      </body>
    </html>
  );
}