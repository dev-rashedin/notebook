import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import { RiMvAiLine } from 'react-icons/ri';
import { BiGlobe } from 'react-icons/bi';
import { BsArrowUpRightCircle } from 'react-icons/bs';


export default function AboutNewspaper({ stats = DEFAULT_STATS }) {
  return (
    <section className="w-full bg-[#F3EFE4] text-foreground">
      <div className="max-w-5xl mx-auto border-2 border-border px-5 sm:px-10 py-6 sm:py-8">


        {/* black subhead bar */}
        <div className="bg- text-[#F3EFE4]  text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2 flex-between">
          <span>About Section</span>
          <span>Software Engineer Profile</span>
        </div>

        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 mt-8">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            {/* section title box (in place of the photo) */}
            <div className="bg-black text-[#F3EFE4] p-8 sm:p-10 flex flex-col justify-center min-h-[260px]">
              {/* <h2 className="font-display font-black text-3xl sm:text-4xl leading-[1.05]">
                ABOUT
                <br />
                THE
                <br />
                <span className="text-red-500">ENGINEER</span>
              </h2> */}
              <Image
                src="/profile.png"
                alt="Rashedin Islam"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <p className=" italic text-sm text-[#F3EFE4] mt-4">
                Two-plus years turning prompts into production systems.
              </p>
            </div>

            {/* tech stack — bottom section under the title */}
            <div className="border border-border border-t-0 p-5">
              <h3 className=" text-xs uppercase tracking-widest border-b border-border pb-2 mb-3">
                Section: Tech Stack
              </h3>
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=minimal&bg_color=F3EFE4&color=1a1a1a&line=991b1b&point=1a1a1a&hide_border=true`}
                alt={`${GITHUB_USERNAME} GitHub contribution activity graph`}
                className="w-full grayscale contrast-125 border border-border/20"
                loading="lazy"
              />
              <p className=" text-[9px] uppercase tracking-widest text-foreground/50 mt-1 mb-4">
                Wire photo — live contribution activity
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Tailwind CSS'].map((t) => (
                  <span
                    key={t}
                    className=" text-[10px] uppercase tracking-wider border border-border px-2 py-1"
                  >
                    Built with {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            {/* more info about me — top right */}
            <div className="border-l-4 border-red-800 pl-5">
              <h3 className="font-display font-bold text-2xl sm:text-3xl">
                Rashedin Islam
              </h3>
              <p className=" text-xs uppercase tracking-widest text-foreground/70 mt-1">
                AI-Focused Software Engineer · LangChain · LangGraph
              </p>

              <ul className=" text-sm mt-4 space-y-1.5">
                <li className="flex items-center gap-2">
                  <RiMvAiLine size={14} className="text-brand" />
                  <a
                    href="mailto:rashedinislam.06@gmail.com"
                    className="hover:underline"
                  >
                    rashedinislam.06@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <BiGlobe size={14} className="text-brand" />
                  <a
                    href="https://www.rashedin.dev"
                    className="hover:underline"
                  >
                    rashedin.dev
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaLinkedin size={14} className="text-brand" />
                  <a
                    href="http://linkedin.com/in/dev-rashedin"
                    className="hover:underline"
                  >
                    linkedin.com/in/dev-rashedin
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaGithub size={14} className="text-brand" />
                  <a
                    href="http://github.com/dev-rashedin"
                    className="hover:underline"
                  >
                    github.com/dev-rashedin
                  </a>
                </li>
              </ul>

              {/* stats ticker — signature element */}
              <div className="flex justify-between border-y border-border mt-5 py-2">
                <StatCell value={stats.experience} label="Yrs Exp." />
                <StatCell value={stats.githubStars} label="Repo Stars" />
                <StatCell value={stats.liveProjects} label="Live Projects" />
                <StatCell value={stats.articles} label="Articles" last />
              </div>
            </div>

            {/* lede / summary paragraph */}
            <p className="drop-cap  text-[15px] leading-7 text-foreground/85 text-justify mt-6">
              AI-focused Software Engineer with 2+ years of experience
              designing and shipping production GenAI systems — LLM-powered
              agents and RAG pipelines. Skilled in LangChain, LangGraph, and
              prompt engineering, with a strong full-stack foundation in
              React, React Native, Next.js, Node.js, FastAPI and PostgreSQL
              for end-to-end AI product delivery.
            </p>

            <a
              href="http://github.com/dev-rashedin"
              className=" text-xs uppercase tracking-widest inline-flex items-center gap-1 mt-4 self-start border-b border-border hover:border-red-800 hover:text-brand transition-colors"
            >
              Continued on GitHub <BsArrowUpRightCircle size={13} />
            </a>
          </div>
        </div>

        {/* skills — two-column classifieds */}
        <hr className="border-border mt-10 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <div>
            <SkillBlock title="AI / ML" items={SKILLS['AI / ML']} />
            <SkillBlock title="Core" items={SKILLS['Core']} />
          </div>
          <div>
            <SkillBlock title="Frontend" items={SKILLS['Frontend']} />
            <SkillBlock title="Backend" items={SKILLS['Backend']} />
          </div>
        </div>

        {/* footer credit */}
        <div className="text-center  text-[9px] uppercase tracking-widest text-foreground/50 border-t border-border pt-3">
          Printed digitally for the web · rashedin.dev · Issue continues on
          GitHub
        </div>
      </div>
    </section>
  );
}
