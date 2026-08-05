import {
  ContributeSection,
  DevFeedback,
  FinalCTA,
  Footer,
  Hero,
} from '@/components/HomePageSections';

export default function HomePage() {
  return (
    <>
      <section className="space-y-40">
        <Hero />
   
        <DevFeedback />
        <ContributeSection />
        <FinalCTA />
      </section>
      <Footer />
    </>
  );
}
