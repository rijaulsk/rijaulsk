import type {Metadata} from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import BackgroundGradientFollow from '@/components/ui/background-gradient-follow';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Rijaul Sk - Digital Presence Builder',
  description: 'I build complete digital presence for businesses. From branding and design to development, SEO, and deployment.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head />
      <body className="font-body bg-background text-foreground antialiased">
        <BackgroundGradientFollow />
        {children}
      </body>
    </html>
  );
}
