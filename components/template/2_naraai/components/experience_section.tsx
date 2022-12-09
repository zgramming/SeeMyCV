import { Button, Modal } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVExperienceInterface } from "../../../../interface/cv/cvexperience_interface";
import LogoPrimary from "../../../../public/images/logo_primary.png";
import { calculatingExperience } from "../../../../utils/function";

const ExperienceItem = ({
  experience,
}: {
  experience: CVExperienceInterface;
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isImageError, setIsImageError] = useState(false);

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
      <span className="text-naraai-gray-1">
        {`${readableStartDate} - ${
          endDate ? readableEndDate : "Present"
        } ${calculating}`}
      </span>
    );
  };

  const Location = () => {
    if (!experience.location) return null;
    return (
      <div className="flex flex-row items-center space-x-2">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="text-watanasa-gray-3"
        />
        <span className="text-watanasa-gray-3">{experience.location}</span>
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
              className="bg-naraai-primary-100 text-xs text-naraai-primary-500 rounded-lg p-1 xl:p-2"
            >
              {val}
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    try {
      if (experience.tags) {
        setTags(JSON.parse(experience.tags) as string[]);
      }
    } catch (error) {}
    return () => {};
  }, [experience.tags]);

  return (
    <>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-row space-x-3">
          <Calendar />
          <Location />
        </div>
        <div className="flex flex-row items-center">
          <div className="relative w-24 h-24">
            <Image
              alt="Image Loaded"
              src={
                experience.image_company
                  ? experience.image_company
                  : LogoPrimary
              }
              className="rounded shadow-xl"
              style={{ objectFit: "cover" }}
              onError={(e) => setIsImageError(true)}
              fill
            />
          </div>
          <div className="flex flex-col space-y-5 pl-8">
            <span className="font-dm-sans text-naraai-gray-3 text-base">
              {experience.company}
            </span>
            <span className="font-dm-sans text-naraai-gray-1 text-xl">
              {experience.job}
            </span>
            <TagList />
          </div>
        </div>
        <div
          className="h-40 text-naraai-gray-3 text-sm overflow-clip xl:text-base"
          dangerouslySetInnerHTML={{ __html: experience.description }}
          style={{ lineHeight: "30px" }}
        />
        <Button
          type="link"
          className="self-start text-naraai-primary-500 hover:text-naraai-primary-500 font-medium"
          onClick={(e) => setIsOpen(true)}
        >
          Continue Reading
        </Button>
      </div>
      <Modal
        title={
          <div className="flex flex-col space-y-2">
            <div>{experience.company}</div>
            <div className="text-watanasa-primary-500">{experience.job}</div>
            <Calendar />
            <TagList />
          </div>
        }
        open={isOpen}
        onCancel={(e) => setIsOpen(false)}
        footer={null}
      >
        <div dangerouslySetInnerHTML={{ __html: experience.description }} />
      </Modal>
    </>
  );
};

const ExperienceSection = ({
  experience,
}: {
  experience: CVExperienceInterface[];
}) => {
  return (
    <div className="flex flex-col px-5 md:px-12 lg:px-24">
      <div className="text-center text-naraai-primary-500 text-4xl font-bold pb-8">
        EXPERIENCES
      </div>
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
        {experience.map((val) => {
          return <ExperienceItem key={val.id} experience={val} />;
        })}
      </div>
    </div>
  );
};
export default ExperienceSection;
