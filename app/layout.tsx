import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';
import ScrollToTop from '@/components/partials/ScrollToTop';

export const metadata: Metadata = {
  title: 'MyNeedFully',
  description: 'MyNeedFully is a platform that connects people in need with those who can help. Create and share wishlists of essential items to support individuals and families in crisis.',
};

export default function RootLayout({children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
      >
        <ScrollToTop /> {/* 👈 Add it here */}
        <Header />
        {children}
        <Footer />
      </body> 
    </html>
  );
}
