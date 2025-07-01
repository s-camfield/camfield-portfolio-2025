import './globals.css';
import { Inter, Dancing_Script } from 'next/font/google';
import Footer from '../components/footer'; // ✅ Correct import

const inter = Inter({ subsets: ['latin'] });
const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap',
});

export const metadata = {
  title: 'Camfield Designs | Graphic Design & Branding Since 2014',
  description: 'Professional graphic design services including branding, logo design, content creation, photography, videography, animation, and web design.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dancingScript.variable}`}>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Footer /> {/* ✅ Now this will render */}
      </body>
    </html>
  );
}