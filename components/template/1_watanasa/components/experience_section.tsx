import { Button, Card, Col, Row, Tag } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ArrowRightOutlined, CalendarOutlined } from "@ant-design/icons";

import { CVExperienceInterface } from "../../../../interface/cv/cvexperience_interface";
import { calculatingExperience, dateToyMd } from "../../../../utils/function";

const ExperienceHeader = ({ title }: { title: string }) => {
  return (
    <div
      className={`
  absolute top-[-50px] right-[50%] left-0 bg-watanasa-primary-100 rounded-tr-xl rounded-br-xl py-5 px-5 
  md:px-12 md:right-[70%]
  lg:px-24 lg:top-[-50px]
  `}
    >
      <div className="font-semibold text-2xl text-watanasa-primary-900 xl:text-3xl">
        {title ?? "Zeffry"}
      </div>
    </div>
  );
};

const ExperienceItem = ({
  experience,
}: {
  experience: CVExperienceInterface;
}) => {
  const [tags, setTags] = useState<string[] | null>(null);
  const startDate = new Date(experience.start_date);
  const endDate = experience.end_date && new Date(experience.end_date);
  const calculating = calculatingExperience(startDate, endDate ?? new Date());
  const hasImage = experience.image_company;

  useEffect(() => {
    if (experience.tags) {
      try {
        setTags(JSON.parse(experience.tags));
      } catch (error) {
        setTags(null);
      }
    }
    return () => {};
  }, [experience.tags]);

  return (
    <Card className={"rounded-xl"} hoverable>
      <Row align="top">
        {hasImage && (
          <Col sm={24} md={24} lg={4} className="w-full hidden lg:block">
            <div className="relative w-full h-16 bg-red-50 xl:h-20">
              <Image
                alt="Image Experience"
                src={experience.image_company ?? ""}
                className={"rounded-xl shadow-xl"}
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
          </Col>
        )}
        <Col sm={24} md={24} lg={hasImage ? 20 : 24} className="w-full lg:pl-5">
          <div className="flex flex-col space-y-1 text-watanasa-gray-1">
            <div className="font-semibold text-xl">{experience.company}</div>
            <div className="font-medium text-watanasa-gray-3 text-base">
              {experience.job}
            </div>
            <div className="flex flex-row items-center text-xs space-x-2">
              <CalendarOutlined />
              <span>
                {dateToyMd(startDate)} -{" "}
                {endDate ? dateToyMd(endDate) : "Sekarang"} {calculating}
              </span>
            </div>
            <div
              className="text-sm pt-3 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: experience.description }}
            />
            <div className="flex flex-wrap pt-2">
              {tags &&
                tags.map((val, index) => {
                  return (
                    <Tag
                      key={val}
                      className="bg-watanasa-primary-100 text-watanasa-primary-500 font-bold my-1 p-1 rounded border-none"
                    >
                      {val}
                    </Tag>
                  );
                })}
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

const ExperienceSection = ({
  experiences,
}: {
  experiences: CVExperienceInterface[];
}) => {
  return (
    <div className="relative py-24 px-5 md:px-12 lg:px-24 bg-watanasa-primary-500 ">
      <ExperienceHeader title="EXPERIENCE" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {experiences.map((val, index) => {
          return <ExperienceItem key={val.id} experience={val} />;
        })}
      </div>
      {experiences.length > 20 && (
        <div className="flex flex-row justify-end pt-5">
          <Button type="text" className="text-white">
            <span>View More</span>
            <ArrowRightOutlined />
          </Button>
        </div>
      )}
    </div>
  );
};
export default ExperienceSection;
