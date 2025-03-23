import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import FloatingShapes from '@/components/FloatingShapes';
import RaindropBackground from '@/components/RaindropBackground';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Chen - Portfolio",
  description: "Personal portfolio website showcasing my projects and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-white font-['Quicksand']`} suppressHydrationWarning>
        <ThemeProvider>
          <FloatingShapes />
          <RaindropBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
