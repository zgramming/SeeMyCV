import { Card, Tag, Tooltip } from "antd";
import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { parse } from "path";
import { env } from "process";

import { FileImageOutlined, FilePdfOutlined } from "@ant-design/icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faEnvelope,
  faFilePdf,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVEducationInterface } from "../interface/cv/cveducation_interface";
import { CVExperienceInterface } from "../interface/cv/cvexperience_interface";
import { CVLicenseCertificateInterface } from "../interface/cv/cvlicensecertificate_interface";
import { CVPortfolioInterface } from "../interface/cv/cvportfolio_interface";
import { CVProfileInterface } from "../interface/cv/cvprofile_interface";
import { CVSkillInterface } from "../interface/cv/cvskill_interface";
import { Users } from "../interface/main_interface";
import { calculatingExperience, dateToyMd } from "../utils/function";

interface Props {
  user: Users;
}

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>{props.user.name}</title>
      </Head>
      <ProfileSection profile={props.user.CVProfile} />
      <ExperienceSection experience={props.user.CVExperience} />
      <EducationSection education={props.user.CVEducation} />
      <SkillSection skill={props.user.CVSkill} />
      <LicenseAndCertificateSection
        licenseCertificate={props.user.CVLicenseCertificate}
      />
      <PortfolioSection portfolio={props.user.CVPortfolio} />
    </>
  );
}

const PortfolioSection = (props: { portfolio: CVPortfolioInterface[] }) => {
  return (
    <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
      <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
        PORTFOLIO
      </div>
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {props.portfolio.map((val, index) => {
          return (
            <Card
              key={val.id}
              bodyStyle={{ padding: 0, margin: 0 }}
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              <div>
                <div className="relative w-full h-40 md:h-80 xl:h-52 ">
                  <Image src={`${val.thumbnail}`} alt="Image Portfolio" fill />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/25 px-5 py-2 ">
                  <div className="text-center font-semibold text-white line-clamp-2">
                    {val.title}
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

const LicenseAndCertificateSection = (props: {
  licenseCertificate: CVLicenseCertificateInterface[];
}) => {
  return (
    <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
      <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
        LICENSE & CERTIFICATE
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {props.licenseCertificate.map((val, index) => {
          const { ext } = parse(val.file ?? "");
          return (
            <Card key={val.id} className="bg-watanasa-scaffold shadow">
              <div className="flex flex-col space-y-2">
                <div className="font-bold font-poppins tracking-widest text-xl">
                  Menjadi Flutter Developer Expert (MFDE) 2019
                </div>
                <div className="text-base">Dicoding</div>
                <div className="flex flex-row items-center space-x-2">
                  <FontAwesomeIcon icon={faCalendar} />
                  <div className="text-sm">Juni 2014 - Juni 2017</div>
                </div>
                <div className="font-light">Kredensial : AXXXX5ABC</div>
                <div>
                  {ext === ".pdf" && (
                    <FilePdfOutlined
                      className="text-xl text-red-600"
                      onClick={(e) => window.open(val.file)}
                    ></FilePdfOutlined>
                  )}
                  {ext === ".png" && (
                    <FileImageOutlined className="text-xl text-green-600"></FileImageOutlined>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const SkillSection = (props: { skill: CVSkillInterface[] }) => {
  return (
    <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
      <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
        SKILL
      </div>
      <div className="flex flex-row justify-end">
        <a className="font-bold text-blue-600">See More</a>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {props.skill.map((val, index) => {
          return (
            <Card
              key={val.id}
              title={val.level.name}
              headStyle={{ color: "white" }}
              className="text-white"
              style={{
                backgroundColor: `${val.level.parameter1_value}`,
              }}
            >
              <div className="text-center font-bold text-xl">{val.name}</div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const EducationSection = (props: { education: CVEducationInterface[] }) => {
  return (
    <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
      <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
        EDUCATION
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {props.education.map((val, index) => {
          const startDate = new Date(val.start_date);
          const endDate = val.end_date && new Date(val.end_date);
          return (
            <Card key={val.id} className="bg-watanasa-scaffold shadow">
              <div className="flex flex-row items-start space-x-5">
                <Image
                  src={`${val.image}`}
                  alt="Image Company Experience"
                  className="rounded-lg"
                  width={60}
                  height={60}
                  onError={(e) => {
                    return <div>Error</div>;
                  }}
                />
                <div className="flex flex-col space-y-2">
                  <div className="font-bold font-poppins tracking-widest text-xl">
                    {val.name}
                  </div>
                  <div className="text-base">
                    {val.major} - {val.field_of_study}
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <FontAwesomeIcon icon={faCalendar} />
                    <div className="text-sm">
                      {startDate.toLocaleDateString("id-ID", {
                        month: "short",
                        year: "numeric",
                      })}
                      {" - "}
                      {endDate
                        ? endDate.toLocaleDateString("id-ID", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Sekarang"}
                    </div>
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

const ExperienceSection = (props: { experience: CVExperienceInterface[] }) => {
  return (
    <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
      <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
        EXPERIENCE
      </div>
      <div className="grid grid-cols-1 gap-10">
        {props.experience.map((val, index) => {
          const startDate = new Date(val.start_date);
          const endDate = val.end_date && new Date(val.end_date);
          const calculating = calculatingExperience(
            startDate,
            endDate ?? new Date()
          );
          const tags = val.tags && (JSON.parse(val.tags) as string[]);
          return (
            <Card key={val.id} className="bg-watanasa-scaffold shadow">
              <div className="flex flex-row items-start space-x-5">
                <div className="hidden md:block">
                  <Image
                    src={`${val.image_company}`}
                    alt="Image Company Experience"
                    className="rounded-lg"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="font-bold font-poppins tracking-widest text-2xl">
                    {val.company}
                  </div>
                  <div className="font-semibold text-xl">{val.job}</div>
                  <div className="flex flex-row items-center space-x-2 pb-5">
                    <FontAwesomeIcon icon={faCalendar} />
                    <div className="text-sm">
                      {dateToyMd(startDate)} -{" "}
                      {endDate ? dateToyMd(endDate) : "Sekarang"} {calculating}
                    </div>
                  </div>
                  <div className="text-justify font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti, facilis asperiores? Veniam ratione quas rerum,
                    earum ipsam fugit quasi odio est provident illum temporibus
                    officiis modi sit placeat aliquid cumque. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quod pariatur
                    voluptatem architecto placeat dolorum laudantium fugit quae
                    quas dignissimos debitis delectus aliquam est eum rem, illum
                    dolorem itaque ipsa molestiae. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsa ea doloribus voluptas
                    totam cum amet quaerat nulla id earum cumque libero
                    explicabo expedita temporibus, labore vel obcaecati alias
                    consectetur tempora?
                  </div>
                  <div className="flex flex-row flex-wrap gap-2">
                    {tags &&
                      tags.map((val, index) => {
                        return (
                          <Tag key={`${val}_${index}`} color="green">
                            {val}
                          </Tag>
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

const ProfileSection = (props: { profile: CVProfileInterface }) => {
  return (
    <>
      <div
        className={`flex flex-col items-center pb-24 px-5 md:px-12 lg:px-24 xl:px-80`}
      >
        <div className="font-poppins font-bold text-center text-5xl tracking-widest pb-6">
          {props.profile.name.toUpperCase()}
        </div>
        <div className="font-normal text-2xl text-center tracking-widest pb-10">
          {props.profile.motto}
        </div>
        <div className="font-light text-lg text-justify tracking-widest">
          {props.profile.description}
        </div>
      </div>
      <div className="flex flex-col items-center bg-watanasa-spot-1">
        <div
          className={`flex flex-row flex-wrap justify-center gap-10 text-watanasa-shade-4 py-8 px-5 md:px-12 lg:px-24 xl:px-80`}
        >
          {props.profile.email && (
            <Tooltip title="Email" className="hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-8 w-8"
                onClick={(e) => {
                  window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${props.profile.email}`
                  );
                }}
              />
            </Tooltip>
          )}

          {props.profile.twitter && (
            <Tooltip title="Twitter" className="hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="h-8 w-8"
                onClick={(e) => window.open(props.profile.twitter)}
              />
            </Tooltip>
          )}
          {props.profile.instagram && (
            <Tooltip title="Instagram" className="hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-8 w-8"
                onClick={(e) => window.open(props.profile.instagram)}
              />
            </Tooltip>
          )}

          {props.profile.phone && (
            <Tooltip
              title={`${props.profile.phone}`}
              className="hover:cursor-pointer"
            >
              <FontAwesomeIcon icon={faPhone} className="h-8 w-8" />
            </Tooltip>
          )}
          {props.profile.linkedIn && (
            <Tooltip title="LinkedIn" className="hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-8 w-8"
                onClick={(e) => window.open(props.profile.linkedIn)}
              />
            </Tooltip>
          )}
          {props.profile.web && (
            <Tooltip title="Web" className="hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faGlobe}
                className="h-8 w-8"
                onClick={(e) => window.open(props.profile.web)}
              />
            </Tooltip>
          )}
          {props.profile.latest_resume && (
            <Tooltip title="Latest CV" className="hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faFilePdf}
                className="h-8 w-8"
                onClick={(e) => window.open(props.profile.latest_resume)}
              />
            </Tooltip>
          )}
          {props.profile.github && (
            <Tooltip title="Github" className="hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faGithub}
                className="h-8 w-8"
                onClick={(e) => window.open(props.profile.github)}
              />
            </Tooltip>
          )}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${env.BASEAPIURL}/v1/user/zeffry`);
  const {
    success,
    message,
    data,
  }: { success: boolean; message: string; data: Users } = response.data;

  return {
    props: {
      user: data,
    },
  };
};
