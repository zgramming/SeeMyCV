import { Card } from "antd";

import { CVSkillInterface } from "../../../../interface/cv/cvskill_interface";
import SkillSVG from "../../../../public/template/3_hoshiru/design_services.svg";
import Image from "next/image";

const SkillItem = ({ skill }: { skill: CVSkillInterface }) => {
  return (
    <Card key={skill.id} className="bg-hoshiru-primary-100">
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="h-20 w-20 relative flex flex-col items-center justify-center rounded-full bg-white shadow">
          <Image
            alt="ICON SKILL SVG"
            src={SkillSVG}
            style={{ objectFit: "cover" }}
            className="p-5"
            fill
          />
        </div>
        <div className="font-bold text-hoshiru-primary-500 text-lg">
          {skill.name}
        </div>
        <div className="text-hoshiru-primary-500 text-base">
          {skill.level.name}
        </div>
      </div>
    </Card>
  );
};

const SkillSection = ({ skills }: { skills: CVSkillInterface[] }) => {
  return (
    <div className="flex flex-col space-y-10 px-5 py-12 md:px-12 lg:py-12 lg:px-24">
      <div className="font-semibold text-3xl text-hoshiru-primary-900">
        SPECIALIZING IN / SKILLS
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {skills.map((val, index) => {
          return <SkillItem key={val.id} skill={val} />;
        })}
      </div>
    </div>
  );
};

export default SkillSection;
