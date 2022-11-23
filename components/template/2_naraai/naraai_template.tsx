import { Button, Col, Row } from 'antd';
import Image from 'next/image';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Users } from '../../../interface/main_interface';
import IconSocialMedia from '../../reusable/icon_social_media';

const ProfileSection = () => {
  return (
    <div className="py-12 px-5 md:px-12 lg:px-24 lg:py-24">
      <Row align="top">
        <Col
          className="w-full order-2 pt-6 lg:pt-0 lg:order-1"
          sm={24}
          md={24}
          lg={8}
          xl={6}
        >
          <div className="relative h-[28rem]">
            <div className="absolute bottom-0 right-0 left-0 h-48 bg-naraai-primary-100 rounded-xl"></div>
            <div className="relative flex flex-row h-[25rem] w-64 mx-auto">
              <Image
                alt="Image"
                src={`https://picsum.photos/900`}
                className="rounded-lg shadow-lg"
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
          </div>
        </Col>
        <Col
          className="w-full order-1 lg:order-2"
          sm={24}
          md={24}
          lg={16}
          xl={18}
        >
          <div className="flex flex-col lg:pl-12 xl:pl-24">
            <div
              className="self-start rounded-full font-bold text-white p-3 mb-8"
              style={{
                background: `linear-gradient(90deg, #7562E0 0%, #CEC3FB 145.15%)`,
              }}
            >
              Software Developer & Open Source Lover
            </div>
            <div className="font-bold text-4xl mb-6">Zeffry Reynando</div>
            <div className="text-base text-naraai-gray-3 leading-loose mb-6">
              Lorem ipsum dolor sit amet consectetur. Sed mi est consectetur
              tristique massa quis. Aliquam aliquam mauris nunc amet elit.
              Commodo odio enim mattis vulputate mattis auctor sed id. Aenean
              eget tempor tincidunt arcu montes neque urna.
            </div>
            <Row gutter={24} className="mb-6 space-y-5 md:space-y-0">
              <Col className="w-full" md={12}>
                <Button
                  type="primary"
                  size="large"
                  className="h-14 w-full rounded-xl  bg-naraai-primary-500 border-naraai-primary-500 hover:bg-naraai-primary-100"
                >
                  Contact Me
                </Button>
              </Col>
              <Col className="w-full" md={12}>
                <Button
                  type="ghost"
                  size="large"
                  className="h-14 w-full rounded-xl  text-naraai-primary-500 border-naraai-primary-500"
                >
                  Download CV
                </Button>
              </Col>
            </Row>
            <div className="flex flex-row justify-evenly items-center">
              {Array.from<number>({ length: 6 }).map((val) => {
                return (
                  <div
                    key={val}
                    className="w-14 h-14 flex flex-col items-center justify-center bg-naraai-primary-100 rounded-full"
                  >
                    <IconSocialMedia
                      title="Facebook"
                      icon={faFacebook}
                      className="h-6 w-6 text-naraai-primary-500"
                      onClick={() => {}}
                      visible
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
const ExperienceSection = () => {
  return (
    <div className="flex flex-col px-5 md:px-12 lg:px-24">
      <div className="text-center text-naraai-primary-500 text-4xl font-bold pb-8">
        EXPERIENCES
      </div>
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
        {Array.from<number>({ length: 10 }).map((val) => {
          return (
            <div key={val} className="flex flex-col space-y-5">
              <div className="flex flex-row space-x-5">
                <span>Mar 2022 - Present </span>
                <div className="flex flex-row items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-watanasa-gray-3"
                  />
                  <span>Jakarta</span>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="relative w-24 h-24">
                  <Image
                    alt="Image Loaded"
                    src={`https://picsum.photos/800`}
                    className="rounded shadow-xl"
                    style={{ objectFit: "cover" }}
                    fill
                  />
                </div>
                <div className="flex flex-col space-y-5 pl-8">
                  <span className="font-dm-sans text-naraai-gray-3 text-base">
                    Nutech Integrasi
                  </span>
                  <span className="font-dm-sans text-naraai-gray-1 text-xl">
                    UI/UX Designer
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {Array.from<number>({ length: 5 }).map((val) => {
                      return (
                        <div
                          key={val}
                          className="bg-naraai-primary-100 text-xs text-naraai-primary-500 rounded-lg p-1 xl:p-2"
                        >
                          SQL Server
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="h-40 text-naraai-gray-3 text-sm overflow-clip xl:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas neque accusamus ad saepe, quaerat ipsum, eveniet harum
                hic rem nesciunt ut eius natus modi. Ipsam est exercitationem
                accusantium quo tempora? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptas neque accusamus ad saepe, quaerat
                ipsum, eveniet harum hic rem nesciunt ut eius natus modi. Ipsam
                est exercitationem accusantium quo tempora? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptas neque accusamus
                ad saepe, quaerat ipsum, eveniet harum hic rem nesciunt ut eius
                natus modi. Ipsam est exercitationem accusantium quo tempora?
                Voluptas neque accusamus ad saepe, quaerat ipsum, eveniet harum
                hic rem nesciunt ut eius natus modi. Ipsam est exercitationem
                accusantium quo tempora? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptas neque accusamus ad saepe, quaerat
                ipsum, eveniet harum hic rem nesciunt ut eius natus modi. Ipsam
                est exercitationem accusantium quo tempora? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptas neque accusamus
                ad saepe, quaerat ipsum, eveniet harum hic rem nesciunt ut eius
                natus modi. Ipsam est exercitationem accusantium quo tempora?
              </div>
              <Button
                type="link"
                className="self-start text-naraai-primary-500 hover:text-naraai-primary-500 font-medium"
              >
                Continue Reading
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const EducationSection = () => {
  return <></>;
};
const SkillSection = () => {
  return <></>;
};
const PortfolioSection = () => {
  return <></>;
};
const LicenseCertificateSection = () => {
  return <></>;
};

const NaraaiTemplate = ({ user }: { user: Users }) => {
  return (
    <div className="font-poppins space-y-40">
      <ProfileSection />
      <ExperienceSection />
      <EducationSection />
      <SkillSection />
      <PortfolioSection />
      <LicenseCertificateSection />
    </div>
  );
};

export default NaraaiTemplate;
