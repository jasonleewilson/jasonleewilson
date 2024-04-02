import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

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
  description: "Super cool web engineer / developer",
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
    <html lang='en' className='bg-gray-100'>
      <GoogleTagManager gtmId='GTM-N6T8XD' />
      {/* <body className='flex flex-col h-screen bg-gray-50'> */}

      <body className={myFont.className}>
        <div className='flex flex-col h-screen bg-gray-100 p-4'>
          <Navbar />
          {children}
          <Footer />
          <form name='contactjasonleewilson' data-netlify='true' hidden>
            <div>
              <input type='text' id='name' name='name' />
            </div>
            <div>
              <input type='text' id='email' name='email' />
            </div>
            <div>
              <textarea name='message' id='message'></textarea>
            </div>
            <div>
              <button type='submit' value='Submit Message'>
                Send
              </button>
            </div>
          </form>
        </div>
      </body>
    </html>
  );
}
