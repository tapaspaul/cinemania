import '@/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Header from '@/components/header/header.js';
import Footer from '@/components/footer/footer.js';

export const metadata = {
  title: "Cinemania"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
