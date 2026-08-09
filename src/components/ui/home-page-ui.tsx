


export const todayStamp = () => {
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

