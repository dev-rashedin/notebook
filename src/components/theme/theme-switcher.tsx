'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/CustomButton';
import { FiMoon } from 'react-icons/fi';
import { IoSunnyOutline } from 'react-icons/io5';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <Button
        variant="theme"
        size="icon"
        className="rounded-full bg-transparent"
        aria-label="Toggle theme"
      >
        <FiMoon />
      </Button>
    );
  }

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Button
      variant="theme"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full bg-transparent mt-1"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FiMoon /> : <IoSunnyOutline />}
    </Button>
  );
}
