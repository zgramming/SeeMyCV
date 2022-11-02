import { Card, Tag, Tooltip } from "antd";
import Image from "next/image";

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
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Zeffry Reynando</title>
    </Head>
      <ProfileSection />
      <ExperienceSection />
      <EducationSection />
      <SkillSection />
      <LicenseAndCertificateSection />
      <PortfolioSection />
    </>
  );
}

const PortfolioSection = () => {
  return (
    <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
      <div className="font-bold font-poppins text-6xl text-center tracking-widest py-24">
        PORTFOLIO
      </div>
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {Array.from<number>({ length: 23 }).map((val,index) => {
          return (
            <Card
              key={index}
              bodyStyle={{ padding: 0, margin: 0 }}
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              <div>
                <div className="relative w-full h-40 md:h-60 lg:h-80 ">
                  <Image
                    src={"https://picsum.photos/900"}
                    alt="Image Portfolio"
                    fill
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/25 px-5 py-2 ">
                  <div className="text-center font-semibold text-white line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, nostrum. Atque consequatur ullam, soluta ut
                    natus ducimus fugiat doloribus dolore, aliquid minus,
                    consequuntur necessitatibus corporis nesciunt sed
                    repudiandae fugit quas.
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

const LicenseAndCertificateSection = () => {
  return (
    <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
      <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
        LICENSE & CERTIFICATE
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {Array.from<number>({ length: 3 }).map((val, index) => (
          <Card
            key={index}
            className="bg-watanasa-scaffold shadow hover:bg-watanasa-accent
          hover:cursor-pointer hover:rounded hover:text-white
          "
          >
            <div className="flex flex-row items-start space-x-5">
              <div className="hidden lg:block">
              <Image
                src={"https://picsum.photos/600"}
                alt="Image Company Experience"
                className="rounded-lg"
                width={60}
                height={60}
              />
              </div>
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
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const SkillSection = () => {
  return (
    <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
      <div className="font-bold font-poppins text-6xl text-center tracking-widest py-24">
        SKILL
      </div>
      <div className="flex flex-row justify-end">
        <a className="font-bold text-blue-600">See More</a>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array.from<number>({ length: 10 }).map((val,index) => {
          return (
            <Card
              key={index}
              headStyle={{ color: "white" }}
              className="bg-watanasa-accent text-white"
              title="Advance"
            >
              <div className="text-center font-bold text-xl">SQL SERVER</div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
      <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
        EDUCATION
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {Array.from<number>({ length: 3 }).map((val, index) => (
          <Card key={index} className="bg-watanasa-scaffold shadow">
            <div className="flex flex-row items-start space-x-5">
              <Image
                src={"https://picsum.photos/600"}
                alt="Image Company Experience"
                className="rounded-lg"
                width={60}
                height={60}
              />
              <div className="flex flex-col space-y-2">
                <div className="font-bold font-poppins tracking-widest text-xl">
                  SMK Negeri 1 Kota Bekasi
                </div>
                <div className="text-base">
                  Rekayasa Perangkat Lunak - Vocational School
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FontAwesomeIcon icon={faCalendar} />
                  <div className="text-sm">Juni 2014 - Juni 2017</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
      <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
        EXPERIENCE
      </div>
      <div className="grid grid-cols-1 gap-10">
        {Array.from<number>({ length: 10 }).map((val, index) => (
          <Card key={index} className="bg-watanasa-scaffold shadow">
            <div className="flex flex-row items-start space-x-5">
              <div className="hidden md:block">
                <Image
                  src={"https://picsum.photos/600"}
                  alt="Image Company Experience"
                  className="rounded-lg"
                  width={60}
                  height={60}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="font-bold font-poppins tracking-widest text-2xl">
                  PT Brilyan Trimatra Utama
                </div>
                <div className="font-semibold text-xl">Web Developer</div>
                <div className="flex flex-row items-center space-x-2 pb-5">
                  <FontAwesomeIcon icon={faCalendar} />
                  <div className="text-sm">
                    4 April 2020 - 4 April 2022 (2 Years Experience)
                  </div>
                </div>
                <div className="text-justify font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, facilis asperiores? Veniam ratione quas rerum, earum
                  ipsam fugit quasi odio est provident illum temporibus officiis
                  modi sit placeat aliquid cumque. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quod pariatur voluptatem
                  architecto placeat dolorum laudantium fugit quae quas
                  dignissimos debitis delectus aliquam est eum rem, illum
                  dolorem itaque ipsa molestiae. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ipsa ea doloribus voluptas totam
                  cum amet quaerat nulla id earum cumque libero explicabo
                  expedita temporibus, labore vel obcaecati alias consectetur
                  tempora?
                </div>
                <div className="flex flex-row flex-wrap">
                  <Tag color="green">SQL Server</Tag>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ProfileSection = () => {
  return (
    <>
      <div
        className={`flex flex-col items-center pb-24 px-5 md:px-12 lg:px-24 xl:px-80`}
      >
        <div className="font-poppins font-bold text-center text-5xl tracking-widest pb-6">
          ZEFFRY REYNANDO
        </div>
        <div className="font-normal text-2xl text-center tracking-widest pb-10">
          Software Developer & Open Source Loverz
        </div>
        <div className="font-light text-lg text-justify tracking-widest">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius optio
          eligendi, eveniet quas tenetur vero commodi aliquid esse ab ducimus
          consequatur cumque maxime, molestias explicabo mollitia provident
          omnis voluptatem voluptatibus. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Cumque ex at blanditiis similique accusantium
          doloribus quibusdam consectetur, tempore nihil delectus expedita
          consequuntur voluptatem suscipit deleniti totam aut facere? Eveniet,
          molestias?
        </div>
      </div>
      <div className="flex flex-col items-center bg-watanasa-spot-1">
        <div
          className={`flex flex-row flex-wrap justify-center gap-10 text-watanasa-shade-4 py-8 px-5 md:px-12 lg:px-24 xl:px-80`}
        >
          <Tooltip title="Email" className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8" />
          </Tooltip>
          <Tooltip title="Twitter" className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faTwitter} className="h-8 w-8" />
          </Tooltip>
          <Tooltip title="Instagram" className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
          </Tooltip>
          <Tooltip title="Phone" className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faPhone} className="h-8 w-8" />
          </Tooltip>
          <Tooltip title="LinkedIn" className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
          </Tooltip>
          <Tooltip title="Web" className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faGlobe} className="h-8 w-8" />
          </Tooltip>
          <Tooltip title="Latest CV" className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faFilePdf} className="h-8 w-8" />
          </Tooltip>
          <Tooltip title="Github" className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
          </Tooltip>
        </div>
      </div>
    </>
  );
};
