import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "BnR360",
    template: "%s | BnR360",
  },
  icons: {
    apple: [
      { url: '/apple-touch-icon.png', sizes: '57x57', type: 'image/png' }
    ],
  },
  description: "Manage the entire bidding process",
  twitter: {
    card: "summary_large_image"
  },
  verification: {
    google: 'nhX12-I_AyMuRmteAtn4HyKg54ZeAp27xoW-FSCXjxY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
