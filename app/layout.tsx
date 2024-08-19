import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/modules/components/navbar";
import Footer from "@/modules/components/Footer/Footer";
import AuthProvider from "@/modules/components/AuthProvider/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "BookOwl",
  description: "Book Selling E-Commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="flex flex-col min-h-screen bg-dark-1">
          <NavBar />
          <div className="flex-1 pt-20">
            {children}
          </div>
          <Toaster />
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
