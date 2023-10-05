import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { NextAuthProvider } from "@/providers/auth";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import ToastProvider from "@/providers/toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Trips",
  description: "Sistema de reserva de viagens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <NextAuthProvider>
          <ToastProvider>
            <Header />
            {children}
            <Footer />
          </ToastProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
