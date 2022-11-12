import { Button, Card, Col, Row, Space, Tooltip } from "antd";
import { saveAs } from "file-saver";
import Image from "next/image";
import { useState } from "react";

import { WarningOutlined } from "@ant-design/icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVProfileInterface } from "../../../../interface/cv/cvprofile_interface";
import { Users } from "../../../../interface/main_interface";
import BGProfile from "../../../../public/template/watanasa/bg_profile.png";

const ProfileBackgroundImage = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <Image
        alt="Image Background"
        src={BGProfile}
        fill
        style={{ objectFit: "cover" }}
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
  const Icon = ({
    title,
    content,
    icon,
    onClick,
  }: {
    title: string;
    content?: string;
    icon: IconProp;
    onClick: () => void;
  }) => {
    if (!content) return null;
    return (
      <Tooltip title={title} className="hover:cursor-pointer">
        <FontAwesomeIcon
          icon={icon}
          className="h-8 w-8 text-watanasa-primary-500"
          onClick={onClick}
        />
      </Tooltip>
    );
  };
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <div className="text-watanasa-gray-3 text-lg font-medium">
        {profile?.motto}
      </div>
      <div className="text-4xl font-bold lg:text-5xl xl:text-6xl">
        <span className="text-watanasa-primary-500">{name}</span>
      </div>
      <div className="text-watanasa-gray-3 text-sm font-light lg:text-base">
        {profile?.description}
      </div>
      <div className="flex flex-wrap space-x-5">
        <Icon
          title="Web"
          content={profile?.web}
          icon={faGlobe}
          onClick={() => window.open(profile?.web)}
        />
        <Icon
          title="Twitter"
          content={profile?.twitter}
          icon={faTwitter}
          onClick={() => window.open(profile?.twitter)}
        />
        <Icon
          title="Facebook"
          content={profile?.facebook}
          icon={faFacebook}
          onClick={() => window.open(profile?.facebook)}
        />
        <Icon
          title="Instagram"
          content={profile?.instagram}
          icon={faInstagram}
          onClick={() => window.open(profile?.instagram)}
        />
        <Icon
          title="LinkedIn"
          content={profile?.linkedIn}
          icon={faLinkedin}
          onClick={() => window.open(profile?.linkedIn)}
        />
        <Icon
          title="Github"
          content={profile?.github}
          icon={faGithub}
          onClick={() => window.open(profile?.github)}
        />
      </div>
      <Space>
        {profile?.phone && (
          <Button
            type="primary"
            size="large"
            className="rounded-xl"
            onClick={(e) => window.open(`tel:${profile.phone}`)}
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
