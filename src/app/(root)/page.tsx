import {
  ContributeSection,
  DevFeedback,
  FinalCTA,
  Footer,
  Hero,
  HowItWorks
} from '@/components/HomePageSections';

export default function HomePage() {
  return (
    <>
      <section className="space-y-40">
        <Hero />
        <HowItWorks />
        <DevFeedback />
        <ContributeSection />
        <FinalCTA />
      </section>
      <Footer />
    </>
  );
}
