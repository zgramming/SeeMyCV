import { Button, Col, notification, Row, Tooltip } from "antd";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";

import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CvTemplateWebsiteInterface } from "../../../../interface/cv/cvtemplate_website_interface";
import { UserStore } from "../../../../repository/user_store";
import {
  CODE_TEMPLATE_WEB_HOSHIRU,
  CODE_TEMPLATE_WEB_NARAAI,
  CODE_TEMPLATE_WEB_WATANASA,
} from "../../../../utils/constant";
import { observer } from "mobx-react-lite";

const githubUrl = "https://github.com/zgramming";
const webUrl = "https://seemycv.my.id/zeffry";
const linkedInUrl = "https://www.linkedin.com/in/zeffry-reynando/";
const facebookUrl = "https://www.facebook.com/zeffry.reynando/";
const instagramUrl = "https://www.instagram.com/zeffry_reynando/";
const email = "zeffry.reynando@gmail.com";
const pathPDF = "/pdf/zeffry_cv.pdf";
const namePDF = "zeffry-reynando.pdf";

type FooterSetting = {
  backgroundColor: string;
  textColor: string;
};

const handlerFooterSetting = (
  templateWebsite?: CvTemplateWebsiteInterface
): FooterSetting => {
  switch (templateWebsite?.template_website?.code) {
    case CODE_TEMPLATE_WEB_WATANASA:
      return {
        backgroundColor: "bg-watanasa-primary-600",
        textColor: "text-watanasa-primary-600",
      };
    case CODE_TEMPLATE_WEB_NARAAI:
      return {
        backgroundColor: "bg-naraai-primary-600",
        textColor: "text-naraai-primary-600",
      };
    case CODE_TEMPLATE_WEB_HOSHIRU:
      return {
        backgroundColor: "bg-hoshiru-primary-600",
        textColor: "text-hoshiru-primary-600",
      };
    default:
      return {
        backgroundColor: "bg-default-spot-1",
        textColor: "text-default-spot-1",
      };
  }
};

const FooterSection = observer(({ userStore }: { userStore: UserStore }) => {
  const [footerSetting, setFooterSetting] = useState<
    FooterSetting | undefined
  >();

  useEffect(() => {
    if (userStore.item?.CVTemplateWebsite) {
      setFooterSetting(handlerFooterSetting(userStore.item.CVTemplateWebsite));
    }
    return () => {};
  }, [userStore.item?.CVTemplateWebsite]);

  return (
    <div
      className={`${footerSetting?.backgroundColor} py-24 px-5 md:px-12 lg:px-24 font-poppins`}
    >
      <Row>
        <Col sm={24} md={24} lg={13} className="w-full pr-0 lg:pr-10">
          <div className="flex flex-col text-white space-y-10">
            <div className="font-semibold text-4xl xl:text-6xl">
              Want To Work Together On A Project?
            </div>
            <div className="font-medium text-2xl">
              Zeffry Reynando © 2022. All Right Reserved
            </div>
          </div>
        </Col>
        <Col sm={24} md={24} lg={11} className="w-full pt-10 lg:pt-0">
          <div className="flex flex-col space-y-5">
            <Button
              className={`w-full border-solid border-white rounded-lg h-16 ${footerSetting?.textColor} font-bold`}
              size="large"
              type="default"
              onClick={(e) => window.open(`mailto:${email}`)}
            >
              Contact Me
            </Button>
            <Button
              className={`w-full h-16 border-solid font-bold rounded-lg ${footerSetting?.backgroundColor} border-solid border-white`}
              size="large"
              type="primary"
              onClick={(e) => {
                try {
                  saveAs(pathPDF, namePDF);
                  notification.success({
                    message: "Berhasil download CV",
                  });
                } catch (error) {
                  notification.error({
                    message: "Error occured on download CV",
                  });
                }
              }}
            >
              Download CV
            </Button>
            <div className="flex flex-wrap justify-center space-x-8 text-white py-5">
              <Tooltip title="Github" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-8 w-8 md:h-10 md:w-10"
                  onClick={(e) => window.open(githubUrl)}
                />
              </Tooltip>
              <Tooltip title="Website" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="h-8 w-8 md:h-10 md:w-10"
                  onClick={(e) => window.open(webUrl)}
                />
              </Tooltip>
              <Tooltip title="Instagram" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-8 w-8 md:h-10 md:w-10"
                  onClick={(e) => window.open(instagramUrl)}
                />
              </Tooltip>
              <Tooltip title="Facebook" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-8 w-8 md:h-10 md:w-10"
                  onClick={(e) => window.open(facebookUrl)}
                />
              </Tooltip>
              <Tooltip title="LinkedIn" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-8 w-8 md:h-10 md:w-10"
                  onClick={(e) => window.open(linkedInUrl)}
                />
              </Tooltip>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
});

export default FooterSection;
