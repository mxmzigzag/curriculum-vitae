import type { Metadata } from "next";
import { Roboto, Sedgwick_Ave_Display } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const sedgwick = Sedgwick_Ave_Display({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Max Zahorskyi",
  description: "Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="container px-4 mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
