import React from 'react';
import Navbar from '@/components/Navbar';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative bg-docs">
      <Navbar type="home" />
      {children}
    </main>
  );
}
