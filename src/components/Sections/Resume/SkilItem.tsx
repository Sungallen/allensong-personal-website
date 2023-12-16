import { FC, memo } from "react";

import { TimelineItem } from "../../../data/dataDef";

const SkillItem: FC<{ item: TimelineItem }> = memo(({ item }) => {
  const { title, date, location, content } = item;
  return (
    <div className="flex flex-col pb-8 text-start text-neutral-200 last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex flex-col items-start justify-start gap-3 md:justify-start">
          <div className="flex-1 text-sm font-medium italic sm:flex-none">
            {location}
          </div>
          <div className="flex-1 text-sm sm:flex-none">{date}</div>
        </div>
      </div>
      {content}
    </div>
  );
});

SkillItem.displayName = "SkillItem";
export default SkillItem;
