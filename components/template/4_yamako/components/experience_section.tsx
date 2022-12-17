import { Col, Row } from "antd";
import { useEffect, useState } from "react";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVExperienceInterface } from "../../../../interface/cv/cvexperience_interface";
import { calculatingExperience } from "../../../../utils/function";

const ExperienceItem = ({
  experience,
}: {
  experience: CVExperienceInterface;
}) => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    try {
      if (experience.tags) {
        setTags(JSON.parse(experience.tags) as string[]);
      }
    } catch (error) {}
    return () => {};
  }, [experience.tags]);

  const startDate = new Date(experience.start_date);
  const endDate = experience.end_date && new Date(experience.end_date);
  const calculating = calculatingExperience(startDate, endDate ?? new Date());
  const readableStartDate = startDate.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
  });

  const readableEndDate = endDate?.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
  });
  return (
    <>
      <Col span={2} md={2} lg={2} xl={2} xxl={2}>
        <div className="relative flex flex-row justify-center h-full">
          <div className="absolute top-0 w-4 h-4 rounded-full bg-gray-1"></div>
          <div className="w-1 my-8 bg-gray-6"></div>
        </div>
      </Col>
      <Col span={22} md={22} lg={22} xl={22} xxl={22}>
        <div className="flex flex-col space-y-3 font-dm-sans pb-10">
          <div className="flex flex-row items-center space-x-3 text-xs 2xl:text-base">
            <div className="text-gray-2 text-xs">
              {`${readableStartDate} - ${
                endDate ? readableEndDate : "Present"
              } ${calculating}`}
            </div>
            {experience.location && (
              <div className="flex flex-row items-center space-x-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-gray-7"
                />
                <div className="text-gray-7">{experience.location}</div>
              </div>
            )}
          </div>
          <div className="text-gray-7 text-lg 2xl:text-xl">
            {experience.job}
          </div>
          <div className="font-medium text-gray-1 text-xl 2xl:text-2xl">
            {experience.company}
          </div>
          <div
            className="text-gray-7 text-sm leading-loose text-justify 2xl:text-base"
            dangerouslySetInnerHTML={{ __html: experience.description }}
          />
        </div>
      </Col>
    </>
  );
};

const ExperienceSection = ({
  experience,
}: {
  experience: CVExperienceInterface[];
}) => {
  return (
    <div className="flex flex-col gap-10 px-5 py-12 md:px-12 lg:py-12 lg:px-24">
      <div className="text-gray-1 font-medium font-outfit 2xl:text-4xl">
        Experience
      </div>
      <Row gutter={24} align="stretch">
        {experience.map((val, index) => {
          return <ExperienceItem key={val.id} experience={val} />;
        })}
      </Row>
    </div>
  );
};

export default ExperienceSection;
