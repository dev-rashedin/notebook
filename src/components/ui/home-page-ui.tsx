import { SOCIALS } from "@/constant";

type SectionType = "home" | "section";

type IssueItem = {
  label: string;
  href?: string;
  desc: string;
};

type SectionHomeProps = {
  type?: SectionType;

  introTitle: string;

  eyebrow: string;
  title: string;
  metadata: string[];

  lead: string;
  description: string;

  sidebarTitle: string;
  sidebarItems: IssueItem[];
};

const todayStamp = () => {
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const SectionIntro = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between gap-8 lg:gap-16 xl:gap-24 uppercase tracking-widest text-foreground/80 text-[9px]">
      <span>{title}</span>
      <span>{todayStamp()}</span>
    </div>
  );
};

export const ContactEditor = () => {
  return (
    <div className="border border-border mt-10 sm:mt-14">
      <div className="bg-foreground/80 text-background text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2">
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
            <span className="text-[10px] uppercase tracking-widest">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export const SectionHome = ({
  type = "section",
  introTitle,
  eyebrow,
  title,
  metadata,
  lead,
  description,
  sidebarTitle,
  sidebarItems,
}: SectionHomeProps) => {
  const isHome = type === "home";

  return (
    <main className={isHome ? "" : "flex flex-col"}>
      <div
        className={`max-w-5xl w-full mx-auto px-5 sm:px-10 py-10 sm:py-16 flex-1 flex flex-col ${
          isHome ? "" : ""
        }`}
      >
        {/* top bar */}
        <SectionIntro title={introTitle} />

        {/* masthead */}
        <div className="text-center py-8 sm:py-12 border-b-4 border-border">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] text-brand uppercase mb-3">
            {eyebrow}
          </p>

          <h1 className="font-display font-black text-5xl sm:text-7xl tracking-tight leading-none">
            {title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-5 text-[10px] sm:text-xs uppercase tracking-widest text-foreground/70">
            {metadata.map((item, index) => (
              <span key={item} className="flex items-center gap-3">
                {index > 0 && <span className="text-border">|</span>}
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* two-column front page */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-10">
          {/* lede */}
          <div className="md:col-span-2 md:border-r md:border-border md:pr-8">
            <p className="text-base sm:text-lg leading-8 text-foreground/85 text-justify [&::first-letter]:font-display [&::first-letter]:font-black [&::first-letter]:text-6xl [&::first-letter]:float-left [&::first-letter]:leading-[0.8] [&::first-letter]:pr-2 [&::first-letter]:pt-1">
              {lead}
            </p>

            <p className="text-sm sm:text-base leading-7 text-foreground/70 text-justify mt-5">
              {description}
            </p>
          </div>

          {/* sidebar */}
          <div>
            <h2 className="text-[10px] uppercase tracking-widest border-b-2 border-border pb-2 mb-3">
              {sidebarTitle}
            </h2>

            <ul className="space-y-4">
              {sidebarItems.map(({ label, href, desc }) => (
                <li key={label}>
                  {href ? (
                    <a href={href} className="group block">
                      <span className="font-semibold text-sm group-hover:text-brand transition-colors">
                        {label}
                      </span>

                      <p className="text-xs text-foreground/60 leading-5 mt-0.5">
                        {desc}
                      </p>
                    </a>
                  ) : (
                    <>
                      <span className="font-semibold text-sm">{label}</span>

                      <p className="text-xs text-foreground/60 leading-5 mt-0.5">
                        {desc}
                      </p>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* contact editor */}
        <ContactEditor />
      </div>

      {/* home footer */}
      {isHome && (
        <footer className="text-center max-w-fit mx-auto px-20 text-[9px] uppercase tracking-widest text-foreground/80 border-t border-border py-4 mt-auto">
          © {new Date().getFullYear()} Rashedin Islam. All rights reserved.
        </footer>
      )}
    </main>
  );
};