import { Card } from "antd";
import { forwardRef } from "react";
import { Waypoint } from "react-waypoint";

import { CVSkillInterface } from "../../../../interface/cv/cvskill_interface";
import activeNavigationBarStore from "../../../../repository/active_navigationbar";

const SkillSection = forwardRef<HTMLDivElement, { skill: CVSkillInterface[] }>(
  (props, ref) => {
    return (
      <div ref={ref}>
        <Waypoint
          onEnter={(e) => activeNavigationBarStore.setActiveMenu("skill")}
          onLeave={(e) => ""}
          bottomOffset={"50%"}
          topOffset={"20%"}
        >
          <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center">
            <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
              <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
                SKILL
              </div>
              <div className="flex flex-row justify-end">
                <a className="font-bold text-blue-600">See More</a>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {props.skill.map((val, index) => {
                  return (
                    <Card
                      key={val.id}
                      title={val.level.name}
                      headStyle={{ color: "white" }}
                      className="text-white"
                      style={{
                        backgroundColor: `${val.level.parameter1_value}`,
                      }}
                    >
                      <div className="text-center font-bold text-xl">
                        {val.name}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </Waypoint>
      </div>
    );
  }
);

SkillSection.displayName = "Skill Section";

export default SkillSection;
