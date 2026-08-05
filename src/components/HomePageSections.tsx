'use client';
import dynamic from 'next/dynamic';
import Hero from './ui/Home/Hero';
import Footer from './ui/Home/Footer';
import LoadingSkeleton from './ui/Home/LoadingSkeleton';

const DevFeedback = dynamic(() => import('@/components/ui/Home/DevFeedback'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});



const ContributeSection = dynamic(() => import('@/components/ui/Home/ContributeSection'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});
const FinalCTA = dynamic(() => import('@/components/ui/Home/FinalCTA'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

export { Hero, DevFeedback, ContributeSection, FinalCTA, Footer };
