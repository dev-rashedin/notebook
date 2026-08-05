import {
  FinalCTA,
  Footer,
  Hero,
} from '@/components/HomePageSections';

export default function HomePage() {
  return (
    <>
      <section className="space-y-40">
        <Hero />
        <FinalCTA />
      </section>
      <Footer />
    </>
  );
}
