import { FC, memo } from "react";

import { education, experience, SectionId, skill } from "../../../data/data";
import Section from "../../Layout/Section";
import ResumeSection from "./ResumeSection";
import SkillItem from "./SkilItem";
import TimelineItem from "./TimelineItem";

const Resume: FC = memo(() => {
  return (
    <Section className="bg-black" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Experience">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skill">
          {skill.map((item, index) => (
            <SkillItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = "Resume";
export default Resume;
