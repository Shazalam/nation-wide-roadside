import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "24/7 Towing & Roadside Assistance | Fast Tow Service USA",
  description:
    "Nationwide 24/7 towing and roadside assistance in the USA for individual drivers and commercial fleets. Jump starts, tire changes, fuel delivery, lockouts, and emergency towing.",
  keywords: [
    "towing service",
    "tow truck near me",
    "roadside assistance",
    "24/7 towing",
    "emergency towing",
    "fleet roadside assistance",
    "commercial towing",
    "USA",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="bg-brand-mutedBg text-slate-900 selection:bg-brand-primary selection:text-white antialiased">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
