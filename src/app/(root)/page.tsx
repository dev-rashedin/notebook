import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/dev-rashedin', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dev-rashedin', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:rashedinislam.06@gmail.com', icon: HiOutlineMail },
  { label: 'Portfolio', href: 'https://www.rashedin.dev', icon: HiOutlineGlobeAlt },
];

function todayStamp() {
  return new Date()
    .toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default function HomePage() {
  return (
    <main className=" flex flex-col">

      <div className="max-w-3xl w-full mx-auto px-5 sm:px-10 py-10 sm:py-16 flex-1 flex flex-col">
        {/* top bar */}
        <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs uppercase tracking-widest border-b border-black pb-2">
          <span>notebook.rashedin.dev</span>
          <span>{todayStamp()}</span>
        </div>

        {/* masthead */}
        <div className="text-center py-8 sm:py-12 border-b-4 border-black">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-red-800 uppercase mb-3">
            Field Notes &amp; Case Studies
          </p>
          <h1 className="font-display font-black text-5xl sm:text-7xl tracking-tight leading-none">
            THE NOTEBOOK
          </h1>
          <p className="font-serif italic text-sm sm:text-base text-black/70 mt-4">
            A running record of what I build, break, and learn — kept by
          </p>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest mt-1">
            Rashedin Islam
          </p>
        </div>

        {/* lede */}
        <p className="font-serif text-base sm:text-lg leading-8 text-black/85 text-justify mt-8 max-w-xl mx-auto">
          This is where case studies, interviews, notes, and articles get
          filed as they happen — a working notebook rather than a polished
          portfolio. Expect rough edges, real experiments, and the occasional
          dead end.
        </p>

        {/* contact the editor — classified box */}
        <div className="border-2 border-black mt-10 sm:mt-14">
          <div className="bg-black text-[#F3EFE4] font-mono text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2">
            Contact the Editor
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-black/20">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 py-5 hover:bg-black/5 transition-colors"
              >
                <Icon size={18} className="text-red-800" />
                <span className="font-mono text-[10px] uppercase tracking-widest">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* footer */}
        <div className="text-center font-mono text-[9px] uppercase tracking-widest text-black/50 border-t border-black pt-4 mt-auto">
          © {new Date().getFullYear()} Rashedin Islam. All rights reserved.
        </div>
      </div>
    </main>
  );
}