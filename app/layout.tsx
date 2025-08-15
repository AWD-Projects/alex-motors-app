import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Motors - Mobile Auto Repair Service in Mexico City",
  description: "Professional mobile auto repair service in Mexico City. Fast, reliable automotive solutions delivered to your location. Expert diagnostics, maintenance, and repairs.",
  keywords: ["auto repair", "mobile mechanic", "car service", "Mexico City", "automotive", "brake service", "oil change", "diagnostics"],
  authors: [{ name: "Alex Motors" }],
  openGraph: {
    title: "Alex Motors - Mobile Auto Repair Service",
    description: "Professional mobile auto repair service in Mexico City. Fast, reliable automotive solutions delivered to your location.",
    url: "https://alexmotors.mx",
    siteName: "Alex Motors",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Motors - Mobile Auto Repair Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Motors - Mobile Auto Repair Service",
    description: "Professional mobile auto repair service in Mexico City. Fast, reliable automotive solutions delivered to your location.",
    images: ["/twitter-image.jpg"],
    creator: "@alexmotors",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-id",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}