import { Button, Col, Row, Space, Tooltip } from 'antd';
import Image from 'next/image';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BGProfile from '../../../../public/template/watanasa/bg_profile.png';

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

const ProfileContent = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="text-watanasa-gray-3 text-lg font-medium">
        Web Developer | Open Source Lover
      </div>
      <div className="text-4xl font-bold lg:text-5xl xl:text-6xl">
        <span className="text-watanasa-primary-500">Zeffry&nbsp;</span>
        <span className="text-watanasa-gray-1">Reynando</span>
      </div>
      <div className="text-watanasa-gray-3 text-sm font-light lg:text-base">
        Lorem ipsum dolor sit amet consectetur. Sed mi est consectetur tristique
        massa quis. Aliquam aliquam mauris nunc amet elit. Commodo odio enim
        mattis vulputate mattis auctor sed id. Aenean eget tempor tincidunt arcu
        montes neque urna.
      </div>
      <div className="flex flex-wrap space-x-5">
        <Tooltip title="Web" className="hover:cursor-pointer">
          <FontAwesomeIcon
            icon={faGlobe}
            className="h-8 w-8 text-watanasa-primary-500"
          />
        </Tooltip>
        <Tooltip title="Web" className="hover:cursor-pointer">
          <FontAwesomeIcon
            icon={faGlobe}
            className="h-8 w-8 text-watanasa-primary-500"
          />
        </Tooltip>
        <Tooltip title="Web" className="hover:cursor-pointer">
          <FontAwesomeIcon
            icon={faGlobe}
            className="h-8 w-8 text-watanasa-primary-500"
          />
        </Tooltip>
        <Tooltip title="Web" className="hover:cursor-pointer">
          <FontAwesomeIcon
            icon={faGlobe}
            className="h-8 w-8 text-watanasa-primary-500"
          />
        </Tooltip>
        <Tooltip title="Web" className="hover:cursor-pointer">
          <FontAwesomeIcon
            icon={faGlobe}
            className="h-8 w-8 text-watanasa-primary-500"
          />
        </Tooltip>
      </div>
      <Space>
        <Button type="primary" size="large" className="rounded-xl">
          Contact Me
        </Button>
        <Button type="ghost" size="large" className="rounded-xl">
          Download CV
        </Button>
      </Space>
    </div>
  );
};

const ProfileImage = () => {
  return (
    <div className="flex justify-center w-full ">
      <div className="relative w-80 h-96 lg:h-[30rem] xl:w-96">
        <Image
          alt="Image Profile"
          src={"https://picsum.photos/1000"}
          className={"rounded-lg"}
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
    </div>
  );
};

const ProfileSection = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center ">
      <ProfileBackgroundImage />
      <div className="py-24 px-5 md:px-12 lg:px-24">
        <Row align="middle">
          <Col sm={24} md={24} lg={14} className="w-full">
            <ProfileContent />
          </Col>
          <Col sm={24} md={24} lg={10} className="w-full py-10 lg:py-0">
            <ProfileImage />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProfileSection;
