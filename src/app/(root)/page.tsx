import { SectionHome } from "@/components/ui/home-page-ui";
import MotionWrapper from "../../components/MotionWrapper";

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
];

export default function HomePage() {
  return (
    <MotionWrapper>
      <SectionHome
        type="home"
        introTitle="Vol. I — No. 001"
        eyebrow="Field Notes & Case Studies"
        title="THE NOTEBOOK"
        metadata={[
          "Est. 2026",
          "Reporting by Rashedin Islam",
          "Single Correspondent Edition",
        ]}
        lead="This is where case studies, interviews, notes, and articles get filed as they happen — a working notebook rather than a polished portfolio. Expect rough edges, real experiments, and the occasional dead end."
        description="No editorial calendar, no publishing schedule — just a record kept as the work happens."
        sidebarTitle="In This Issue"
        sidebarItems={ISSUE_INDEX}
      />
    </MotionWrapper>
  );
}