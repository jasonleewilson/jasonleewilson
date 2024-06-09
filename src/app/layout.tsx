import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "../app/components/Navbar.js";
import Footer from "../app/components/Footer";
import GreetUser from "@/app/components/GreetUser";
import { Providers } from "./providers";

const myFont = Oswald({
  subsets: ["latin"],
  weight: "400",
  variable: "--my-font-family",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jasonleewilson.com"),
  title: {
    default: "jasonleewilson.com",
    template: "%s - jasonleewilson.com",
  },
  description:
    "Super cool web engineer / developer.  I offer a complete solution ranging from website creation, design and maintenance for internet-based clients worldwide.",
  openGraph: {
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <GoogleTagManager gtmId='GTM-N6T8XD' />
      {/* <body className='flex flex-col h-screen bg-gray-50'> */}

      <body className={myFont.className}>
        <Providers>
          {/* <Providers enableSystem={false}> */}
          <div className='flex flex-col h-screen bg-gray-100 mt-16 md:mt-20 dark:bg-black'>
            <Navbar />
            {children}
            <Footer />
            <GreetUser />
          </div>
        </Providers>
      </body>
    </html>
  );
}
