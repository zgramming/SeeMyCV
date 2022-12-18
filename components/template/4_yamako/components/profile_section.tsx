import { Button, Col, Row } from "antd";
import { saveAs } from "file-saver";
import Image from "next/image";

import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { Users } from "../../../../interface/main_interface";
import Logo from "../../../../public/images/logo_primary.png";
import IconSocialMedia from "../../../reusable/icon_social_media";

const ProfileSection = ({ user }: { user: Users }) => {
  const { CVProfile: profile } = user;
  const iconClassName = `flex flex-row items-center justify-center h-10 w-10 rounded-full bg-gray-6 p-3`;
  return (
    <div className="px-5 py-12 md:px-12 lg:py-12 lg:px-24">
      <Row gutter={24} align="middle" className="gap-10 lg:gap-0">
        <Col span={24} md={24} lg={8} xl={8} xxl={6}>
          <div className="flex flex-row items-center justify-center">
            <div className="relative w-52 h-52 bg-gray-1 rounded-full lg:w-64 lg:h-64">
              <Image
                alt="Image Profile"
                src={profile?.image ?? Logo}
                className="rounded-full shadow-lg"
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
          </div>
        </Col>
        <Col span={24} md={24} lg={16} xl={16} xxl={18}>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-5">
              <div className="text-yamako-gray-1 text-lg font-medium lg:text-xl 2xl:text-2xl">
                {user.name}
              </div>
              <div className="text-yamako-gray-1 font-semibold text-xl lg:text-2xl 2xl:text-3xl">
                {profile?.motto}
              </div>
              <div className="text-yamako-gray-2 text-sm leading-loose text-justify">
                {profile?.description}
              </div>
            </div>
            <div className="flex flex-row items-center justify-evenly">
              {profile?.web && (
                <div className={`${iconClassName}`}>
                  <IconSocialMedia
                    title="Web"
                    visible={profile?.web ? true : false}
                    icon={faGlobe}
                    className="h-full w-full text-gray-1"
                    onClick={() => window.open(profile?.web)}
                  />
                </div>
              )}
              {profile?.twitter && (
                <div className={`${iconClassName}`}>
                  <IconSocialMedia
                    title="Twitter"
                    visible={profile?.twitter ? true : false}
                    icon={faTwitter}
                    className="h-full w-full text-gray-1"
                    onClick={() => window.open(profile?.twitter)}
                  />
                </div>
              )}
              {profile?.facebook && (
                <div className={`${iconClassName}`}>
                  <IconSocialMedia
                    title="Facebook"
                    visible={profile?.facebook ? true : false}
                    icon={faFacebook}
                    className="h-full w-full text-gray-1"
                    onClick={() => window.open(profile?.facebook)}
                  />
                </div>
              )}
              {profile?.instagram && (
                <div className={`${iconClassName}`}>
                  <IconSocialMedia
                    title="Instagram"
                    visible={profile?.instagram ? true : false}
                    icon={faInstagram}
                    className="h-full w-full text-gray-1"
                    onClick={() => window.open(profile?.instagram)}
                  />
                </div>
              )}
              {profile?.linkedIn && (
                <div className={`${iconClassName}`}>
                  <IconSocialMedia
                    title="LinkedIn"
                    visible={profile?.linkedIn ? true : false}
                    icon={faLinkedin}
                    className="h-full w-full text-gray-1"
                    onClick={() => window.open(profile?.linkedIn)}
                  />
                </div>
              )}
              {profile?.github && (
                <div className={`${iconClassName}`}>
                  <IconSocialMedia
                    title="Github"
                    visible={profile?.github ? true : false}
                    icon={faGithub}
                    className="h-full w-full text-gray-1"
                    onClick={() => window.open(profile?.github)}
                  />
                </div>
              )}
            </div>
            <Row gutter={24} align="middle" className="gap-5 lg:gap-0">
              {profile?.latest_resume && (
                <Col span={24} md={24} lg={12} xl={12}>
                  <Button
                    type="ghost"
                    size="large"
                    className="rounded-xl w-full border-gray-1"
                    onClick={(e) => saveAs(profile.latest_resume!, user.name)}
                  >
                    Download CV
                  </Button>
                </Col>
              )}
              {user.email && (
                <Col span={24} md={24} lg={12} xl={12}>
                  <Button
                    type="primary"
                    size="large"
                    className="rounded-xl w-full bg-gray-1 border-none"
                    onClick={(e) =>
                      window.open(
                        `mailto:${user.email}?subject=DefaultSubject&body=Hello`
                      )
                    }
                  >
                    Contact Me
                  </Button>
                </Col>
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSection;
