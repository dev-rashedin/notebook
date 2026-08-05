import Link from 'next/link';
import { Button } from './CustomButton';
const Hero = () => {
  return (
    <main className="min-h-[92vh] max-w-3xl  mx-auto flex-col-center text-center px-4">
      <em>Inspired by create-vite and shadcn</em>
      <h1 className="mb-5 hover:glow" style={{ lineHeight: '1.1' }}>
        The Ultimate Backend Builder
      </h1>
      <p className="text-lg lg:text-xl">
        The simplest way to bootstrap backend projects. Generate clean templates, add the tools you
        need, and evolve your stack without friction.
      </p>
      <p className="text-base md:text-lg mt-5 ">
        <span className="text-brand ">Express</span> and{' '}
        <span className="text-brand ">Fastify</span> templates are available now, <br /> more
        frameworks coming soon!
      </p>
      <div className="flex gap-4 mt-8">
        <Button variant="default" size="lg">
          <Link href="/guide">Get Started</Link>
        </Button>
        <Button variant="outline" size="lg">
          <Link
            href="https://github.com/dev-rashedin/servest"
            target="_blank"
            className="flex-center gap-2"
          >
        
            GitHub
          </Link>
        </Button>
      </div>
    </main>
  );
};
export default Hero;
