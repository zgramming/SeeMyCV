import { Button, Card } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

import { faClover } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVSkillInterface } from "../../../../interface/cv/cvskill_interface";

interface GroupSkillInterface {
  [level: string]: CVSkillInterface[];
}

const SkillSection = ({ skills }: { skills: CVSkillInterface[] }) => {
  const [groupingSkill, setGroupingSkill] = useState<
    GroupSkillInterface | undefined
  >(undefined);

  useEffect(() => {
    if (skills.length !== 0) {
      const result = skills.reduce((prev, current) => {
        const key = `${current.level.name}`;
        prev[key] = prev[key] || [];
        prev[key].push(current);
        return prev;
      }, Object.create(null));
      console.log({ type: typeof result });
      console.log({ group: result });
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
          Object.keys(groupingSkill).map((level) => {
            const skillItems = groupingSkill[level];
            return (
              <Card
                key={level}
                className="bg-white border-none shadow rounded-xl"
                style={{ padding: 0, margin: 0 }}
                bodyStyle={{ padding: 0, margin: 0 }}
              >
                <div className="flex flex-col">
                  <div className="flex flex-row justify-center items-center py-5 bg-purple-400 rounded-tr-xl rounded-tl-xl">
                    <FontAwesomeIcon
                      icon={faClover}
                      className="h-20 w-20 text-white"
                    />
                  </div>
                  <div className="flex flex-col p-5">
                    <div className="font-semibold text-xl text-naraai-gray-1 pb-4">
                      {level}
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
