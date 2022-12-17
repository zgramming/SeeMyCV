import { Card } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

import { GroupSkillInterface } from "../../../../interface/cv/cvskill_grouping_interface";
import { CVSkillInterface } from "../../../../interface/cv/cvskill_interface";
import IconAdvanceSVG from "../../../../public/template/2_naraai/advance.svg";
import IconBasicSVG from "../../../../public/template/2_naraai/basic.svg";
import IconBeginnerSVG from "../../../../public/template/2_naraai/beginner.svg";
import IconIntermediateSVG from "../../../../public/template/2_naraai/intermediate.svg";
import {
  CODE_LEVEL_ADVANCE,
  CODE_LEVEL_BASIC,
  CODE_LEVEL_BEGINNER,
  CODE_LEVEL_INTERMEDIATE,
} from "../../../../utils/constant";

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
    <div className="flex flex-col bg-naraai-primary-100 py-24 px-5 md:px-12 lg:px-24">
      <div className="text-center text-naraai-primary-500 text-4xl font-bold pb-8">
        SPECIALIZING IN / SKILLS
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {groupingSkill &&
          Object.keys(groupingSkill).map((keyLevel) => {
            const skillItems = groupingSkill[keyLevel];
            const [nameLevel, codeLevel, bgColorLevel] = keyLevel.split("|");
            let iconSkill = IconAdvanceSVG;
            switch (codeLevel) {
              case CODE_LEVEL_ADVANCE:
                iconSkill = IconAdvanceSVG;
                break;
              case CODE_LEVEL_INTERMEDIATE:
                iconSkill = IconIntermediateSVG;
                break;
              case CODE_LEVEL_BASIC:
                iconSkill = IconBasicSVG;
                break;
              case CODE_LEVEL_BEGINNER:
                iconSkill = IconBeginnerSVG;
                break;

              default:
                iconSkill = IconBasicSVG;
                break;
            }
            return (
              <Card
                key={nameLevel}
                className="bg-white border-none shadow rounded-xl"
                style={{ padding: 0, margin: 0 }}
                bodyStyle={{ padding: 0, margin: 0 }}
              >
                <div className="flex flex-col">
                  <div
                    className="flex flex-row justify-center items-center py-5 rounded-tr-xl rounded-tl-xl"
                    style={{ backgroundColor: `${bgColorLevel}` }}
                  >
                    <div className="relative h-32 w-32">
                      <Image
                        alt="Image Skill"
                        src={iconSkill}
                        className=""
                        style={{ objectFit: "cover" }}
                        fill
                      />
                    </div>
                  </div>
                  <div className="flex flex-col p-5">
                    <div className="font-semibold text-xl text-naraai-gray-1 pb-4">
                      {nameLevel}
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      {skillItems.map((val, index) => {
                        return (
                          <div
                            key={val.id}
                            className="text-naraai-gray-3 text-base lg:text-lg"
                          >
                            {`${val.name}`}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default SkillSection;
