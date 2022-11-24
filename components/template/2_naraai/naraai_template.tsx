import { Button, Card } from "antd";
import Image from "next/image";

import { faBook, faClover } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Users } from "../../../interface/main_interface";
import EducationSection from "./components/education_section";
import ExperienceSection from "./components/experience_section";
import ProfileSection from "./components/profile_section";

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
      <EducationSection educations={user.CVEducation} />
      <SkillSection />
      <PortfolioSection />
      <LicenseCertificateSection />
    </div>
  );
};

export default NaraaiTemplate;
