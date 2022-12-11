import { Card } from "antd";
import Image from "next/image";

import { CVEducationInterface } from "../../../../interface/cv/cveducation_interface";
import Logo from "../../../../public/images/logo_primary.png";

const EducationItem = ({
  education,
  index,
}: {
  education: CVEducationInterface;
  index: number;
}) => {
  const startDate = new Date(education.start_date);
  const endDate = education.end_date && new Date(education.end_date);
  const readableStartDate = startDate.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
  });
  const readableEndDate = endDate?.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
  });

  const isOdd = index % 2 == 0;
  const textColor = isOdd ? "text-hoshiru-primary-600" : "text-white";

  return (
    <Card
      key={education.id}
      bodyStyle={{ margin: 0, padding: 0 }}
      style={{ padding: 0, margin: 0 }}
      className="bg-white border-none"
    >
      <div
        className={`flex flex-col items-center justify-center space-y-3 py-8 ${
          isOdd ? "bg-white" : "bg-hoshiru-primary-400"
        }`}
      >
        <div className="relative w-14 h-14">
          <Image
            alt="Image Education"
            src={education.image ?? Logo}
            className="rounded shadow"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className={`${textColor} text-lg`}>{education.name}</div>
        <div className={`${textColor} text-base`}>{education.major}</div>
        <div
          className={`text-base ${
            isOdd ? "text-hoshiru-gray-2" : "text-white"
          }`}
        >{`${readableStartDate} - ${
          endDate ? readableEndDate : "Present"
        }`}</div>
      </div>
    </Card>
  );
};

const EducationSection = ({
  educations,
}: {
  educations: CVEducationInterface[];
}) => {
  return (
    <div className="flex flex-col space-y-10 bg-hoshiru-primary-100 px-5 py-12 md:px-12 lg:py-12 lg:px-24">
      <div className="font-semibold text-3xl text-hoshiru-primary-900">
        EDUCATIONS
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {educations.map((val, index) => {
          return <EducationItem key={val.id} education={val} index={index} />;
        })}
      </div>
    </div>
  );
};

export default EducationSection;
