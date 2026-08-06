function todayStamp() {
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-[86vh] flex flex-col">
      <div className="max-w-5xl w-full mx-auto px-5 sm:px-10 py-10 sm:py-16 flex-1 flex flex-col">
        {/* top bar */}
        <div className="flex items-center justify-between gap-8 lg:gap-16 xl:gap-24 uppercase tracking-widest text-foreground/80 text-[9px]">
          <span>Section: Case Studies</span>
          <span>{todayStamp()}</span>
        </div>

        {/* masthead */}
        <div className="text-center py-8 sm:py-12 border-b-4 border-border">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] text-brand uppercase mb-3">
            Full Write-Ups, Start to Finish
          </p>
          <h1 className="font-display font-black text-5xl sm:text-7xl tracking-tight leading-none">
            CASE STUDIES
          </h1>

          <div className="flex items-center justify-center gap-3 mt-5 text-[10px] sm:text-xs uppercase tracking-widest text-foreground/70">
            <span>Filed by Rashedin Islam</span>
            <span className="text-border">|</span>
            <span>Updated as Projects Ship</span>
          </div>
        </div>

        {/* two-column front page */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-10">
          {/* lede — takes 2 of 3 columns */}
          <div className="md:col-span-2 md:border-r md:border-border md:pr-8">
            <p className="text-base sm:text-lg leading-8 text-foreground/85 text-justify [&::first-letter]:font-display [&::first-letter]:font-black [&::first-letter]:text-6xl [&::first-letter]:float-left [&::first-letter]:leading-[0.8] [&::first-letter]:pr-2 [&::first-letter]:pt-1">
              Every project leaves a trail — decisions made, problems that
              didn't go as planned, fixes that worked and ones that didn't.
              This section is where that trail gets written down properly,
              from the first line of code to whatever shipped at the end.
            </p>

            <p className="text-sm sm:text-base leading-7 text-foreground/70 text-justify mt-5">
              Not tutorials, not marketing copy — a record of what actually
              happened while building something real.
            </p>
          </div>

          {/* section notes — sidebar column */}
          <div>
            <h2 className="text-[10px] uppercase tracking-widest border-b-2 border-border pb-2 mb-3">
              Section Notes
            </h2>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-sm">Covers</span>
                <p className="text-xs text-foreground/60 leading-5 mt-0.5">
                  Real projects — architecture calls, bugs, trade-offs, and
                  outcomes.
                </p>
              </li>
              <li>
                <span className="font-semibold text-sm">Format</span>
                <p className="text-xs text-foreground/60 leading-5 mt-0.5">
                  Long-form, chronological — problem, approach, result.
                </p>
              </li>
              <li>
                <span className="font-semibold text-sm">Frequency</span>
                <p className="text-xs text-foreground/60 leading-5 mt-0.5">
                  Published as projects reach a stopping point, not on a
                  schedule.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}