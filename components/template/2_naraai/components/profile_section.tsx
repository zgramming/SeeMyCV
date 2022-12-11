import { Button, Col, Row } from "antd";
import saveAs from "file-saver";
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
import LogoPrimary from "../../../../public/images/logo_primary.png";
import IconSocialMedia from "../../../reusable/icon_social_media";

const ProfileSection = ({ user }: { user: Users }) => {
  const { CVProfile: profile } = user;
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
            <div className="relative flex flex-row h-[25rem] w-64 bg-naraai-primary-500 rounded-xl mx-auto">
              <Image
                alt="Image"
                src={profile?.image ? profile.image : LogoPrimary}
                className="rounded-xl shadow-lg"
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
              {profile?.motto}
            </div>
            <div className="font-bold text-4xl mb-6">{user.name}</div>
            <div className="text-base text-naraai-gray-3 leading-loose mb-6">
              {profile?.description}
            </div>
            <Row gutter={24} className="mb-6 space-y-5 md:space-y-0">
              {user.email && (
                <Col className="w-full" md={12}>
                  <Button
                    type="primary"
                    size="large"
                    className="h-14 w-full rounded-xl  bg-naraai-primary-500 border-naraai-primary-500 hover:bg-naraai-primary-500"
                    onClick={(e) => {
                      window.open(
                        `mailto:${user.email}?subject=DefaultSubject&body=Hello`
                      );
                    }}
                  >
                    Contact Me
                  </Button>
                </Col>
              )}
              {profile?.latest_resume && (
                <Col className="w-full" md={12}>
                  <Button
                    type="ghost"
                    size="large"
                    className="h-14 w-full rounded-xl  text-naraai-primary-500 border-naraai-primary-500"
                    onClick={(e) => saveAs(profile?.latest_resume!, user.name)}
                  >
                    Download CV
                  </Button>
                </Col>
              )}
            </Row>
            <div className="flex flex-row justify-evenly items-center">
              {profile?.web && (
                <div
                  key={profile.web}
                  className="w-10 h-10 flex flex-col items-center justify-center bg-naraai-primary-100 rounded-full lg:w-14 lg:h-14"
                >
                  <IconSocialMedia
                    title="Web"
                    icon={faGlobe}
                    className="h-4 w-4 text-naraai-primary-500 lg:h-6 lg:w-6"
                    onClick={() => window.open(profile?.web)}
                    visible
                  />
                </div>
              )}

              {profile?.twitter && (
                <div
                  key={profile.twitter}
                  className="w-10 h-10 flex flex-col items-center justify-center bg-naraai-primary-100 rounded-full lg:w-14 lg:h-14"
                >
                  <IconSocialMedia
                    title="Twitter"
                    icon={faTwitter}
                    onClick={() => window.open(profile?.twitter)}
                    className="h-4 w-4 text-naraai-primary-500 lg:h-6 lg:w-6"
                    visible
                  />
                </div>
              )}

              {profile?.facebook && (
                <div
                  key={profile.facebook}
                  className="w-10 h-10 flex flex-col items-center justify-center bg-naraai-primary-100 rounded-full lg:w-14 lg:h-14"
                >
                  <IconSocialMedia
                    title="Facebook"
                    icon={faFacebook}
                    onClick={() => window.open(profile?.facebook)}
                    className="h-4 w-4 text-naraai-primary-500 lg:h-6 lg:w-6"
                    visible
                  />
                </div>
              )}

              {profile?.instagram && (
                <div
                  key={profile.instagram}
                  className="w-10 h-10 flex flex-col items-center justify-center bg-naraai-primary-100 rounded-full lg:w-14 lg:h-14"
                >
                  <IconSocialMedia
                    title="Instagram"
                    icon={faInstagram}
                    onClick={() => window.open(profile?.instagram)}
                    className="h-4 w-4 text-naraai-primary-500 lg:h-6 lg:w-6"
                    visible
                  />
                </div>
              )}

              {profile?.linkedIn && (
                <div
                  key={profile.linkedIn}
                  className="w-10 h-10 flex flex-col items-center justify-center bg-naraai-primary-100 rounded-full lg:w-14 lg:h-14"
                >
                  <IconSocialMedia
                    title="LinkedIn"
                    icon={faLinkedin}
                    onClick={() => window.open(profile?.linkedIn)}
                    className="h-4 w-4 text-naraai-primary-500 lg:h-6 lg:w-6"
                    visible
                  />
                </div>
              )}

              {profile?.github && (
                <div
                  key={profile.github}
                  className="w-10 h-10 flex flex-col items-center justify-center bg-naraai-primary-100 rounded-full lg:w-14 lg:h-14"
                >
                  <IconSocialMedia
                    title="Github"
                    icon={faGithub}
                    onClick={() => window.open(profile?.github)}
                    className="h-4 w-4 text-naraai-primary-500 lg:h-6 lg:w-6"
                    visible
                  />
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSection;
