import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import FloatingShapes from '@/components/FloatingShapes';
import RaindropBackground from '@/components/RaindropBackground';
import BackgroundImage from '@/components/BackgroundImage';

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Michael Murdock - Data Engineer & Analytics Engineer",
  description: "Portfolio of Michael Murdock, a Data Engineer and Analytics Engineer specializing in data infrastructure and visualization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} text-gray-900 dark:text-gray-300 font-['Quicksand'] relative min-h-screen text-base md:text-lg antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="relative min-h-screen">
            <BackgroundImage />
            <FloatingShapes />
            <div className="relative z-10">
              <Navbar />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
