import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/dev-rashedin", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dev-rashedin",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:rashedinislam.06@gmail.com",
    icon: HiOutlineMail,
  },
  {
    label: "Portfolio",
    href: "https://www.rashedin.dev",
    icon: HiOutlineGlobeAlt,
  },
];

const ISSUE_INDEX = [
  {
    label: "Case Studies",
    href: "/case-studies",
    desc: "Full write-ups of real builds, start to finish.",
  },
  {
    label: "Notes",
    href: "/notes",
    desc: "Working reference — quick, ongoing, unpolished.",
  },
  {
    label: "Articles",
    href: "/articles",
    desc: "Longer pieces on ideas worth explaining properly.",
  },
  {
    label: "Interviews",
    href: "/interviews",
    desc: "Conversations with people building things.",
  },
  {
    label: "Resources",
    href: "/resources",
    desc: "Tools, links, and material worth keeping.",
  },
];

function todayStamp() {
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function HomePage() {
  return (
    <main className="min-h-[92vh] flex flex-col">
      <div className="max-w-5xl w-full mx-auto px-5 sm:px-10 py-10 sm:py-16 flex-1 flex flex-col">
        {/* top bar */}
        {/* <div className="flex items-center justify-between  text-[10px] sm:text-xs uppercase tracking-widest border-b border-border pb-2">
          <span>notebook.rashedin.dev</span>
          <span>Vol. I — No. 001</span>
          <span>{todayStamp()}</span>
        </div> */}

        {/* masthead */}
        <div className="text-center py-8 sm:py-12 border-b-4 border-border">
          <p className=" text-[10px] sm:text-xs tracking-[0.3em] text-brand uppercase mb-3">
            Field Notes &amp; Case Studies
          </p>
          <h1 className="font-display font-black text-5xl sm:text-7xl tracking-tight leading-none">
            THE NOTEBOOK
          </h1>
          <div className="flex items-center justify-center gap-3 mt-5  text-[10px] sm:text-xs uppercase tracking-widest text-foreground/70">
            <span>Est. 2026</span>
            <span className="text-border">|</span>
            <span>Reporting by Rashedin Islam</span>
            <span className="text-border">|</span>
            <span>Single Correspondent Edition</span>
          </div>
        </div>

        {/* two-column front page */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-10">
          {/* lede — takes 2 of 3 columns */}
          <div className="md:col-span-2 md:border-r md:border-border md:pr-8">
            <p className=" text-base sm:text-lg leading-8 text-foreground/85 text-justify [&::first-letter]:font-display [&::first-letter]:font-black [&::first-letter]:text-6xl [&::first-letter]:float-left [&::first-letter]:leading-[0.8] [&::first-letter]:pr-2 [&::first-letter]:pt-1">
              This is where case studies, interviews, notes, and articles get
              filed as they happen — a working notebook rather than a polished
              portfolio. Expect rough edges, real experiments, and the
              occasional dead end.
            </p>

            <p className="text-sm sm:text-base leading-7 text-foreground/70 text-justify mt-5">
              No editorial calendar, no publishing schedule — just a record kept
              as the work happens.
            </p>
          </div>

          {/* in this issue — sidebar column */}
          <div>
            <h2 className=" text-[10px] uppercase tracking-widest border-b-2 border-border pb-2 mb-3">
              In This Issue
            </h2>
            <ul className="space-y-4">
              {ISSUE_INDEX.map(({ label, href, desc }) => (
                <li key={label}>
                  <a href={href} className="group block">
                    <span className="font-semibold text-sm group-hover:text-brand transition-colors">
                      {label}
                    </span>
                    <p className=" text-xs text-foreground/60 leading-5 mt-0.5">
                      {desc}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* contact the editor — classified box */}
        <div className="border border-border mt-10 sm:mt-14">
          <div className="bg-foreground text-background  text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2">
            Contact the Editor
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 py-5 hover:bg-foreground/5 transition-colors"
              >
                <Icon size={18} className="text-brand" />
                <span className=" text-[10px] uppercase tracking-widest">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="text-center max-w-fit mx-auto px-20 text-[10px] uppercase tracking-widest text-foreground/80 border-t border-border py-4 mt-auto">
        © {new Date().getFullYear()} Rashedin Islam. All rights reserved.
      </footer>
    </main>
  );
}
