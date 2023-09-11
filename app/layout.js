import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'PWA Contracts',
  description: 'ระบบแจ้งเตือนระยะเวลาค้ำประกันสัญญา',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable}`}>
      <body className='grid grid-cols-1 mx-5 my-2'>{children}</body>
    </html>
  );
}
