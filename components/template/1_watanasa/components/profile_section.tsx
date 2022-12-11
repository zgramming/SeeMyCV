import { Button, Card, Col, Row, Space } from "antd";
import { saveAs } from "file-saver";
import Image from "next/image";
import { useState } from "react";

import { WarningOutlined } from "@ant-design/icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { CVProfileInterface } from "../../../../interface/cv/cvprofile_interface";
import { Users } from "../../../../interface/main_interface";
import BGProfile from "../../../../public/template/1_watanasa/bg_profile.png";
import IconSocialMedia from "../../../reusable/icon_social_media";

const ProfileBackgroundImage = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <Image
        alt="Image Background"
        src={BGProfile}
        style={{ objectFit: "cover" }}
        loading="eager"
        fill
      />
    </div>
  );
};

const ProfileContent = ({
  profile,
  name,
  email,
}: {
  profile?: CVProfileInterface;
  name: string;
  email: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <div className="text-watanasa-gray-3 text-lg font-medium">
        {profile?.motto}
      </div>
      <div className="text-4xl font-bold lg:text-5xl xl:text-6xl">
        <span className="text-watanasa-primary-500">{name}</span>
      </div>
      <div className="text-watanasa-gray-3 text-sm font-light leading-loose tracking-widest lg:text-base">
        {profile?.description}
      </div>
      <div className="flex flex-wrap space-x-5">
        <IconSocialMedia
          title="Web"
          visible={profile?.web ? true : false}
          icon={faGlobe}
          className="h-8 w-8 text-watanasa-primary-500"
          onClick={() => window.open(profile?.web)}
        />
        <IconSocialMedia
          title="Twitter"
          visible={profile?.twitter ? true : false}
          icon={faTwitter}
          className="h-8 w-8 text-watanasa-primary-500"
          onClick={() => window.open(profile?.twitter)}
        />
        <IconSocialMedia
          title="Facebook"
          visible={profile?.facebook ? true : false}
          icon={faFacebook}
          className="h-8 w-8 text-watanasa-primary-500"
          onClick={() => window.open(profile?.facebook)}
        />
        <IconSocialMedia
          title="Instagram"
          visible={profile?.instagram ? true : false}
          icon={faInstagram}
          className="h-8 w-8 text-watanasa-primary-500"
          onClick={() => window.open(profile?.instagram)}
        />
        <IconSocialMedia
          title="LinkedIn"
          visible={profile?.linkedIn ? true : false}
          icon={faLinkedin}
          className="h-8 w-8 text-watanasa-primary-500"
          onClick={() => window.open(profile?.linkedIn)}
        />
        <IconSocialMedia
          title="Github"
          visible={profile?.github ? true : false}
          icon={faGithub}
          className="h-8 w-8 text-watanasa-primary-500"
          onClick={() => window.open(profile?.github)}
        />
      </div>
      <Space>
        {email && (
          <Button
            type="primary"
            size="large"
            className="rounded-xl"
            onClick={(e) =>
              window.open(`mailto:${email}?subject=DefaultSubject&body=Hello`)
            }
          >
            Contact Me
          </Button>
        )}
        {profile?.latest_resume && (
          <Button
            type="ghost"
            size="large"
            className="rounded-xl"
            onClick={(e) => saveAs(profile.latest_resume!, name)}
          >
            Download CV
          </Button>
        )}
      </Space>
    </div>
  );
};

const ProfileImage = ({ image }: { image: string }) => {
  const [isImageError, setIsImageError] = useState(false);
  return (
    <div className="flex justify-center w-full ">
      <div className="relative w-80 h-96 lg:h-[30rem] xl:w-96">
        {!isImageError ? (
          <Image
            alt="Image Profile"
            src={image}
            className={"rounded-lg shadow-xl"}
            style={{ objectFit: "cover" }}
            onError={(e) => setIsImageError(true)}
            fill
          />
        ) : (
          <Card>
            <div className="flex flex-col items-center justify-center h-96 lg:h-[30rem]">
              <WarningOutlined className="text-watanasa-danger-600 text-4xl" />
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

const ProfileSection = ({ user }: { user: Users }) => {
  const isHasImage = user.CVProfile?.image;
  return (
    <div className="min-h-screen relative flex flex-col justify-center ">
      <ProfileBackgroundImage />
      <div className="py-24 px-5 md:px-12 lg:px-24">
        <Row align="middle">
          <Col className="w-full" sm={24} md={24} lg={isHasImage ? 14 : 24}>
            <ProfileContent
              profile={user.CVProfile}
              email={user.email}
              name={user.name}
            />
          </Col>
          {isHasImage && (
            <Col sm={24} md={24} lg={10} className="w-full py-10 lg:py-0">
              <ProfileImage image={user.CVProfile?.image!} />
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default ProfileSection;
