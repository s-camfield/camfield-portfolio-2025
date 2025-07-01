// app/layout.js
import './globals.css';
import { Inter, Dancing_Script } from 'next/font/google';

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
      </body>
    </html>
  );
}
// app/layout.js
import footer from '../components/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}