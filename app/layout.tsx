import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lato } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato'
});

export const metadata: Metadata = {
  title: 'Crowns Medical Group - Royal Care for Every Client',
  description: 'Professional wound and injury care services. Providing compassionate, evidence-based care to help you heal faster and live better.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lato.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
