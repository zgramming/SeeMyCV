import { Avatar, Col, Row } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVExperienceInterface } from "../../../../interface/cv/cvexperience_interface";
import Logo from "../../../../public/images/logo_primary.png";
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

  const Calendar = () => {
    return (
      <div className="flex flex-row space-x-1 items-center">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span className="text-hoshiru-gray-1 text-sm">
          {`${readableStartDate} - ${
            endDate ? readableEndDate : "Present"
          } ${calculating}`}
        </span>
      </div>
    );
  };

  const TagList = () => {
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((val) => {
          return (
            <div
              key={val}
              className="bg-hoshiru-primary-100 font-semibold text-xs text-hoshiru-primary-600 rounded-lg p-1 xl:p-2"
            >
              {val}
            </div>
          );
        })}
      </div>
    );
  };

  const Lines = () => {
    return (
      <div className="hidden relative min-h-full lg:block">
        <div className="absolute top-0 bottom-0 left-1 right-0 mx-auto w-1 border-0 border-dotted border-l-2 border-l-hoshiru-primary-900 " />
        <Avatar className="bg-hoshiru-primary-900" size={"small"} />
      </div>
    );
  };

  return (
    <>
      <Col md={24} lg={10} xl={8} className="w-full pb-10">
        <div className="flex flex-row">
          <div className="basis-full flex flex-col space-y-5">
            <div className="flex flex-row space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  alt="Image Experience"
                  src={experience.image_company ?? Logo}
                  style={{ objectFit: "cover" }}
                  className={"rounded-lg shadow"}
                  fill
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="font-bold text-hoshiru-gray-1 text-lg">
                  {experience.company}
                </div>
                <div className="text-hoshiru-gray-3 text-base">
                  {experience.job}
                </div>
                <Calendar />
              </div>
            </div>
            <TagList />
          </div>
        </div>
      </Col>
      <Col md={24} lg={14} xl={16} className="w-full">
        <div className="flex flex-row space-x-5">
          <Lines />
          <div dangerouslySetInnerHTML={{ __html: experience.description }} />
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
    <div className="flex flex-col space-y-10 px-5 md:px-12 lg:py-12 lg:px-24">
      <div className="font-semibold text-3xl text-hoshiru-primary-900">
        EXPERIENCE
      </div>
      <Row gutter={24}>
        {experience.map((val, index) => {
          return <ExperienceItem key={val.id} experience={val} />;
        })}
      </Row>
    </div>
  );
};

export default ExperienceSection;
