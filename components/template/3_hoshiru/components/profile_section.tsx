import { Button, Col, notification, Row } from "antd";
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
import Logo from "../../../../public/images/logo_primary.png";
import ProfileBG from "../../../../public/template/3_hoshiru/bg-profile.png";
import IconSocialMedia from "../../../reusable/icon_social_media";

const ProfileSection = ({ user }: { user: Users }) => {
  const { CVProfile: profile } = user;
  return (
    <div className="px-5 py-12 md:px-12 lg:py-12 lg:px-24">
      <Row gutter={24} align="middle">
        <Col span={24} md={24} lg={12} xl={10} className="pb-10 lg:pb-0">
          <div className="flex flex-col space-y-5 lg:flex-row lg:items-center lg:space-x-5">
            <div className="flex flex-row justify-evenly lg:flex-col lg:space-y-5">
              {profile?.web && (
                <IconSocialMedia
                  title="Web"
                  icon={faGlobe}
                  className="h-6 w-6 text-hoshiru-primary-400 md:h-8 md:w-8"
                  onClick={() => window.open(profile?.web)}
                  visible
                />
              )}
              {profile?.twitter && (
                <IconSocialMedia
                  title="Twitter"
                  icon={faTwitter}
                  onClick={() => window.open(profile?.twitter)}
                  className="h-6 w-6 text-hoshiru-primary-400 md:h-8 md:w-8"
                  visible
                />
              )}
              {profile?.facebook && (
                <IconSocialMedia
                  title="Facebook"
                  icon={faFacebook}
                  onClick={() => window.open(profile?.facebook)}
                  className="h-6 w-6 text-hoshiru-primary-400 md:h-8 md:w-8"
                  visible
                />
              )}
              {profile?.instagram && (
                <IconSocialMedia
                  title="Instagram"
                  icon={faInstagram}
                  onClick={() => window.open(profile?.instagram)}
                  className="h-6 w-6 text-hoshiru-primary-400 md:h-8 md:w-8"
                  visible
                />
              )}
              {profile?.linkedIn && (
                <IconSocialMedia
                  title="LinkedIn"
                  icon={faLinkedin}
                  onClick={() => window.open(profile?.linkedIn)}
                  className="h-6 w-6 text-hoshiru-primary-400 md:h-8 md:w-8"
                  visible
                />
              )}
              {profile?.github && (
                <IconSocialMedia
                  title="Github"
                  icon={faGithub}
                  onClick={() => window.open(profile?.github)}
                  className="h-6 w-6 text-hoshiru-primary-400 md:h-8 md:w-8"
                  visible
                />
              )}
            </div>
            <div className="relative flex flex-row justify-center w-full h-96">
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <div className="relative w-full h-full">
                  <Image
                    alt="Image Profile BG"
                    src={ProfileBG}
                    style={{ objectFit: "fill" }}
                    fill
                  />
                </div>
              </div>
              <div className="relative h-full aspect-[3/4]">
                <Image
                  alt="Image Profile"
                  src={profile?.image ?? Logo}
                  className="rounded-lg shadow-lg"
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} md={24} lg={12} xl={14}>
          <div className="flex flex-col space-y-5">
            <div className="font-semibold text-5xl text-hoshiru-primary-700 text-center">
              {user.name}
            </div>
            <div className="text-hoshiru-gray-3 text-xl text-center">
              {profile?.motto}
            </div>
            <div className="text-hoshiru-gray-3 text-base text-center">
              {profile?.description}
            </div>
            <Row gutter={8} align="middle">
              <Col md={24} lg={12} xl={12} className="w-full pb-5 lg:pb-0">
                <Button
                  type="primary"
                  size="large"
                  className="w-full rounded-lg bg-hoshiru-primary-600 border-none hover:bg-hoshiru-primary-700"
                  onClick={(e) => {
                    if (!user.email) {
                      notification.info({
                        message: "User tidak menyediakan contact",
                      });
                      return;
                    }

                    window.open(
                      `mailto:${user.email}?subject=DefaultSubject&body=Hello`
                    );
                  }}
                >
                  Contact Me
                </Button>
              </Col>
              <Col md={24} lg={12} xl={12} className="w-full">
                <Button
                  type="ghost"
                  size="large"
                  className="w-full rounded-lg"
                  onClick={(e) => {
                    if (!profile?.latest_resume) {
                      notification.info({
                        message: "User tidak menyediakan CV Terbaru",
                      });
                      return;
                    }

                    saveAs(profile.latest_resume, user.name);
                  }}
                >
                  Download CV
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSection;
