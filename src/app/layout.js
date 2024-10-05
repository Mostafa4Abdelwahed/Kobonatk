import { IBM_Plex_Sans_Arabic } from "@next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Layout/Navbar";
import Footer from "./_components/Layout/Footer";

const IBM = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "كوبوناتك | خصومات علي كل المنتجات",
  description: "خصومات علي كل المنتجات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body dir="rtl" className={`${IBM.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
