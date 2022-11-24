import { Button, Card } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  faBook,
  faClover,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVExperienceInterface } from "../../../interface/cv/cvexperience_interface";
import { Users } from "../../../interface/main_interface";
import LogoPrimary from "../../../public/images/logo_primary.png";
import { calculatingExperience, dateToyMd } from "../../../utils/function";
import ProfileSection from "./components/profile_section";

const ExperienceItem = ({
  experience,
}: {
  experience: CVExperienceInterface;
}) => {
  const [tags, setTags] = useState<string[]>([]);

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

  useEffect(() => {
    try {
      if (experience.tags) {
        setTags(JSON.parse(experience.tags) as string[]);
      }
    } catch (error) {}
    return () => {};
  }, [experience.tags]);

  return (
    <div key={experience.id} className="flex flex-col space-y-5">
      <div className="flex flex-row space-x-5">
        <span>
          {`${readableStartDate} - ${
            endDate ? readableEndDate : "Present"
          } ${calculating}`}
        </span>
        {experience.location && (
          <div className="flex flex-row items-center space-x-3">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-watanasa-gray-3"
            />
            <span>{experience.location}</span>
          </div>
        )}
      </div>
      <div className="flex flex-row items-center">
        <div className="relative w-24 h-24">
          <Image
            alt="Image Loaded"
            src={
              experience.image_company ? experience.image_company : LogoPrimary
            }
            className="rounded shadow-xl"
            style={{ objectFit: "cover" }}
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
        </div>
      </div>
      <div
        className="h-40 text-naraai-gray-3 text-sm overflow-clip xl:text-base"
        dangerouslySetInnerHTML={{ __html: experience.description }}
      />
      <Button
        type="link"
        className="self-start text-naraai-primary-500 hover:text-naraai-primary-500 font-medium"
      >
        Continue Reading
      </Button>
    </div>
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

const EducationSection = () => {
  return (
    <div className="flex flex-col px-5 md:px-12 lg:px-24">
      <div className="text-center text-naraai-primary-500 text-4xl font-bold pb-8">
        EDUCATIONS
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {Array.from<number>({ length: 10 }).map((val) => {
          return (
            <Card key={val} className="bg-naraai-gray-lighter-2">
              <div className="flex flex-col">
                <div className="flex flex-row items-center pb-3">
                  <div className="relative w-16 h-16 ">
                    <Image
                      alt="Image Education"
                      src={`https://picsum.photos/800`}
                      className="rounded-lg shadow-lg"
                      style={{ objectFit: "cover" }}
                      fill
                    />
                  </div>
                  <div className="text-naraai-gray-1 text-base font-medium pl-6 xl:text-xl">
                    SMK Negeri 1 Kota Bekasi
                  </div>
                </div>
                <div className="text-base font-medium pb-1 xl:text-xl">
                  Rekayasa Perangkat Lunak
                </div>
                <div className="text-sm text-naraai-gray-3">2020 - present</div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const SkillSection = () => {
  return (
    <div className="flex flex-col bg-naraai-primary-100 py-24 px-5 md:px-12 lg:px-24">
      <div className="text-center text-naraai-primary-500 text-4xl font-bold pb-8">
        SPECIALIZING IN / SKILLS
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-20">
        {["Advance", "Intermediate", "Basic", "Beginner"].map((skill) => {
          return (
            <Card
              key={skill}
              className="bg-naraai-skill-advance border-none shadow rounded-xl"
              style={{ padding: 0, margin: 0 }}
              bodyStyle={{ padding: 0, margin: 0 }}
            >
              <div className="flex flex-col">
                <div className="flex flex-row justify-center items-center py-5">
                  <FontAwesomeIcon
                    icon={faClover}
                    className="h-20 w-20 text-naraai-primary-500"
                  />
                </div>
                <div className="flex flex-col bg-white p-5">
                  <div className="font-semibold text-xl text-naraai-gray-1 pb-4">
                    {skill}
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    {Array.from<number>({ length: 10 }).map((val) => {
                      return (
                        <div key={val} className="text-naraai-gray-3">
                          ReactJS
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <div className="flex flex-col px-5 md:px-12 lg:px-24">
      <div className="font-semibold text-naraai-gray-3 text-2xl text-center pb-3">
        PORTFOLIO
      </div>
      <div className="text-center text-naraai-primary-500 text-4xl font-bold pb-8">
        LATEST PROJECT
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {Array.from<number>({ length: 10 }).map((val) => {
          return (
            <Card
              key={val}
              style={{
                padding: 0,
                margin: 0,
              }}
              bodyStyle={{
                padding: 0,
                margin: 0,
              }}
              className="rounded-xl"
            >
              <div className="flex flex-col space-y-5 pb-6">
                <div className="relative h-64">
                  <Image
                    alt="Image Portfolio"
                    src={`https://picsum.photos/800`}
                    className="shadow-lg rounded-tl-xl rounded-tr-xl"
                    style={{
                      objectFit: "cover",
                    }}
                    fill
                  />
                </div>
                <div className="flex flex-col space-y-5 px-4">
                  <div className="text-naraai-gray-1 text-base font-medium line-clamp-1">
                    How to prototype in figma
                  </div>
                  <div className="self-start bg-naraai-primary-100 text-naraai-primary-500 text-xs font-medium rounded-xl p-2">
                    July 15, 2021
                  </div>
                  <div className="text-naraai-gray-3 text-base h-24 overflow-hidden">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sapiente, fuga consequatur veniam dicta fugit cum harum hic
                    optio beatae quis at minima ipsa odit, iure distinctio! Nam
                    error dolorum reprehenderit.
                  </div>
                  <Button
                    className="self-start text-naraai-primary-500 font-bold"
                    type="link"
                  >
                    Continue Reading
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const LicenseCertificateSection = () => {
  return (
    <div className="flex flex-col bg-naraai-primary-100 py-24 px-5 md:px-12 lg:px-24">
      <div className="text-center text-naraai-primary-500 text-4xl font-bold pb-14">
        LICENSE & CERTIFICATION
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {Array.from<number>({ length: 10 }).map((val) => {
          return (
            <Card key={val} className="rounded-xl">
              <div className="flex flex-col">
                <div className="self-center bg-naraai-primary-100 text-center rounded-xl border-solid border border-naraai-primary-500 p-4 mb-4">
                  <FontAwesomeIcon
                    icon={faBook}
                    className="text-naraai-primary-500 h-8 w-8"
                  />
                </div>
                <div className="flex flex-row justify-between items-center mb-2">
                  <div className="text-naraai-primary-500 font-medium text-sm">
                    Dicoding
                  </div>
                  <div className="text-naraai-gray-3 text-xs">
                    August 2019 - August 2022
                  </div>
                </div>
                <div className="text-naraai-gray-1 font-medium text-base mb-2">
                  Menjadi Flutter Developer Expert (MFDE)
                </div>
                <div className="text-sm text-naraai-gray-3 underline font-medium mb-4 hover:cursor-pointer">
                  Credential : GRX5KW0DYZ0M
                </div>
                <Button
                  type="primary"
                  size="large"
                  className="w-full rounded text-xs bg-naraai-primary-500 border-none shadow hover:bg-naraai-primary-500"
                >
                  Download File
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const NaraaiTemplate = ({ user }: { user: Users }) => {
  return (
    <div className="font-poppins space-y-40">
      <ProfileSection user={user} />
      <ExperienceSection experience={user.CVExperience} />
      <EducationSection />
      <SkillSection />
      <PortfolioSection />
      <LicenseCertificateSection />
    </div>
  );
};

export default NaraaiTemplate;
