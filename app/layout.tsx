import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/modules/components/navbar"
import Footer2 from "@/modules/components/Footer/footer2";
import Footer from "@/modules/components/Footer/Footer";

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
     
        <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
