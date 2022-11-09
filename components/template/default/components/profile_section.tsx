import { Tooltip } from "antd";
import { Waypoint } from "react-waypoint";

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFilePdf,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVProfileInterface } from "../../../../interface/cv/cvprofile_interface";
import activeNavigationBarStore from "../../../../repository/active_navigationbar";

const ProfileSection = (props: {
  profile?: CVProfileInterface;
  name: string;
  email: string;
}) => {
  return (
    <Waypoint
      onEnter={(e) => activeNavigationBarStore.setActiveMenu(null)}
      onLeave={(e) => ""}
    >
      <div className="min-h-[calc(100vh-8rem)] flex flex-col">
        <div className="flex flex-col px-5 pt-24 md:px-12 lg:px-24 xl:px-80 mb-auto">
          <div className="font-poppins font-bold text-center text-5xl tracking-widest pb-6">
            {props.name.toUpperCase()}
          </div>
          <div className="font-normal text-2xl text-center tracking-widest pb-10">
            {props.profile?.motto}
          </div>
          <div className="font-light text-lg text-justify tracking-widest">
            {props.profile?.description}
          </div>
        </div>
        <div className="flex flex-col items-center bg-watanasa-spot-1 ">
          <div
            className={`flex flex-row flex-wrap justify-center gap-10 text-watanasa-shade-4 py-8 px-5 md:px-12 lg:px-24 xl:px-80`}
          >
            {props.email && (
              <Tooltip title="Email" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-8 w-8"
                  onClick={(e) => {
                    window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=${props.email}`
                    );
                  }}
                />
              </Tooltip>
            )}

            {props.profile?.twitter && (
              <Tooltip title="Twitter" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="h-8 w-8"
                  onClick={(e) => window.open(props.profile?.twitter)}
                />
              </Tooltip>
            )}
            {props.profile?.instagram && (
              <Tooltip title="Instagram" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-8 w-8"
                  onClick={(e) => window.open(props.profile?.instagram)}
                />
              </Tooltip>
            )}

            {props.profile?.phone && (
              <Tooltip
                title={`${props.profile?.phone}`}
                className="hover:cursor-pointer"
              >
                <FontAwesomeIcon icon={faPhone} className="h-8 w-8" />
              </Tooltip>
            )}
            {props.profile?.linkedIn && (
              <Tooltip title="LinkedIn" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-8 w-8"
                  onClick={(e) => window.open(props.profile?.linkedIn)}
                />
              </Tooltip>
            )}
            {props.profile?.web && (
              <Tooltip title="Web" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="h-8 w-8"
                  onClick={(e) => window.open(props.profile?.web)}
                />
              </Tooltip>
            )}
            {props.profile?.latest_resume && (
              <Tooltip title="Latest CV" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="h-8 w-8"
                  onClick={(e) => window.open(props.profile?.latest_resume)}
                />
              </Tooltip>
            )}
            {props.profile?.github && (
              <Tooltip title="Github" className="hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-8 w-8"
                  onClick={(e) => window.open(props.profile?.github)}
                />
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </Waypoint>
  );
};

export default ProfileSection;
