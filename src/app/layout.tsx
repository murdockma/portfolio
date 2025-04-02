import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import FloatingShapes from '@/components/FloatingShapes';
import RaindropBackground from '@/components/RaindropBackground';
import BackgroundImage from '@/components/BackgroundImage';

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
    <html lang="en" suppressHydrationWarning className="relative">
      <body className={`${inter.className} text-gray-900 dark:text-gray-300 font-['Quicksand'] relative min-h-screen text-base md:text-lg`} suppressHydrationWarning>
        <ThemeProvider>
          <BackgroundImage />
          <div className="relative z-0">
            <div className="relative">
              <FloatingShapes />
              <RaindropBackground />
              <Navbar />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
