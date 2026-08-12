import { SectionHome } from "@/components/ui/home-page-ui";

const SECTION_NOTES = [
  {
    label: "Covers",
    desc: "Real projects — architecture calls, bugs, trade-offs, and outcomes.",
  },
  {
    label: "Format",
    desc: "Long-form, chronological — problem, approach, result.",
  },
  {
    label: "Frequency",
    desc: "Published as projects reach a stopping point, not on a schedule.",
  },
];

export default function CaseStudiesHomePage() {
  return (
    <SectionHome
      introTitle="Section: Case Studies"
      eyebrow="Full Write-Ups, Start to Finish"
      title="CASE STUDIES"
      metadata={[
        "Filed by Rashedin Islam",
        "Updated as Projects Ship",
      ]}
      lead="Every project leaves a trail — decisions made, problems that didn't go as planned, fixes that worked and ones that didn't. This section is where that trail gets written down properly, from the first line of code to whatever shipped at the end. Some trails are short — a bug fixed, a lesson learned in an afternoon. Others stretch across weeks, with false starts and rewrites along the way."
      description="Not tutorials, not marketing copy — a record of what actually happened while building something real. The kind of detail that gets left out once a project looks finished. Written close to the work, not after the fact."
      sidebarTitle="Section Notes"
      sidebarItems={SECTION_NOTES}
    />
  );
}