import { Card } from "antd";

import { CVSkillInterface } from "../../../../interface/cv/cvskill_interface";

const SkillItem = ({ skill }: { skill: CVSkillInterface }) => {
  return (
    <Card
      className="bg-watanasa-primary-900 rounded-xl border-none shadow"
      hoverable
    >
      <div className="flex flex-col text-white space-y-5">
        <div className="font-medium text-base">{skill.level.name}</div>
        <div className="flex flex-row items-center  space-x-3 ">
          <Card
            className="bg-watanasa-primary-800 border-none"
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            <div className="flex flex-col justify-center items-center text-white text-xl font-semibold">
              {skill.name.length > 0 ? skill.name[0] : "?"}
            </div>
          </Card>
          <div className="text-xl text-white font-semibold">{skill.name}</div>
        </div>
      </div>
    </Card>
  );
};

const SkillSection = ({ skills }: { skills: CVSkillInterface[] }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]"
      style={{
        background :"linear-gradient(258.26deg, #69C0FF 0.95%, #096DD9 65.95%);"
      }}
      >
      </div>
      <div className="flex flex-col space-y-12 py-24 px-5 md:px-12 lg:px-24">
        <div className="font-semibold text-white text-4xl">
          SPECIALIZING IN / SKILLS
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {skills.map((val, index) => {
            return <SkillItem key={val.id} skill={val} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
