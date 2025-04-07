'use client';

import { useTheme } from "./ThemeProvider";

export default function BackgroundImage() {
  const { theme } = useTheme();
  return (
    <div className="fixed inset-0" style={{ zIndex: -100 }}>
      <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat" />
      <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 transition-opacity duration-300 ${
        theme === 'dark' ? 'bg-[url("/darkbackground.png")]' : 'bg-[url("/background.png")]'
      }`} />
    </div>
  );
} 