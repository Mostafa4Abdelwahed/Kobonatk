import { IBM_Plex_Sans_Arabic } from "@next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Layout/Navbar";
import Footer from "./_components/Layout/Footer";

const APP_NAME = "Kobonatk";
const APP_DEFAULT_TITLE = "كوبوناتك | خصومات يومية علي جميع المنتجات";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "خصومات يومية علي جميع المنتجات";

const IBM = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#f12711",
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
