"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageProvider } from "@/context/LanguageContext";
import SidebarLayout from "@/component/SidebarLayout";
import Navbar from "@/component/Navbar";
import { ReactNode } from "react";
import Footer from "@/component/Footer";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <LanguageProvider>

          {/* ثابتين خارج animation */}
          <Navbar />
           {/*  <SidebarLayout /> */} 

          {/* animation فقط للصفحة */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
             
            >
              {children}
            </motion.div>

            <Footer />
          </AnimatePresence>

        </LanguageProvider>
      </body>
    </html>
  );
}