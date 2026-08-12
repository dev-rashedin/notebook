// app/articles/page.tsx
import { SectionHome } from "@/components/ui/home-page-ui";

const SECTION_NOTES = [
  {
    label: "Covers",
    desc: "Ideas and concepts worth explaining properly, not just noting down.",
  },
  {
    label: "Format",
    desc: "Long-form, structured around one idea explored in depth.",
  },
  {
    label: "Frequency",
    desc: "Published when a thought is developed enough to be worth reading.",
  },
];

export default function ArticlesHomePage() {
  return (
    <SectionHome
      introTitle="Section: Articles"
      eyebrow="One Idea, Explored Properly"
      title="ARTICLES"
      metadata={[
        "Filed by Rashedin Islam",
        "Published When Ready",
      ]}
      lead="Some ideas need more than a note. This is where those get worked through properly — a concept explained from the ground up, an opinion argued out, a technique broken down until it actually makes sense. Not everything here is original; some pieces are just an attempt to understand something well enough to explain it clearly."
      description="Written to be read once and understood, not skimmed for a quick answer. Slower to produce than notes, and rarer — these only get written when there's something actually worth saying."
      sidebarTitle="Section Notes"
      sidebarItems={SECTION_NOTES}
    />
  );
}