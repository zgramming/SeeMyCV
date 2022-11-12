import { Button, Col, notification, Row, Tooltip } from "antd";

import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const githubUrl = "https://github.com/zgramming";
const webUrl = "https://seemycv.my.id/zeffry";
const linkedInUrl = "https://www.linkedin.com/in/zeffry-reynando/";
const facebookUrl = "https://www.facebook.com/zeffry.reynando/";
const instagramUrl = "https://www.instagram.com/zeffry_reynando/";
const email = "zeffry.reynando@gmail.com";
const FooterSection = () => {
  return (
    <div className="bg-watanasa-primary-500 py-24 px-5 md:px-12 lg:px-24">
      <Row>
        <Col sm={24} md={24} lg={14} className="w-full">
          <div className="flex flex-col text-white space-y-10">
            <div className="font-semibold text-4xl xl:text-6xl">
              Want To Work Together On A Project?
            </div>
            <div className="font-medium text-2xl">
              Zeffry Reynando © 2022. All Right Reserved
            </div>
          </div>
        </Col>
        <Col sm={24} md={24} lg={10} className="w-full pt-10 lg:pt-0">
          <div className="flex flex-col space-y-5">
            <Button
              className="w-full border-solid border-white rounded-lg h-16 text-watanasa-primary-500 font-bold"
              size="large"
              type="default"
              onClick={(e) => window.open(`mailto:${email}`)}
            >
              Contact Me
            </Button>
            <Button
              className="w-full border-solid border-white rounded-lg h-16"
              size="large"
              type="primary"
              onClick={(e) => {
                notification.info({
                  message: "On Progress",
                });
              }}
            >
              Download CV
            </Button>
            <div className="flex flex-wrap justify-center space-x-10 text-white py-5">
              <Tooltip title="Github" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-10 w-10"
                  onClick={(e) => window.open(githubUrl)}
                />
              </Tooltip>
              <Tooltip title="Website" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="h-10 w-10"
                  onClick={(e) => window.open(webUrl)}
                />
              </Tooltip>
              <Tooltip title="Instagram" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-10 w-10"
                  onClick={(e) => window.open(instagramUrl)}
                />
              </Tooltip>
              <Tooltip title="Facebook" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-10 w-10"
                  onClick={(e) => window.open(facebookUrl)}
                />
              </Tooltip>
              <Tooltip title="LinkedIn" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-10 w-10"
                  onClick={(e) => window.open(linkedInUrl)}
                />
              </Tooltip>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FooterSection;