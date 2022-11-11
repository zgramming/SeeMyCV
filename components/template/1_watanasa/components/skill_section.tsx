import { Card } from "antd";
import Image from "next/image";

import BGGradient from "../../../../public/template/watanasa/bg_gradient.png";

const SkillItem = () => {
  return (
    <Card
      className="bg-watanasa-primary-900 rounded-xl border-none shadow"
      hoverable
    >
      <div className="flex flex-col text-white space-y-5">
        <div className="font-medium text-base">Advance</div>
        <div className="flex flex-row items-center  space-x-3 ">
          <Card
            className="bg-watanasa-primary-800 border-none"
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            <div className="flex flex-col justify-center items-center text-white text-xl font-semibold">
              U
            </div>
          </Card>
          <div className="text-xl text-white font-semibold">UI/UX Designer</div>
        </div>
      </div>
    </Card>
  );
};

const SkillSection = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <Image
          alt="Image Skill"
          src={BGGradient}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col space-y-12 py-24 px-5 md:px-12 lg:px-24">
        <div className="font-semibold text-white text-4xl">
          SPECIALIZING IN / SKILLS
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Array.from<number>({ length: 16 }).map((val, index) => {
            return <SkillItem key={val} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
