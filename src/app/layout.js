import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "../components/providers";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import siteMetadata from "../../data/sitemetadata";
import { Suspense } from "react";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  generator: 'Next.js',
  applicationName:siteMetadata.siteRepo,
  referrer: 'origin-when-cross-origin',
  keywords: ['prologue', '序言'],
  authors: [{ name: '槐序', url: siteMetadata.siteUrl+"/about" }],
  creator: siteMetadata.author,
  publisher: siteMetadata.publishName,
  title: siteMetadata.title,
  description: siteMetadata.description,
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    locale: siteMetadata.language,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="mx-auto px-6 selection:bg-[#c8ffff] dark:selection:bg-[#006482a2] max-w-7xl">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
