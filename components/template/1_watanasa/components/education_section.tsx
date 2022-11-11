import { Card } from "antd";
import Image from "next/image";

const EducationItem = () => {
  return (
    <Card className="rounded-xl" hoverable>
      <div className="h-80 flex flex-col justify-center items-center text-center space-y-1">
        <div className="relative h-24 w-24">
          <Image
            alt="Education Image"
            src={"https://picsum.photos/800"}
            className="rounded-full shadow"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className="text-watanasa-primary-500 text-lg font-medium py-5">
          Universitas Bina Sarana Informatika
        </div>
        <div className="text-watanasa-gray-4 text-base font-medium">
          System Information
        </div>
        <div className="text-watanasa-gray-2 text-sm font-medium ">
          01 Jun 2019 - 01 Jun 2022
        </div>
      </div>
    </Card>
  );
};

const EducationSection = () => {
  return (
    <div className="min-h-screen bg-watanasa-primary-100 py-24 px-5 md:px-12 lg:px-24">
      <div className="font-semibold text-4xl text-watanasa-primary-900">
        EDUCATIONS
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 py-12">
        {Array.from<number>({ length: 4 }).map((val, index) => {
          return <EducationItem key={val} />;
        })}
      </div>
    </div>
  );
};

export default EducationSection;
