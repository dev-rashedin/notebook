// app/notes/page.tsx
import { SectionHome } from "@/components/ui/home-page-ui";

const SECTION_NOTES = [
  {
    label: "Covers",
    desc: "Quick technical references — commands, configs, gotchas worth remembering.",
  },
  {
    label: "Format",
    desc: "Short and unpolished, organized by topic rather than by date.",
  },
  {
    label: "Frequency",
    desc: "Added whenever something's worth writing down before it's forgotten.",
  },
];

export default function NotesHomePage() {
  return (
    <SectionHome
      introTitle="Section: Notes"
      eyebrow="Working Reference, Not a Diary"
      title="NOTES"
      metadata={[
        "Filed by Rashedin Islam",
        "Updated Continuously",
      ]}
      lead="These aren't articles — they're the things I looked up once and didn't want to look up again. A command that finally worked, a config that took too long to figure out, a gotcha that cost an afternoon. Some are a few lines long. Others grow over time as I circle back and add what I missed the first time."
      description="No narrative, no polish — just the working notes I'd want in front of me the next time this comes up. Organized to be searched, not read start to finish. If it's here, it's because I needed it more than once."
      sidebarTitle="Section Notes"
      sidebarItems={SECTION_NOTES}
    />
  );
}