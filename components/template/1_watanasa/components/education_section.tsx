import { Card } from "antd";
import Image from "next/image";
import { useState } from "react";

import { WarningOutlined } from "@ant-design/icons";

import { CVEducationInterface } from "../../../../interface/cv/cveducation_interface";
import { dateToyMd } from "../../../../utils/function";

const EducationItem = ({ education }: { education: CVEducationInterface }) => {
  const [isImageError, setIsImageError] = useState(false);

  const startDate = new Date(education.start_date);
  const endDate = education.end_date && new Date(education.end_date);
  const hasImage = education.image;
  return (
    <Card className="rounded-xl" hoverable>
      <div className="h-80 flex flex-col justify-center items-center text-center space-y-1">
        {hasImage && (
          <div className="relative h-24 w-24">
            {!isImageError ? (
              <Image
                alt="Education Image"
                src={education.image ?? ""}
                className="rounded-full shadow"
                style={{ objectFit: "cover" }}
                onError={(e) => setIsImageError(true)}
                fill
              />
            ) : (
              <div className="h-full flex flex-col justify-center items-center">
                <WarningOutlined className="text-4xl text-watanasa-danger-600" />
              </div>
            )}
          </div>
        )}
        <div className="text-watanasa-primary-500 text-lg font-medium py-5">
          {education.name}
        </div>
        <div className="text-watanasa-gray-4 text-base font-medium">
          {education.major} - {education.field_of_study}
        </div>
        <div className="text-watanasa-gray-2 text-sm font-medium ">
          {dateToyMd(startDate)} - {endDate ? dateToyMd(endDate) : "Sekarang"}
        </div>
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
    <div className="bg-watanasa-primary-100 py-24 px-5 md:px-12 lg:px-24">
      <div className="font-semibold text-4xl text-watanasa-primary-900">
        EDUCATIONS
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 py-12">
        {educations.map((val, index) => {
          return <EducationItem key={val.id} education={val} />;
        })}
      </div>
    </div>
  );
};

export default EducationSection;
