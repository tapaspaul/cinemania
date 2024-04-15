import "./globals.css";
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Montserrat } from 'next/font/google';
import '@/assets/css/style.css';
import Header from '@/components/header/header.js';
import Footer from '@/components/footer/footer.js';

export const metadata = {
  title: "Cinemania"
};
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--bs-font-sans-serif'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <main id="main_wrapper">
          <Header></Header>
          <div id="site_content">
            {children}
          </div>
          <Footer></Footer>
        </main>
      </body>
    </html>
  );
}
