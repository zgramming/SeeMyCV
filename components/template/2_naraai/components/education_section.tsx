import { Card } from "antd";
import Image from "next/image";

import { CVEducationInterface } from "../../../../interface/cv/cveducation_interface";
import LogoPrimary from "../../../../public/images/logo_primary.png";

const EducationItem = ({ education }: { education: CVEducationInterface }) => {
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
  return (
    <Card key={education.id} className="bg-naraai-gray-lighter-2">
      <div className="flex flex-col">
        <div className="flex flex-row items-center pb-3">
          <div className="relative w-16 h-16 ">
            <Image
              alt="Image Education"
              src={education.image ? education.image : LogoPrimary}
              className="rounded-lg shadow-lg"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
          <div className="text-naraai-gray-1 text-base font-medium pl-6 xl:text-xl">
            {education.name}
          </div>
        </div>
        <div className="text-xs text-naraai-primary-500 font-bold pb-1">
          {education.field_of_study}
        </div>
        <div className="text-base font-medium pb-1 xl:text-xl">
          {`${education.major}`}
        </div>
        <div className="text-sm text-naraai-gray-3">{`${readableStartDate} - ${
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
    <div className="flex flex-col px-5 md:px-12 lg:px-24">
      <div className="text-center text-naraai-primary-500 text-4xl font-bold pb-8">
        EDUCATIONS
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {educations.map((val) => {
          return <EducationItem key={val.id} education={val} />;
        })}
      </div>
    </div>
  );
};

export default EducationSection;
