// app/interviews/page.tsx
import { SectionHome } from "@/components/ui/home-page-ui";

const SECTION_NOTES = [
  {
    label: "Covers",
    desc: "Conversations with people building things — developers, founders, makers.",
  },
  {
    label: "Format",
    desc: "Q&A, kept close to how the conversation actually happened.",
  },
  {
    label: "Frequency",
    desc: "Published whenever a conversation is worth sharing.",
  },
];

export default function InterviewsHomePage() {
  return (
    <SectionHome
      introTitle="Section: Interviews"
      eyebrow="Conversations With People Building Things"
      title="INTERVIEWS"
      metadata={[
        "Filed by Rashedin Islam",
        "Published as They Happen",
      ]}
      lead="Reading about how something was built is useful. Talking to the person who built it is better. This section is a collection of conversations — with developers, founders, and makers — about the decisions, mistakes, and lessons that don't usually make it into a polished write-up. Kept close to how the conversation actually went, questions and all."
      description="Not scripted, not heavily edited — a record of what someone actually said when asked. Some interviews are short and focused on one topic; others wander wherever the conversation went."
      sidebarTitle="Section Notes"
      sidebarItems={SECTION_NOTES}
    />
  );
}