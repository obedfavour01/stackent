import type { Metadata } from 'next';
import { Mona_Sans } from 'next/font/google';
import './globals.css';

  

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Stackent',
  description: "Crypto's Finest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">


        <body className={`${monaSans.variable} antialiased`}>{children}</body>
    
    </html>
  );
}
