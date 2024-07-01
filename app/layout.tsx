import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/modules/components/navbar"
import Footer2 from "@/modules/components/Footer/footer2";
import AuthProvider from "@/modules/components/AuthProvider/AuthProvider";
import Footer from "@/modules/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Book-Wala",
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
        <body className="bg-dark-1">
          <NavBar/>
          <div className="pt-20">
            {children}
            <Toaster />
            <Footer/>
          </div>
      </body>
     </AuthProvider>
    </html>
  );
}
