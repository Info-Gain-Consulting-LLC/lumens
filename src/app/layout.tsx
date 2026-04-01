import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumensruaka.com"),
  title: "Lumens | Luxury Residences in Ruaka, Nairobi",
  description:
    "Lumens by Ovation Residences Limited. Premium 1 & 2 bedroom apartments along the Limuru Super Highway, Ruaka, Nairobi. Register your interest today.",
  keywords:
    "Ruaka apartments, Nairobi luxury apartments, Lumens Ruaka, Ovation Residences, 1 bedroom apartment Ruaka, 2 bedroom apartment Ruaka, off plan Nairobi, Limuru road apartments",
  openGraph: {
    title: "Lumens | Luxury Residences in Ruaka",
    description:
      "Premium 1 & 2 bedroom apartments by Ovation Residences Limited. Along the Limuru Super Highway, Ruaka, Nairobi.",
    url: "https://lumensruaka.com",
    siteName: "Lumens",
    images: [
      {
        url: "/images/exterior-b.jpg",
        width: 1200,
        height: 630,
        alt: "Lumens Luxury Residences Ruaka Nairobi",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumens | Luxury Residences in Ruaka",
    description:
      "Premium 1 & 2 bedroom apartments in Ruaka, Nairobi.",
    images: ["/images/exterior-b.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </body>
    </html>
  );
}
