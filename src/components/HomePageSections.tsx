'use client';
import dynamic from 'next/dynamic';
import Hero from './ui/Home/Hero';
import Footer from './ui/Home/Footer';
import LoadingSkeleton from './ui/Home/LoadingSkeleton';




const FinalCTA = dynamic(() => import('@/components/ui/Home/FinalCTA'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

export { Hero, FinalCTA, Footer };
