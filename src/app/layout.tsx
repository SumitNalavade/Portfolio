import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sumit Nalavade Portfolio",
  description: "Sumit Nalavade Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased container max-w-7xl mx-auto`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
