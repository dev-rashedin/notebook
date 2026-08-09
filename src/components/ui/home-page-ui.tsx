import { SOCIALS } from "@/constant";



const todayStamp = () => {
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}



export const SectionIntro = ({title}: {title: string}) => {
  return (
    <div className="flex items-center justify-between gap-8 lg:gap-16 xl:gap-24 uppercase tracking-widest text-foreground/80 text-[9px]">
          <span>{title}</span>
          <span>{todayStamp()}</span>
        </div> 
  )
}

export const ContactEditor = () => {
  return (
    <div className="border border-border mt-10 sm:mt-14">
      {/* contact the editor — classified box */}
      <div className="bg-foreground text-background text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2">
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


