import { useEffect, useState } from "react";

import { GroupSkillInterface } from "../../../../interface/cv/cvskill_grouping_interface";
import { CVSkillInterface } from "../../../../interface/cv/cvskill_interface";

const SkillSection = ({ skills }: { skills: CVSkillInterface[] }) => {
  const [groupingSkill, setGroupingSkill] = useState<
    GroupSkillInterface | undefined
  >(undefined);

  useEffect(() => {
    if (skills.length !== 0) {
      const result = skills.reduce((prev, current) => {
        const key = `${current.level.name}|${current.level.code}|${current.level.parameter1_value}`;
        prev[key] = prev[key] || [];
        prev[key].push(current);
        return prev;
      }, Object.create(null));

      setGroupingSkill((state) => {
        return result;
      });
    }
    return () => {};
  }, [skills]);

  return (
    <div className="flex flex-col font-dm-sans gap-10 px-5 py-12 md:px-12 lg:py-12 lg:px-24">
      <div className="text-gray-1 font-medium font-outfit text-3xl 2xl:text-4xl">
        Skills
      </div>
      {groupingSkill &&
        Object.keys(groupingSkill).map((keyLevel, indexLevel) => {
          const skillItems = groupingSkill[keyLevel];
          const [nameLevel, codeLevel, bgColorLevel] = keyLevel.split("|");

          return (
            <div key={keyLevel} className="flex flex-col space-y-5">
              <div className="text-gray-1 font-bold 2xl:text-xl">
                {nameLevel}
              </div>
              <div className="flex flex-wrap gap-5">
                {skillItems.map((skill, index) => {
                  return (
                    <div key={skill.id} className="2xl:text-lg">
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SkillSection;
