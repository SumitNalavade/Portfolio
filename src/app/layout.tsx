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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
          <Navbar />

          <main className="flex-1 container">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
